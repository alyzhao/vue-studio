import Vue from 'vue'
import App from './App.vue'
import "@babel/polyfill"
import 'normalize.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
// import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// Vue.prototype.axios = axios
Vue.use(MintUI)

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
