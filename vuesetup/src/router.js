import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

import home from './containers/Home.vue'
import dashboard from './containers/dashboard'
import projects from './containers/projects'

const routes = [
  { path: '/', component: home },
  { path: '/dashboard', component: dashboard },
  { path: '/projects', component: projects }
]

export default new Router({
  mode: 'history',		// 以正常的路由显示
  routes,
  linkActiveClass: 'is-active'		// 这是链接激活时的class, tells the vue-router what class to add to the navigation to make the menu item active
})