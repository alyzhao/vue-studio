import Vue from 'vue'
import App from './App.vue'
import "@babel/polyfill"
import 'normalize.css'

import {
  Input,
  Button
} from 'element-ui'

Vue.use(Input)
Vue.use(Button)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
