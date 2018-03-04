import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import Schedule from './containers/Schedule.vue';
// import Creativity from './containers/Creativity.vue';

// import ScrollContainer from 'components/ScrollContainer';

import Index from './containers/index/Index.vue';
import Credit from './components/Credit.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/creativity', component: Index},
  { path: '/burst', component: Index},
  { path: '/explore', component: Index},
  { path: '/face', component: Index},
  { path: '/reunite', component: Index},
  { path: '/volunteer', component: Index},
  { path: '/precipitate', component: Index},
    {path:'/credit',component:Credit}
  // { path: '/creativity', component: Creativity }
]

export default new Router({
  // mode: 'history',   // 以正常的路由显示
  routes,
  linkActiveClass: 'is-active'    // 这是链接激活时的class, tells the vue-router what class to add to the navigation to make the menu item active
})