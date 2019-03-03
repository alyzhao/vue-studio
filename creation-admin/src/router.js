import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'

import Videos from '@/views/videos'
import VideoList from '@/views/list'
import VideoRecommend from '@/views/recommend'

Vue.use(Router)

const routes = [{
  name: 'login',
  path: '/login',
  component: Login
}, {
  path: '/videos',
  component: Videos,
  children: [{
    name: 'list',
    path: '',
    component: VideoList
  }, {
    name: 'recommend',
    path: 'recommend',
    component: VideoRecommend
  }]
},
  
{
  path: '*',
  redirect: '/videos'
}]

export default new Router({
  // mode: 'history',
  routes,
})