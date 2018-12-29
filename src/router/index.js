import Vue from 'vue';
import Router from 'vue-router';

//学生端
import mentee from './mentee';
// 问卷
import questions from './questions';

Vue.use(Router);


let routerArray = [];
routerArray = routerArray.concat(mentee, questions);

export default new Router({
  routes: routerArray
});
