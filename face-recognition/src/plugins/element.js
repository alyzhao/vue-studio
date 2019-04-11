import Vue from 'vue'
import {
  Message,
  Dialog,
  Row,
  Col,
  Button,
  Input,
  Loading,
  Steps,
  Step,
  Progress,
  Form,
  FormItem,
} from 'element-ui'


Vue.use(Dialog)
Vue.use(Loading.directive)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Input)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Progress)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$message = Message