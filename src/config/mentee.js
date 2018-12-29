// 学员端
let menteeRole = {
  mentee: [
    'mentee_dashboard',
    'mentee_information',
    'mentee_activities',
    'mentee_awards',
    'mentee_standardtest',
    'mentee_schoollist',
    'mentee_essays',
    'mentee_preview',
    'mentee_other',
    'mentee_booklets',
    'mentee_history',
    'mentee_feedback'
  ],
};

let menteeList = [
  {
    link: '/mentee/dashboard',
    title: '信息总览',
    name: 'mentee_dashboard'
  },
  {
    link: '/mentee/menteeprofile',
    title: '个人信息',
    name: 'mentee_menteeprofile'
  },
  {
    link: '/mentee/standardtest',
    title: '考试成绩',
    name: 'mentee_standardtest'
  },
  {
    link: '/mentee/activities',
    title: '课外活动',
    name: 'mentee_activities'
  },
  {
    link: '/mentee/awards',
    title: '成绩奖项',
    name: 'mentee_awards'
  },
  {
    link: '/mentee/schoollist',
    title: '选校列表',
    name: 'mentee_schoollist'
  },
  {
    link: '/mentee/essays',
    title: '申请文书',
    name: 'mentee_essays'
  },
  {
    link: '/mentee/preview',
    title: '申请审核',
    name: 'mentee_preview'
  },
  {
    link: '/mentee/other',
    title: '其他材料',
    name: 'mentee_other'
  },
  {
    link: '/mentee/booklets',
    title: '藏经阁',
    name: 'mentee_booklets'
  },
  {
    link: '/mentee/history',
    title: '交流记录',
    name: 'mentee_history'
  },
  {
    link: '/mentee/feedback',
    title: '服务反馈',
    name: 'mentee_feedback',
  }
];

export {
  menteeRole,
  menteeList
};
