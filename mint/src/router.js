import Vue from 'vue'
import Router from 'vue-router'

import Home from 'views/home'

import Entrance from 'views/entrance'

import Forum from 'views/forum'

import Exhibition from 'views/exhibition'

import Mine from 'views/mine'

import Participate from 'views/participate'

import Buyers from 'views/buyers'

import Paperwork from 'views/paperwork'

import Account from 'views/account'

import ForumApply from 'views/forumapply'

import Exhibit from 'views/exhibit'

Vue.use(Router)

const routes = [{
  path: '*',
  redirect: '/index'
}, {
  path: '/mine',
  component: Mine
}, {
  path: '/participate',
  component: Participate
}, {
  path: '/buyers',
  component: Buyers
}, {
  path: '/paperwork',
  component: Paperwork
}, {
  path: '/account',
  component: Account
}, {
  path: '/forumapply',
  component: ForumApply
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
}, {
  path: 'exhibit',
  component: Exhibit
}]

export default new Router({
  // mode: 'history',   // 以正常的路由显示
  routes,
  linkActiveClass: 'is-active'
})