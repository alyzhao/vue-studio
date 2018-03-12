import Vue from 'vue';
import App from './App'
import router from './router';

// import store from './vuex';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.axios = axios;

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
