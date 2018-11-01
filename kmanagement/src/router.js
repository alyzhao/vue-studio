import Vue from 'vue'
import Router from 'vue-router'

import Products from 'containers/products/Index'
import EditProducts from 'containers/products/EditProducts'
import Shops from 'containers/shops/Index'
import EditShops from 'containers/shops/EditShops'
import Merchant from 'containers/merchant/Index' 
import EditUserInfo from 'containers/merchant/EditUserInfo'
import ShopProducts from 'containers/shops/ShopProducts'

import Guide from 'containers/guide/Index'
import Pdf from 'containers/pdf/Index'
import Structure from 'containers/structure/Index'
import News from 'containers/news/Index'
import Buyers from 'containers/buyers/Index'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/index'
}, {
  name: 'index',
  path: '/index',
  component: Guide,
}, {
  name: 'pdf',
  path: '/pdf',
  component: Pdf
}, {
  name: 'structure',
  path: '/structure',
  component: Structure
}, {
  name: 'news',
  path: '/news',
  component: News
}, {
  name: 'buyers',
  path: '/buyers',
  component: Buyers
}, {
  name: 'products',
  path: '/products',
  component: Products,
  children: [{
    name: 'editProducts',
    path: 'edit/:id',
    component: EditProducts,
    props: true
  }, {
    name: 'addProducts',
    path: 'add',
    component: EditProducts
  }]
}, {
  name: 'shops',
  path: '/shops',
  component: Shops,
  children: [{
    name: 'editShop',
    path: 'edit/:id',
    component: EditShops,
    props: true
  }, {
    name: 'addShop',
    path: 'add',
    component: EditShops
  }, {
    name: 'shopProducts',
    path: 'goods/:sid',
    component: ShopProducts,
    props: true
  }]
}]

export default new Router({
  // mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})