import Vue from 'vue';
import App from './App'
import router from './router';
import 'font-awesome/scss/font-awesome.scss';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper);

// import store from './store';
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  // store,
  components: { App }
})
