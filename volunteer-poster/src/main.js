import Vue from 'vue'
import App from './App.vue'
import "babel-polyfill"
import 'normalize.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';

import {
  Row,
  Col,
  Button,
  Card
} from 'element-ui'

// Vue.prototype.$ELEMENT = { size: 'mini' }

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Card)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
