// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import navbar from './components/navbar';
import router from './router';
import store from './store';
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `
  <div>
    <navbar />
    <section class="section">
      <div class="container is-fluid">
      	<router-view></router-view>
      </div>
    </section>
  </div>
  `,
  router,
  store,
  components: { navbar }
})
