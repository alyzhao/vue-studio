import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	hashbang: false,  // 关闭hash模式
	history: true,    // 开启html5history模式
	linkActiveClass: 'active' // v-link激活时添加的class，默认是`v-link-active`
})
export default router;