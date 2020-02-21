import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home/homeList'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "HelloWorld" */ '@/page/home'),
      children: [
        {
          path: '/home',
          redirect: '/home/homeList'
        },
        {
          path: 'homeList',
          name: 'list',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/page/homeList')
        }
      ]
    }, {
      path: '/editType',
      name: 'editType',
      component: () => import(/* webpackChunkName: "HelloWorld" */ '@/page/editType')
    }
  ]
})
