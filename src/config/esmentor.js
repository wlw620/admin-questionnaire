// 文书导师
let esmentorRole = {
  esmentor: [
    'esmentor_year',
    'esmentor_name',
    'esmentor_training'
  ]
};

let esmentorList = [
  // 文书导师
  {
    link: '/esmentor/year',
    title: '----',
    name: 'esmentor_year',
    children: [{
      link: '/mentee/dashboard',
      title: '信息总览',
      name: 'mentee_dashboard'
    }]
  },
  {
    link: '/esmentor/training',
    title: '培训材料',
    name: 'esmentor_training'
  }
]

export {
  esmentorRole,
  esmentorList
}
