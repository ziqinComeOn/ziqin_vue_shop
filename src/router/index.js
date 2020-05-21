import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/shop/Login'
import Home from '@/components/shop/Home'

Vue.use(Router)

export default new Router({
  // mode: 'history', // mode的两个值history（url不带#）和 hash(url带#)
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'Login', component: Login},
    {path: '/home', name: 'Home', component: Home}
  ]
})
