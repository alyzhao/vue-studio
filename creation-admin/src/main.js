import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import 'normalize.css'
import '@/assets/scss/index.scss'

import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import mixin from './mixin'

Vue.mixin(mixin)

Vue.use(ElementUI, {size: 'mini'})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.axios = axios

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem('token')
  if (config.method === 'get') {
    if (typeof config.params === 'object') {
      config.params.consoleToken = token
    } else {
      config.params = { consoleToken: token }
    }
  } else if (config.method === 'post') {
    if (config.data === undefined) {
      config.data = `consoleToken=${token}`
    } else {
      config.data += `&consoleToken=${token}`
    }
  }
  return config
})

axios.interceptors.response.use(response => {
  if (response.data.code == 500 || response.data.code == 401) {
    return Promise.reject(response)
  } else if (response.data.code == 403) {
    localStorage.setItem('token', '')
    router.replace('/login')
    return Promise.reject(response)
  } else {
    return response
  }
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token') && to.name === 'login') {
    return next('/videos')
  }
  if (!localStorage.getItem('token') && to.name !== 'login') {
    return next('/login')
  }
  return next()
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
