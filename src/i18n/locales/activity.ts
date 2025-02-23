export const enUS = {
  type: {
    specified: {
      name: 'On-Campus Activity',
      short: 'On-Campus',
      key: 'specified',
      description:
        'On-Campus Activities are volunteers created by the administrator, posted as a recruitment, and need to specify the maximum number of people who can sign up for each class.'
    },
    social: {
      name: 'Off-Campus Activity',
      short: 'Off-Campus',
      key: 'social',
      description:
        'Off-Campus Activities are volunteers that can be created by at least the secretary, and all participants must be designated at the time of creation. It is limited to volunteers on weekends and holidays off campus during the semester.'
    },
    scale: {
      name: 'Social Practice Activity',
      short: 'Social Practice',
      key: 'scale',
      description:
        'Social Practice Activities are volunteers that can be created by anyone in Jan - Mar, Jul - Oct, and all participants must be designated at the time of creation. It is limited to social volunteers during winter and summer vacation according to the scale notification file of the school.'
    },
    special: {
      name: 'Special Activity',
      short: 'Special',
      key: 'special',
      description:
        'Special Activities are volunteers created by administrators for contest winners, large scales, etc. Participants are not required to submit the impression.'
    },
    unknown: 'Unknown'
  },
  mode: {
    'on-campus': {
      name: 'On-Campus Activities',
      short: 'On Campus',
      key: 'on-campus'
    },
    'off-campus': {
      name: 'Off-Campus Activities',
      short: 'Off Campus',
      key: 'off-campus'
    },
    'social-practice': {
      name: 'Social Practice Activities',
      short: 'Social Practice',
      key: 'social-practice'
    }
  },
  form: {
    type: 'Type',
    title: '{create} {type}',
    name: 'Name',
    description: 'Description',
    date: 'Date',
    mode: 'Mode',
    person: 'Member(s) | Member | Members',
    class: 'Class(es) | Class | Classes',
    duration: 'Duration',
    classify: 'Classify',
    pending: 'Pending',
    detail: 'Detail',
    upload: {
      name: 'Upload',
      prompt: 'Click or drag file to this area to upload',
      allow: 'Allow only {type} file'
    },
    actions: {
      submit: 'Submit',
      cancel: 'Cancel',
      modify: 'Modify',
      save: 'Save',
      reset: 'Reset',
      delete: {
        name: 'Delete',
        confirm:
          'After deletion, including impressions and other data, it will not be able to be restored, are you sure to delete?'
      },
      modification: {
        status: 'Modify the status of {activity}',
        effective: 'Approve',
        refused: 'Deny',
        confirm: 'Please confirm the modification of the status of the activity.'
      },
      refresh: 'Refresh'
    },
    details: 'Details',
    impression: 'Impression',
    image: 'Image'
  },
  units: {
    item: 'item | item | items',
    hour: 'hour | hour | hours',
    word: 'word | word | words',
    person: 'person | person | people'
  },
  image: {
    upload: {
      name: 'Upload',
      prompt: 'Click or drag images here to upload',
      allow: 'Allow only {type} image'
    },
    select: {
      name: 'Select'
    },
    empty: {
      name: 'Empty'
    }
  },
  impression: {
    write: 'Write',
    name: 'Impression',
    reward: 'Reward',
    actions: {
      write: 'Write',
      reflect: 'Reflect',
      view: 'View'
    },
    page: {
      write: {
        title: 'Write Impression',
        view: 'View Impression',
        mine: 'My Impression',
        prompt: 'Please write your impression here',
        type: 'Type',
        actions: {
          submit: 'Submit',
          cancel: 'Cancel',
          save: 'Save'
        }
      },
      reflect: {
        title: 'Reflect Impression',
        reward: 'Reward',
        actions: {
          approve: 'Approve',
          reject: 'Reject',
          refuse: 'Refuse',
          check: 'Refusal will be publicized to the entire school, irrevocable, time uncountable.'
        },
        prompt: 'Impression written by {name}',
        history: {
          title: 'History',
          empty: 'No history'
        }
      }
    }
  },
  registration: {
    name: 'Registration',
    title: 'Register for Specified Activity',
    deadline: 'Deadline',
    location: 'Location',
    approver: 'Approver',
    approvers: {
      authority: 'Authority',
      member: 'Member'
    },
    ticket: 'Ticket ID',
    class: 'Class(es) | Class | Classes',
    count: ' person registered |  person registered | people registered',
    single: {
      class: 'Class',
      min: 'Min',
      max: 'Max'
    },
    remain: {
      time: 'Remain Time',
      position: 'Remain Position'
    },
    status: {
      title: 'Status',
      registered: 'Registered',
      unregistered: 'Unregistered',
      unregisterable: 'Unregisterable'
    },
    actions: {
      register: 'Register',
      unregister: 'Unregister',
      back: 'Back'
    }
  },
  special: {
    classify: {
      name: 'Classify',
      prize: 'Prize',
      import: 'Import',
      club: 'Group',
      deduction: 'Deduction',
      other: 'Other'
    },
    prize: {
      name: 'Prize',
      level: {
        name: 'Level',
        district: 'District',
        city: 'City',
        province: 'Province',
        national: 'National',
        international: 'International'
      },
      type: {
        name: 'Type',
        personal: 'Personal',
        team: 'Team'
      },
      classify: {
        name: 'Classify',
        sports: 'Sports',
        academy: 'Academy',
        art: 'Art',
        other: 'Other'
      },
      ranking: {
        levels: {
          above: 'Above than First Prize',
          first: 'First Prize',
          second: 'Second Prize',
          third: 'Third Prize'
        },
        ranking: {
          name: 'Ranking',
          rank: 'Rank {start} - {end}'
        }
      }
    }
  },
  status: {
    title: 'Status',
    registered: 'Registered',
    draft: 'Draft',
    refused: 'Refused',
    pending: 'Pending',
    effective: 'Effective',
    rejected: 'Rejected',
    steps: {
      first: 'First',
      last: 'Last'
    }
  },
  history: {
    name: 'History',
    title: "History of {name}'s Impression",
    empty: 'No History'
  },
  member: {
    name: 'Name',
    status: 'Status',
    class: 'Class',
    impression: 'Impression',
    dialog: {
      title: 'Member List of {name}',
      actions: {
        name: 'Actions',
        add: 'Add',
        remove: 'Remove',
        confirm: 'After removal, it will not be able to be restored, are you sure to remove?',
        title: 'Append Member to {activity}'
      }
    }
  },
  view: {
    panels: {
      mine: {
        name: 'My Activities',
        short: 'Mine'
      },
      class: {
        name: 'Activities Related to Class',
        short: 'Class'
      },
      campus: {
        name: 'Activities on Campus',
        short: 'Campus'
      },
      register: {
        name: 'Activities to Register',
        short: 'Register'
      },
      trophy: {
        name: 'Activities to Reward',
        short: 'Reward'
      }
    }
  },
  trophy: {
    name: 'Reward',
    create: 'Create Reward',
    field: {
      name: 'Name',
      type: 'Type',
      level: 'Level',
      awards: 'Award | Award | Awards',
      team: 'Team'
    },
    type: {
      academic: 'Academic',
      art: 'Art',
      sports: 'Sports',
      others: 'Others'
    },
    level: {
      district: 'District',
      city: 'City',
      province: 'Province',
      national: 'National',
      international: 'International'
    },
    auto: 'Auto Create Awards',
    instructor: 'Instructor'
  },
  export: {
    name: 'Export',
    title: 'Export Data',
    range: 'Range',
    format: 'Format',
    formats: {
      json: {
        name: 'JSON',
        short: 'JSON',
        explain: 'JavaScript Object Notation'
      },
      csv: {
        name: 'CSV',
        short: 'CSV',
        explain: 'Comma-Separated Values'
      },
      xlsx: {
        name: 'Excel',
        short: 'Excel',
        explain: 'Microsoft Excel'
      }
    },
    actions: {
      export: 'Export',
      download: 'Download'
    }
  }
}

export const zhCN = {
  type: {
    specified: {
      name: '校内义工',
      short: '校内',
      key: 'specified',
      description:
        '校内义工是由管理员或团支书创建，发布为招募的义工，需要指定每个班级可以报名的人数上限。'
    },
    social: {
      name: '校外义工',
      short: '校外',
      key: 'social',
      description:
        '校外义工是由任何人员可以创建，创建时需要指定所有参与人员，仅限于在学期内周末节假日校外的义工。'
    },
    scale: {
      name: '社会实践义工',
      short: '社会实践',
      key: 'scale',
      description:
        '实践义工是由任何人都可以创建，创建时需要指定所有参与人员，仅限于在寒暑假期间根据学校文件的社会实践。'
    },
    special: {
      name: '特殊义工',
      short: '特殊',
      key: 'special',
      description:
        '特殊义工是由管理员创建的比赛获奖、社团活动统计的义工等，参与人员不需要提交感想。'
    }
  },
  mode: {
    'on-campus': {
      name: '校内义工',
      short: '校内',
      key: 'on-campus'
    },
    'off-campus': {
      name: '校外义工',
      short: '校外',
      key: 'off-campus'
    },
    'social-practice': {
      name: '社会实践义工',
      short: '社会实践',
      key: 'social-practice'
    }
  },
  form: {
    type: '类型',
    title: '{create} {type}',
    name: '名称',
    description: '描述',
    date: '日期',
    mode: '模式',
    person: '成员',
    class: '班级',
    duration: '时长',
    classify: '分类',
    pending: '等待审核',
    detail: '详细信息',
    actions: {
      submit: '提交',
      cancel: '取消',
      modify: '修改',
      save: '保存',
      reset: '重置',
      delete: {
        name: '删除',
        confirm: '删除后包括感想等数据皆不可恢复，确定删除？'
      },
      modification: {
        status: '修改义工 {activity} 的状态',
        effective: '批准',
        refused: '拒绝',
        confirm: '请确认对义工状态的修改'
      },
      refresh: '刷新'
    },
    upload: {
      name: '上传',
      prompt: '点击或拖拽文件到此区域上传',
      allow: '仅允许 {type} 文件'
    },
    details: '详情',
    impression: '感想',
    image: '图片'
  },
  units: {
    item: '项',
    hour: '小时',
    word: '字',
    person: '人'
  },
  image: {
    upload: {
      name: '上传',
      prompt: '点击或拖拽图片到此区域上传',
      allow: '仅允许 {type} 图片'
    },
    select: {
      name: '选择'
    },
    empty: {
      name: '无图片'
    }
  },
  impression: {
    write: '填写',
    name: '感想',
    reward: '奖励',
    actions: {
      write: '填写',
      reflect: '审批',
      view: '查看'
    },
    page: {
      write: {
        title: '填写感想',
        view: '查看感想',
        mine: '我的感想',
        prompt: '请在此填写感想',
        type: '类型',
        actions: {
          submit: '提交',
          cancel: '取消',
          save: '保存'
        }
      },
      reflect: {
        title: '审批感想',
        reward: '获得义工时间',
        actions: {
          approve: '接受',
          reject: '驳回',
          refuse: '拒绝',
          check: '拒绝将会公开到全校，不可撤销，不可计入时间。'
        },
        prompt: '{name}的义工感想',
        history: {
          title: '历史',
          empty: '无历史'
        }
      }
    }
  },
  registration: {
    name: '报名',
    title: '报名指定义工',
    deadline: '截止日期',
    location: '地点',
    approver: '审批人',
    approvers: {
      authority: '学校团委',
      member: '部门成员'
    },
    ticket: '申请单号',
    class: '班级',
    count: '人已报名',
    single: {
      class: '班级',
      min: '最小',
      max: '最大'
    },
    remain: {
      time: '剩余时间',
      position: '剩余位置'
    },
    status: {
      title: '状态',
      registered: '已报名',
      unregistered: '未报名',
      unregisterable: '不可报名'
    },
    actions: {
      register: '报名',
      unregister: '取消报名',
      back: '返回'
    }
  },
  special: {
    classify: {
      name: '分类',
      prize: '获奖',
      import: '导入',
      club: '团体',
      deduction: '扣分',
      other: '其他'
    },
    prize: {
      name: '获奖',
      level: {
        name: '级别',
        district: '区级',
        city: '市级',
        province: '省级',
        national: '国家级',
        international: '国际级'
      },
      type: {
        name: '类型',
        personal: '个人',
        team: '团队'
      },
      classify: {
        name: '分类',
        sports: '体育',
        academy: '学科',
        art: '艺术',
        other: '其他'
      },
      ranking: {
        levels: {
          above: '一等奖以上',
          first: '一等奖',
          second: '二等奖',
          third: '三等奖'
        },
        ranking: {
          name: '名次',
          rank: '第 {start} - {end} 名'
        }
      }
    }
  },
  status: {
    title: '状态',
    draft: '草稿',
    pending: '审核中',
    effective: '有效',
    rejected: '驳回',
    refused: '拒绝',
    steps: {
      first: '初审',
      last: '终审'
    }
  },
  history: {
    name: '历史',
    title: '{name}的义工感想历史',
    empty: '无历史'
  },
  member: {
    name: '姓名',
    status: '状态',
    class: '班级',
    impression: '感想',
    dialog: {
      title: '{name}的成员列表',
      actions: {
        name: '操作',
        add: '添加',
        remove: '移除',
        confirm: '移除后将不可恢复，确定移除？',
        title: '添加成员至{activity}'
      }
    }
  },
  view: {
    panels: {
      mine: {
        name: '我的义工',
        short: '我的'
      },
      class: {
        name: '班级义工',
        short: '班级'
      },
      campus: {
        name: '校内义工',
        short: '校内'
      },
      register: {
        name: '报名义工',
        short: '报名'
      },
      trophy: {
        name: '获奖义工',
        short: '获奖'
      }
    }
  },
  trophy: {
    name: '获奖',
    create: '创建获奖',
    field: {
      name: '名称',
      type: '类型',
      level: '级别',
      awards: '奖项',
      team: '团队'
    },
    type: {
      academic: '学科',
      art: '艺术',
      sports: '体育',
      others: '其他'
    },
    level: {
      district: '区级',
      city: '市级',
      province: '省级',
      national: '国家级',
      international: '国际级'
    },
    auto: '自动创建奖项',
    instructor: '指导老师'
  },
  export: {
    name: '导出',
    title: '导出数据',
    range: '范围',
    format: '格式',
    formats: {
      json: {
        name: 'JSON',
        short: 'JSON',
        explain: 'JavaScript 对象表示法'
      },
      csv: {
        name: 'CSV',
        short: 'CSV',
        explain: '逗号分隔值'
      },
      xlsx: {
        name: 'Excel',
        short: 'Excel',
        explain: 'Microsoft Excel'
      }
    },
    actions: {
      export: '导出',
      download: '下载'
    }
  }
}

export const zhTW = {
  type: {
    specified: {
      name: '指定義工',
      short: '指定',
      key: 'specified',
      description: '指定義工是由管理員創建，發布為招募的義工，需要指定每個班級可以報名的人數上限。'
    },
    social: {
      name: '社會義工',
      short: '社會',
      key: 'social',
      description:
        '社會義工是由團支書以上的人員可以創建，創建時需要指定所有參與人員，僅限於在學期內週末節假日校外的義工。'
    },
    scale: {
      name: '實踐義工',
      short: '實踐',
      key: 'scale',
      description:
        '實踐義工是由任何人都可以創建，創建時需要指定所有參與人員，僅限於在寒暑假期間根據學校文件的社會實踐。'
    },
    special: {
      name: '特殊義工',
      short: '特殊',
      key: 'special',
      description:
        '特殊義工是由管理員創建的比賽獲獎、社團活動統計的義工等，參與人員不需要提交感想。'
    },
    unknown: '未知'
  },
  mode: {
    'on-campus': {
      name: '校內義工',
      short: '校內',
      key: 'on-campus'
    },
    'off-campus': {
      name: '校外義工',
      short: '校外',
      key: 'off-campus'
    },
    'social-practice': {
      name: '大型社會實踐',
      short: '實踐',
      key: 'social-practice'
    }
  },
  form: {
    type: '類型',
    title: '{create} {type}',
    name: '名稱',
    description: '描述',
    date: '日期',
    person: '成員',
    class: '班級',
    duration: '時長',
    classify: '分類',
    pending: '等待審核',
    detail: '詳細信息',
    actions: {
      submit: '提交',
      cancel: '取消',
      modify: '修改',
      save: '保存',
      reset: '重置',
      delete: {
        name: '刪除',
        confirm: '刪除後包括感想等數據皆不可恢復，確定刪除？'
      },
      modification: {
        status: '修改義工 {activity} 的狀態',
        effective: '批准',
        refused: '拒絕',
        confirm: '請確認對義工狀態的修改'
      },
      refresh: '刷新'
    },
    upload: {
      name: '上傳',
      prompt: '點擊或拖拽文件到此區域上傳',
      allow: '僅允許 {type} 文件'
    },
    details: '詳情',
    impression: '感想',
    image: '圖片'
  },
  units: {
    item: '項',
    hour: '小時',
    word: '字',
    person: '人'
  },
  image: {
    upload: {
      name: '上傳',
      prompt: '點擊或拖拽圖片到此區域上傳',
      allow: '僅允許 {type} 圖片'
    },
    select: {
      name: '選擇'
    },
    empty: {
      name: '無圖片'
    }
  },
  impression: {
    write: '填寫',
    name: '感想',
    reward: '獎勵',
    actions: {
      write: '填寫',
      reflect: '審批',
      view: '查看'
    },
    page: {
      write: {
        title: '填寫感想',
        view: '查看感想',
        mine: '我的感想',
        prompt: '請在此填寫感想',
        type: '類型',
        actions: {
          submit: '提交',
          cancel: '取消',
          save: '保存'
        }
      },
      reflect: {
        title: '審批感想',
        reward: '獲得義工時間',
        actions: {
          approve: '接受',
          reject: '駁回',
          refuse: '拒絕',
          check: '拒絕將會公開到全校，不可撤銷，不可計入時間。'
        },
        prompt: '{name}的義工感想',
        history: {
          title: '歷史',
          empty: '無歷史'
        }
      }
    }
  },
  registration: {
    name: '報名',
    title: '報名指定義工',
    deadline: '截止日期',
    location: '地點',
    class: '班級',
    count: '人已報名',
    single: {
      class: '班級',
      min: '最小',
      max: '最大'
    },
    remain: {
      time: '剩餘時間',
      position: '剩餘位置'
    },
    status: {
      title: '狀態',
      registered: '已報名',
      unregistered: '未報名',
      unregisterable: '不可報名'
    },
    actions: {
      register: '報名',
      unregister: '取消報名',
      back: '返回'
    }
  },
  special: {
    classify: {
      name: '分類',
      prize: '獲獎',
      import: '導入',
      club: '社團',
      deduction: '扣分',
      other: '其他'
    },
    prize: {
      name: '獲獎',
      level: {
        name: '級別',
        district: '區級',
        city: '市級',
        province: '省級',
        national: '國家級',
        international: '國際級'
      },
      type: {
        name: '類型',
        personal: '個人',
        team: '團隊'
      },
      classify: {
        name: '分類',
        sports: '體育',
        academy: '學科',
        art: '藝術',
        other: '其他'
      },
      ranking: {
        levels: {
          above: '一等獎以上',
          first: '一等獎',
          second: '二等獎',
          third: '三等獎'
        },
        ranking: {
          name: '名次',
          rank: '第 {start} - {end} 名'
        }
      }
    }
  },
  status: {
    title: '狀態',
    draft: '草稿',
    rejected: '駁回',
    pending: '審核中',
    refused: '拒絕',
    effective: '有效',
    steps: {
      first: '初審',
      last: '終審'
    }
  },
  history: {
    name: '歷史',
    title: '{name}的義工感想歷史',
    empty: '無歷史'
  },
  member: {
    name: '姓名',
    status: '狀態',
    class: '班級',
    impression: '感想',
    dialog: {
      title: '{name}的成員列表',
      actions: {
        name: '操作',
        add: '添加',
        remove: '移除',
        confirm: '移除後將不可恢復，確定移除？',
        title: '添加成員至{activity}'
      }
    }
  },
  view: {
    panels: {
      mine: {
        name: '我的義工',
        short: '我的'
      },
      class: {
        name: '班級義工',
        short: '班級'
      },
      campus: {
        name: '校內義工',
        short: '校內'
      },
      register: {
        name: '報名義工',
        short: '報名'
      },
      trophy: {
        name: '獲獎義工',
        short: '獲獎'
      }
    }
  },
  trophy: {
    name: '獲獎',
    create: '創建獲獎',
    field: {
      name: '名稱',
      type: '類型',
      level: '級別',
      awards: '獎項',
      team: '團隊'
    },
    type: {
      academic: '學科',
      art: '藝術',
      sports: '體育',
      others: '其他'
    },
    level: {
      district: '區級',
      city: '市級',
      province: '省級',
      national: '國家級',
      international: '國際級'
    },
    auto: '自動創建獎項',
    instructor: '指導老師'
  },
  export: {
    name: '導出',
    title: '導出數據',
    range: '範圍',
    format: '格式',
    formats: {
      json: {
        name: 'JSON',
        short: 'JSON',
        explain: 'JavaScript 對象表示法'
      },
      csv: {
        name: 'CSV',
        short: 'CSV',
        explain: '逗號分隔值'
      },
      xlsx: {
        name: 'Excel',
        short: 'Excel',
        explain: 'Microsoft Excel'
      }
    },
    actions: {
      export: '導出',
      download: '下載'
    }
  }
}

export const jaJP = {
  type: {
    specified: {
      name: '指定ボランティア',
      short: '指定',
      key: 'specified',
      description:
        '指定ボランティアは管理者によって作成され、募集として公開され、各クラスの登録可能人数の上限を指定する必要があります。'
    },
    social: {
      name: '社会ボランティア',
      short: '社会',
      key: 'social',
      description:
        '社会ボランティアは、団支書以上の人が作成でき、作成時にはすべての参加者を指定する必要があります。学期中の週末や休日に校外でのみ行われます。'
    },
    scale: {
      name: '実践ボランティア',
      short: '実践',
      key: 'scale',
      description:
        '実践ボランティアは誰でも作成でき、作成時にはすべての参加者を指定する必要があります。寒暑休み中には、学校のファイルに基づいて社会実践が制限されます。'
    },
    special: {
      name: '特殊ボランティア',
      short: '特殊',
      key: 'special',
      description:
        '特殊ボランティアは、管理者によって作成されたコンテストの受賞者、大規模なものなどのボランティアです。参加者は感想を提出する必要はありません。'
    },
    unknown: '未知'
  },
  mode: {
    'on-campus': {
      name: '校内ボランティア',
      short: '校内',
      key: 'on-campus'
    },
    'off-campus': {
      name: '校外ボランティア',
      short: '校外',
      key: 'off-campus'
    },
    'social-practice': {
      name: '大規模社会実践',
      short: '実践',
      key: 'social-practice'
    }
  },
  form: {
    type: 'タイプ',
    title: '{create} {type}',
    name: '名称',
    description: '説明',
    date: '日付',
    person: 'メンバー',
    class: 'クラス',
    duration: '時間',
    classify: '分類',
    pending: '審査待ち',
    detail: '詳細',
    actions: {
      submit: '提出',
      cancel: 'キャンセル',
      modify: '修正',
      save: '保存',
      reset: 'リセット',
      delete: {
        name: '削除',
        confirm: '削除後、感想などのデータも含めて復元できなくなります。削除しますか？'
      },
      modification: {
        status: 'ボランティア {activity} の状態を変更する',
        effective: '承認',
        refused: '拒否',
        confirm: 'ボランティアの状態の変更を確認してください。'
      },
      refresh: '更新'
    },
    upload: {
      name: 'アップロード',
      prompt: 'ここにファイルをクリックまたはドラッグしてアップロードします',
      allow: 'ファイルのみを許可する {type}'
    },
    details: '詳細',
    impression: '感想',
    image: '画像'
  },
  image: {
    upload: {
      name: 'アップロード',
      prompt: 'ここに画像をクリックまたはドラッグしてアップロードします',
      allow: '画像のみを許可する {type}'
    },
    select: {
      name: '選択'
    },
    empty: {
      name: '画像なし'
    }
  },
  units: {
    item: '項目',
    hour: '時間',
    word: '単語',
    person: '人'
  },
  impression: {
    write: '記入',
    name: '感想',
    reward: '報酬',
    actions: {
      write: '記入',
      reflect: '承認',
      view: '見る'
    },
    page: {
      write: {
        title: '感想を記入',
        view: '感想を見る',
        mine: '私の感想',
        prompt: 'ここに感想を記入してください',
        type: 'タイプ',
        actions: {
          submit: '提出',
          cancel: 'キャンセル',
          save: '保存'
        }
      },
      reflect: {
        title: '感想を承認',
        reward: 'ボランティア時間を獲得',
        actions: {
          approve: '承認',
          reject: '拒否',
          refuse: '拒否',
          check: '拒否は全校に公開され、取り消すことはできません。'
        },
        prompt: '{name} からのボランティア感想',
        history: {
          title: '歴史',
          empty: '歴史なし'
        }
      }
    }
  },
  registration: {
    name: '登録',
    title: '指定ボランティアに登録',
    deadline: '締め切り',
    location: '場所',
    class: 'クラス',
    count: '人が登録済み',
    single: {
      class: 'クラス',
      min: '最小',
      max: '最大'
    },
    remain: {
      time: '残り時間',
      position: '残りの位置'
    },
    status: {
      title: '状態',
      registered: '登録済み',
      unregistered: '未登録',
      unregisterable: '登録不可'
    },
    actions: {
      register: '登録',
      unregister: '登録解除',
      back: '戻る'
    }
  },
  special: {
    classify: {
      name: '分類',
      prize: '受賞',
      import: 'インポート',
      club: 'クラブ',
      deduction: '減点',
      other: 'その他'
    },
    prize: {
      name: '受賞',
      level: {
        name: 'レベル',
        district: '地区',
        city: '市',
        province: '省',
        national: '国',
        international: '国際'
      },
      type: {
        name: 'タイプ',
        personal: '個人',
        team: 'チーム'
      },
      classify: {
        name: '分類',
        sports: 'スポーツ',
        academy: 'アカデミー',
        art: 'アート',
        other: 'その他'
      },
      ranking: {
        levels: {
          above: '一等賞以上',
          first: '一等賞',
          second: '二等賞',
          third: '三等賞'
        },
        ranking: {
          name: 'ランキング',
          rank: 'ランク {start} - {end}'
        }
      }
    }
  },
  status: {
    title: '状態',
    draft: '下書き',
    refused: '拒否',
    rejected: '拒否',
    pending: '審査中',
    effective: '有効',
    steps: {
      first: '初審査',
      last: '最終審査'
    }
  },
  history: {
    name: '歴史',
    title: '{name}のボランティア感想の歴史',
    empty: '歴史なし'
  },
  member: {
    name: '名前',
    status: '状態',
    class: 'クラス',
    impression: '感想',
    dialog: {
      title: '{name}のメンバーリスト',
      actions: {
        name: '操作',
        add: '追加',
        remove: '削除',
        confirm: '削除後、復元できなくなります。削除しますか？',
        title: '{activity}にメンバーを追加'
      }
    }
  },
  view: {
    panels: {
      mine: {
        name: '私のボランティア',
        short: '私の'
      },
      class: {
        name: 'クラスボランティア',
        short: 'クラス'
      },
      campus: {
        name: '校内ボランティア',
        short: '校内'
      },
      register: {
        name: '登録ボランティア',
        short: '登録'
      },
      trophy: {
        name: '受賞ボランティア',
        short: '受賞'
      }
    }
  },
  trophy: {
    name: '受賞',
    create: '受賞を作成',
    field: {
      name: '名前',
      type: 'タイプ',
      level: 'レベル',
      awards: '受賞',
      team: 'チーム'
    },
    type: {
      academic: '学科',
      art: 'アート',
      sports: 'スポーツ',
      others: 'その他'
    },
    level: {
      district: '地区',
      city: '市',
      province: '省',
      national: '国',
      international: '国際'
    },
    auto: '自動的に受賞を作成',
    instructor: '指導教員'
  },
  export: {
    name: 'エクスポート',
    title: 'データをエクスポート',
    range: '範囲',
    format: '形式',
    formats: {
      json: {
        name: 'JSON',
        short: 'JSON',
        explain: 'JavaScript オブジェクト表記法'
      },
      csv: {
        name: 'CSV',
        short: 'CSV',
        explain: 'カンマ区切り値'
      },
      xlsx: {
        name: 'Excel',
        short: 'Excel',
        explain: 'Microsoft Excel'
      }
    },
    actions: {
      export: 'エクスポート',
      download: 'ダウンロード'
    }
  }
}

export const frFR = {
  type: {
    specified: {
      name: 'Activité Spécifiée',
      short: 'Spécifiée',
      key: 'specified',
      description:
        "Les activités spécifiées sont des bénévoles créés par l'administrateur, publiés comme un recrutement, et doivent spécifier le nombre maximum de personnes pouvant s'inscrire pour chaque classe."
    },
    social: {
      name: 'Activité Sociale',
      short: 'Sociale',
      key: 'social',
      description:
        'Les activités sociales sont des bénévoles qui peuvent être créés par au moins le secrétaire, et tous les participants doivent être désignés au moment de la création. Il est limité aux bénévoles les week-ends et jours fériés hors campus pendant le semestre.'
    },
    scale: {
      name: 'Activité de Grande Échelle',
      short: 'Grande Échelle',
      key: 'scale',
      description:
        "Les activités de grande échelle sont des bénévoles qui peuvent être créés par n'importe qui en janvier - mars, juillet - octobre, et tous les participants doivent être désignés au moment de la création. Il est limité aux bénévoles sociaux pendant les vacances d'hiver et d'été selon le fichier de diffusion à grande échelle de l'école."
    },
    special: {
      name: 'Activité Spéciale',
      short: 'Spéciale',
      key: 'special',
      description:
        "Les activités spéciales sont des bénévoles créés par des administrateurs pour les gagnants de concours, les grandes échelles, etc. Les participants ne sont pas tenus de soumettre l'impression."
    },
    unknown: 'Inconnu'
  },
  mode: {
    'on-campus': {
      name: 'Activités sur le Campus',
      short: 'Sur le Campus',
      key: 'on-campus'
    },
    'off-campus': {
      name: 'Activités hors Campus',
      short: 'Hors Campus',
      key: 'off-campus'
    },
    'social-practice': {
      name: 'Pratique Sociale à Grande Échelle',
      short: 'Grande Échelle',
      key: 'social-practice'
    }
  },
  form: {
    type: 'Type',
    title: '{create} {type}',
    name: 'Nom',
    description: 'Description',
    date: 'Date',
    person: 'Membre(s) | Membre | Membres',
    class: 'Classe(s) | Classe | Classes',
    duration: 'Durée',
    classify: 'Classer',
    pending: 'En Attente',
    detail: 'Détails',
    actions: {
      submit: 'Soumettre',
      cancel: 'Annuler',
      modify: 'Modifier',
      save: 'Sauvegarder',
      reset: 'Réinitialiser',
      delete: {
        name: 'Supprimer',
        confirm:
          'Après la suppression, y compris les impressions et autres données, il ne pourra pas être restauré, êtes-vous sûr de vouloir supprimer?'
      },
      modification: {
        status: 'Modifier le statut du bénévole {activity}',
        effective: 'Approuver',
        refused: 'Refuser',
        confirm: 'Veuillez confirmer la modification du statut du bénévole'
      },
      refresh: 'Rafraîchir'
    },
    upload: {
      name: 'Télécharger',
      prompt: 'Cliquez ou faites glisser le fichier dans cette zone pour le télécharger',
      allow: 'Autoriser uniquement le fichier {type}'
    },
    details: 'Détails',
    impression: 'Impression',
    image: 'Image'
  },
  image: {
    upload: {
      name: 'Télécharger',
      prompt: "Cliquez ou faites glisser l'image dans cette zone pour le télécharger",
      allow: "Autoriser uniquement l'image {type}"
    },
    select: {
      name: 'Sélectionner'
    },
    empty: {
      name: 'Vide'
    }
  },
  units: {
    item: 'article | article | articles',
    hour: 'heure | heure | heures',
    word: 'mot | mot | mots',
    person: 'personne | personne | personnes'
  },
  impression: {
    write: 'Écrire',
    name: 'Impression',
    reward: 'Récompense',
    actions: {
      write: 'Écrire',
      reflect: 'Réfléchir',
      view: 'Voir'
    },
    page: {
      write: {
        title: "Écrire l'Impression",
        view: "Voir l'Impression",
        mine: 'Mon Impression',
        prompt: 'Veuillez écrire votre impression ici',
        type: 'Type',
        actions: {
          submit: 'Soumettre',
          cancel: 'Annuler',
          save: 'Sauvegarder'
        }
      },
      reflect: {
        title: "Réfléchir l'Impression",
        reward: 'Récompense',
        actions: {
          approve: 'Approuver',
          reject: 'Rejeter',
          refuse: 'Refuser',
          check: "Le refus sera rendu public à toute l'école, irrévocable, le temps non compté."
        },
        prompt: 'Impression écrite par {name}',
        history: {
          title: 'Histoire',
          empty: 'Aucune histoire'
        }
      }
    }
  },
  registration: {
    name: 'Inscription',
    title: "S'inscrire à l'Activité Spécifiée",
    deadline: 'Date Limite',
    location: 'Emplacement',
    class: 'Classe(s) | Classe | Classes',
    count: ' personne inscrite |  personne inscrite | personnes inscrites',
    single: {
      class: 'Classe',
      min: 'Min',
      max: 'Max'
    },
    remain: {
      time: 'Temps Restant',
      position: 'Position Restante'
    },
    status: {
      title: 'Statut',
      registered: 'Inscrit',
      unregistered: 'Non Inscrit',
      unregisterable: 'Non Inscriptible'
    },
    actions: {
      register: "S'inscrire",
      unregister: 'Se Désinscrire',
      back: 'Retour'
    }
  },
  special: {
    classify: {
      name: 'Classer',
      prize: 'Prix',
      import: 'Importer',
      club: 'Club',
      deduction: 'Déduction',
      other: 'Autre'
    },
    prize: {
      name: 'Prix',
      level: {
        name: 'Niveau',
        district: 'District',
        city: 'Ville',
        province: 'Province',
        national: 'National',
        international: 'International'
      },
      type: {
        name: 'Type',
        personal: 'Personnel',
        team: 'Équipe'
      },
      classify: {
        name: 'Classer',
        sports: 'Sports',
        academy: 'Académie',
        art: 'Art',
        other: 'Autre'
      },
      ranking: {
        levels: {
          above: 'Au-dessus du Premier Prix',
          first: 'Premier Prix',
          second: 'Deuxième Prix',
          third: 'Troisième Prix'
        },
        ranking: {
          name: 'Classer',
          rank: 'Rang {start} - {end}'
        }
      }
    }
  },
  status: {
    title: 'Statut',
    draft: 'Brouillon',
    refused: 'Refusé',
    rejected: 'Rejeté',
    pending: 'En Attente',
    effective: 'Effectif'
  },
  history: {
    name: 'Histoire',
    title: "Histoire de l'Impression de {name}",
    empty: 'Aucune histoire'
  },
  member: {
    name: 'Nom',
    status: 'Statut',
    class: 'Classe',
    impression: 'Impression',
    dialog: {
      title: 'Liste des Membres de {name}',
      actions: {
        name: 'Actions',
        add: 'Ajouter',
        remove: 'Supprimer',
        confirm:
          'Après la suppression, il ne pourra pas être restauré, êtes-vous sûr de vouloir supprimer?',
        title: 'Ajouter un Membre à {activity}'
      }
    }
  },
  view: {
    panels: {
      mine: {
        name: 'Mes Bénévoles',
        short: 'Mes'
      },
      class: {
        name: 'Bénévoles de Classe',
        short: 'Classe'
      },
      campus: {
        name: 'Bénévoles sur le Campus',
        short: 'Sur le Campus'
      },
      register: {
        name: 'Bénévoles Inscrits',
        short: 'Inscrits'
      },
      trophy: {
        name: 'Bénévoles Gagnants',
        short: 'Gagnants'
      }
    }
  },
  trophy: {
    name: 'Prix',
    create: 'Créer un Prix',
    field: {
      name: 'Nom',
      type: 'Type',
      level: 'Niveau',
      awards: 'Prix',
      team: 'Équipe'
    },
    type: {
      academic: 'Académie',
      art: 'Art',
      sports: 'Sports',
      others: 'Autre'
    },
    level: {
      district: 'District',
      city: 'Ville',
      province: 'Province',
      national: 'National',
      international: 'International'
    },
    auto: 'Créer automatiquement un prix',
    instructor: 'Instructeur'
  },
  export: {
    name: 'Exporter',
    title: 'Exporter des Données',
    range: 'Gamme',
    format: 'Format',
    formats: {
      json: {
        name: 'JSON',
        short: 'JSON',
        explain: 'JavaScript Object Notation'
      },
      csv: {
        name: 'CSV',
        short: 'CSV',
        explain: 'Comma-Separated Values'
      },
      xlsx: {
        name: 'Excel',
        short: 'Excel',
        explain: 'Microsoft Excel'
      }
    },
    actions: {
      export: 'Exporter',
      download: 'Télécharger'
    }
  }
}

export const koKR = {}

export const ruRU = {}
