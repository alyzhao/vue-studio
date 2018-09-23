import Vue from 'vue'
import App from './App.vue'
import "babel-polyfill"
import 'normalize.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.axios = axios

import {
  Row,
  Col,
  Button,
  Card,
  Message,
  ButtonGroup
} from 'element-ui'

// Vue.prototype.$ELEMENT = { size: 'mini' }

Vue.prototype.$message = Message


Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Card)
Vue.use(VueAwesomeSwiper)
Vue.use(ButtonGroup)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
