import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';

import './assets/styles/base.css';

Vue.config.debug = true; 		// 开启错误提示

new Vue({
	router,
	el: '#appIndex',
	render: h => h(App)	
})