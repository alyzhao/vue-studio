import Vue from 'vue'
import Router from 'vue-router'

import Home from 'views/home'

import Entrance from 'views/entrance'

import Forum from 'views/forum'

import Exhibition from 'views/exhibition'

Vue.use(Router)

const routes = [{
  path: '*',
  redirect: '/index'
}, {
  path: '/index',
  component: Home
}, {
  path: '/entrance',
  component: Entrance
}, {
  path: '/forum',
  component: Forum
}, {
  path: '/exhibition',
  component: Exhibition
}]

export default new Router({
  // mode: 'history',   // 以正常的路由显示
  routes,
  linkActiveClass: 'is-active'
})