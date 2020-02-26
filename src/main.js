// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosVue from 'axios'
import store from './store/index'
// import ElementUI from 'element-ui'
import { Button, Select, Image, Option, Row, Col } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.css'
import Ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Ant)
Vue.use(Image)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.axios = axiosVue
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
