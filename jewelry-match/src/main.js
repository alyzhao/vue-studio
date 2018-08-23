import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "babel-polyfill"
import 'normalize.css'

import {
  Input,
  Row,
  Col,
  Button,
  Table,
  TableColumn,
  Progress
} from 'element-ui'

// Vue.prototype.$ELEMENT = { size: 'mini' }

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Progress)

Vue.use(Input)
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
