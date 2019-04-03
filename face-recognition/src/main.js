import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import 'normalize.css'
import '@/assets/scss/index.scss'

import {
  Message,
  Dialog,
  Row,
  Col,
  Button,
  Input,
  Loading
} from 'element-ui'

Vue.use(Dialog)
Vue.use(Loading.directive)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
