import axios, { AxiosError } from 'axios'
import { ElMessageBox, ElNotification } from 'element-plus'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// Create a Axios Instance

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  withCredentials: false,
  timeout: 12000,
  headers: {
    'Content-type': 'application/json',
    Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
  }
})

// Request Interceptor

axiosInstance.interceptors.request.use(
  (config) => {
    nprogress.start()
    return config
  },
  (error) => {
    nprogress.done()
    return Promise.reject(error)
  }
)

// Response Interceptor

axiosInstance.interceptors.response.use(
  (response) => {
    nprogress.done()
    return response
  },
  (error: Error | AxiosError) => {
    nprogress.done()
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401 && error.response?.data === 'Token expired') {
        localStorage.removeItem('token')
        return axiosInstance({
          method: 'post',
          url: 'auth/refresh',
          data: {
            token: localStorage.getItem('token')
          }
        })
      } else if (
        error.response?.status === 401 &&
        error.response?.data === 'Need short-term token'
      ) {
        ElMessageBox.prompt('Please enter your password to continue', 'Password', {
          confirmButtonText: 'Submit',
          cancelButtonText: 'Cancel',
          inputType: 'password',
          inputPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          inputErrorMessage:
            'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number'
        }).then(({ value }) => {
          axiosInstance({
            method: 'post',
            url: '/user/auth',
            data: {
              mode: 'short',
            }
          })
        })
      } else if (error.response?.status === 401) {
        ElNotification({
          title: 'Error',
          message: 'Your session has expired, or you are not authorized. Please login again.',
          type: 'error'
        })
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        window.location.href = '/user/login'
        console.log(error)
      } else return Promise.reject(error)
    } else return Promise.reject(error)
  }
)

export default axiosInstance
