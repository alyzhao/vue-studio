import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Order from './containers/order/Order.vue';
import Warning from './containers/warning/Warning.vue';
import Resource from './containers/resource/Resource.vue';
import Topology from './containers/topology/Topology.vue';

const routes = [
	{ path: '/', redirect: '/order' },
    { path: '/order', component: Order },
    { path: '/warning', component: Warning },
    { path: '/resource', component: Resource },
    { path: '/topology', component: Topology },

]

export default new Router({
    // mode: 'history',   // 以正常的路由显示
    routes,
    linkActiveClass: 'is-active'    // 这是链接激活时的class, tells the vue-router what class to add to the navigation to make the menu item active
})