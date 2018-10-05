import Vue from 'vue'
import Router from 'vue-router'

import Home from 'views/Home'

Vue.use(Router)

const routes = [{
  path: '*',
  redirect: '/index'
}, {
  path: '/index',
  component: Home
}]

export default new Router({
  // mode: 'history',   // 以正常的路由显示
  routes,
  linkActiveClass: 'is-active'
})