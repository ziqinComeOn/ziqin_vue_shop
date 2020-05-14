import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Product from '@/components/page/Product'
import Product1 from '@/components/page/Product1'
import Product2 from '@/components/page/Product2'
import Product11 from '@/components/page/Product11'
import Product22 from '@/components/page/Product22'
import Params from '@/components/page/Params'
import Error from '@/components/page/Error'
import Von from '@/components/page/Von'

Vue.use(Router)

export default new Router({
  mode: 'history', // mode的两个值history（url不带#）和 hash(url带#)
  routes: [
    {
      path: '/',
      name: 'Pos',
      components: {
        default: Pos,
        left: Product11,
        right: Product22
      }
    }, {
      path: '/product',
      components: {
        default: Product,
        left: Product22,
        right: Product11
      },
      children: [
        {path: '/', name: 'Pos/Product', component: Product},
        {path: 'product1', name: 'product1', component: Product1},
        {path: 'Product2', name: 'Pos/Product/product2', component: Product2}
      ]
    }, {
      path: '/params/:newsId(\\d+)/:newsTitle', // 对Id要求必须是数字,加正则
      component: Params,
      beforeEnter: (to, from, next) => { // 路由中的钩子
        console.log('我进入了params模板')
        console.log(to)
        console.log(from)
        next()
      }
    }, {
      path: '/goBack', // 重定向
      redirect: '/'
    }, {
      path: '/goParams/:newsId(\\d+)/:newsTitle', // 带参数重定向
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }, {
      path: '/product',
      component: Product,
      alias: '/ziqin' // alias别名的使用
    }, {
      path: '*', // 404页面的配置
      component: Error
    }, {
      path: '/von',
      component: Von
    }
  ]
})
