import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Schedule from './containers/Schedule.vue';
import Creativity from './containers/Creativity.vue';

import Index from './containers/index/Index.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/schedule', component: Schedule},
  { path: '/creativity', component: Creativity }
]

export default new Router({
  // mode: 'history',		// 以正常的路由显示
  routes,
  linkActiveClass: 'is-active'		// 这是链接激活时的class, tells the vue-router what class to add to the navigation to make the menu item active
})