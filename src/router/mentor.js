//学生端
import MenteeDashboard from '@/pages/mentee/dashboard/Index'; //信息总览
import Activities from '@/pages/mentee/activities/Index'; //课外活动
import Awards from '@/pages/mentee/awards/Index';
import Standardtest from '@/pages/mentee/standardtest/Index';
import Schoollist from '@/pages/mentee/schoollist/Index';
import Essays from '@/pages/mentee/essays/Index';
import Booklets from '@/pages/mentee/booklets/Index';
import OtherUpload from '@/pages/mentee/other/Index';
import Preview from '@/pages/mentee/preview/Index';


export default [
  // 学员端
  {
    path: '/mentee/dashboard',
    name: '信息总览',
    component: MenteeDashboard
  },
  // {
  //   path: '/mentee/information',
  //   name: '个人信息',
  //   component: Dashboard
  // },
  {
    path: '/mentee/activities',
    name: '课外活动',
    component: Activities
  },
  {
    path: '/mentee/standardtest',
    name: '考试成绩',
    component: Standardtest
  },
  {
    path: '/mentee/awards',
    name: '竞赛奖项',
    component: Awards
  },
  {
    path: '/mentee/schoollist',
    name: '选校列表',
    component: Schoollist
  },
  {
    path: '/mentee/essays',
    name: '申请文书',
    component: Essays
  },
  {
    path: '/mentee/preview',
    name: '申请审核',
    component: Preview
  },
  {
    path: '/mentee/other',
    name: '其他材料',
    component: OtherUpload
  },
  {
    path: '/mentee/booklets',
    name: '藏经阁',
    component: Booklets
  },
  {
    path: '/mentee/history',
    name: '交流记录',
    component: OtherUpload
  },
  {
    path: '/mentee/feedback',
    name: '服务反馈',
    component: OtherUpload
  }
];
