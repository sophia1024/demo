// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axiosVue from 'axios'
import store from './store/index'
import ElementUI from 'element-ui'
import unitFun from './unit/getPageWidth/getPageWidth'
import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.css'
// import draggable from 'vuedraggable'
Vue.use(ElementUI)
// var deviceWidth = document.documentElement.clientWidth
// Vue.use(draggable)
Vue.prototype.axios = axiosVue

unitFun.getWidth(Vue)
Vue.config.productionTip = false
const getWidth = () => {
  let deviceWidth = document.documentElement.clientWidth
  Vue.prototype.$unitParams = deviceWidth
  console.log(deviceWidth)
}
getWidth()
window.addEventListener('resize', getWidth)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
