import Vue from 'vue'
import App from './App.vue'
import "@babel/polyfill"

import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
