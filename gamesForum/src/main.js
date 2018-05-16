import Vue from 'vue';
import App from './App'
import router from './router';
import 'font-awesome/scss/font-awesome.scss';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import 'babel-polyfill'

import store from './vuex';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.axios = axios;

Vue.use(VueAwesomeSwiper);

import ActiveX from 'components/ActiveX';

Vue.component('ActiveX', ActiveX);


// import store from './store';
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
})
