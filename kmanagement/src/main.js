import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Login from './Login.vue'
import "@babel/polyfill"
import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import store from './store'
import mixin from './mixin'
  
Vue.mixin(mixin)

Vue.use(ElementUI, { size: 'small' })

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.axios = axios

// if (document.getElementsByTagName('meta')['user-identification'].getAttribute('content') === 'management') {
  new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    components: { App }
  })  
// } else {
//   new Vue({
//     el: '#login',
//     template: '<login />',
//     components: { Login }
//   })
// }
