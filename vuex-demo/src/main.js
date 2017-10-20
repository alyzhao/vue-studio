// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
// import router from './router';

// Vue.use(VueResource);
Vue.use(VueRouter);

var router = new VueRouter({
	routes: [
		{ path: '*', redirect: '/index' },
		{ path: '/index', component: App }
	]
});

console.log(router);


/*
router.map({
	'/index': {
		component: App
	}
});
*/
/*
router.redirect({
	'*': '/indx'
})
*/
/* eslint-disable no-new */
// router.start(App, '#app');
new Vue({
	router,
	el: '#app',
	render: h => h(App)	
})