// 个性化导师
let mentorRole = {
  mentor: [
    'mentor_dashboard',
    'mentor_mentorprofile',
    'mentor_name',
    'mentor_filetime',
    'mentor_payment',
    'mentor_history',
    'mentor_review',
    'mentor_training'
  ]
};

let mentorList = [
  // 个性化导师
  {
    link: '/mentor/dashboard',
    title: '查看记录',
    name: 'mentor_dashboard'
  },
  {
    link: '/mentor/mentorprofile',
    title: '上传文书',
    name: 'mentor_mentorprofile'
  },
  {
    link: '/mentor/name',
    title: '学员姓名',
    name: 'mentor_name',
    children: [{ link: '/mentor/filetime',
    title: '填报工时',
    name: 'mentor_filetime'}]
  },
  {
    link: '/mentor/filetime',
    title: '填报工时',
    name: 'mentor_filetime'
  },
  {
    link: '/mentor/payment',
    title: '查看工资',
    name: 'mentor_payment'
  },
  {
    link: '/mentor/history',
    title: '查看记录',
    name: 'mentor_history'
  },
  {
    link: '/mentor/review',
    title: '查看进度',
    name: 'mentor_review'
  },
  {
    link: '/mentor/training',
    title: '培训材料',
    name: 'mentor_training'
  }
]

export {
  mentorRole,
  mentorList
}
