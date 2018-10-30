import Vue from 'vue'
import App from './App.vue'
import "@babel/polyfill"
import 'normalize.css'
import MintUI, { Toast, MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import mixins from './mixins'
import Header from 'components/Header'
console.log(mixins)
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.axios = axios
Vue.use(MintUI)
Vue.prototype.Toast = Toast
Vue.prototype.MessageBox = MessageBox

Vue.mixin(mixins)

Vue.component('Header', Header)

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
