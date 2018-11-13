import Vue from 'vue'
import Router from 'vue-router'

import Mine from 'views/mine'

import Participate from 'views/participate'

import Buyers from 'views/buyers'

import Paperwork from 'views/paperwork'

import MyPaperwork from 'views/mypaperwork'

import Account from 'views/account'

import ForumApply from 'views/forumapply'

Vue.use(Router)

const routes = [{
  path: '*',
  redirect: '/mine'
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
  path: '/mypaperwork',
  component: MyPaperwork  
}, {
  path: '/account',
  component: Account
}, {
  path: '/forumapply',
  component: ForumApply
}]

export default new Router({
  // mode: 'history',   // 以正常的路由显示
  routes,
  linkActiveClass: 'is-active'
})