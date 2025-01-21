import axios from '@/plugins/axios'
import type { Response, UserActivityTimeSums } from '@/../types'
import { ElNotification } from 'element-plus'

async function getUserTime(user: string) {
  const result = (await axios(`/user/${user}/time`)).data as Response<
    UserActivityTimeSums & {
      trophy: number
    }
  >
  if (result.status === 'error') {
    ElNotification({
      title: '获取用户时间错误（' + result.code + '）',
      message: result.message,
      type: 'error'
    })
    return null
  }
  return result.data as UserActivityTimeSums & {
    trophy: number
  }
}

export { getUserTime as read }
