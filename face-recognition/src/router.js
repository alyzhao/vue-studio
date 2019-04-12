import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SecondVerify from './views/SecondVerify'
import Signup from './views/Signup'
import Form from './components/InfoForm'
import Prompt from './components/Prompt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/prompt',
      component: Prompt
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/second',
      name: 'second',
      component: SecondVerify
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
