import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/shop/Login'
import Home from '@/components/shop/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'Login', component: Login},
    {path: '/home', name: 'Home', component: Home}
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的页面
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = sessionStorage.getItem('token')
  if (!tokenStr) return next('/login') // 强制跳转登录页
  // 此处是放行
  next()
})

export default router
