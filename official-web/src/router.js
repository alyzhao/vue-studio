import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import home from './containers/Home.vue'

const routes = [
  { path: '/', component: home },
]

export default new Router({
  mode: 'history',		// 以正常的路由显示
  routes,
  linkActiveClass: 'is-active'		// 这是链接激活时的class, tells the vue-router what class to add to the navigation to make the menu item active
})