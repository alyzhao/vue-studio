import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Upload from 'views/Upload'
import Match from 'views/Match'
import Fusion from 'views/Fusion'

const routes = [{
  path: '/',
  redirect: '/upload'
}, {
  path: '/upload',
  component: Upload
}, {
  path: '/match',
  component: Match
}, {
  path: 'fusion',
  component: Fusion
}]

export default new Router({
  routes
})
