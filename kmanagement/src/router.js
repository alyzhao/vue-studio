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

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/index'
}, {
  path: '/index',
  component: Guide,
}, {
  path: '/pdf',
  component: Pdf
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