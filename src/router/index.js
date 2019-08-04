import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/',
      name: '深大腾创',
      meta: {
        title: '深大腾创'
      },
      component: () => import('../views/index')
    },
    {
      path: '/aboutus',
      name: '关于我们',
      meta: {
        title: '关于我们'
      },
      component: () => import('../views/aboutUs')
    },
    {
      path: '/joinus',
      name: '加入我们',
      meta: {
        title: '加入我们'
      },
      component: () => import('../views/joinUs')
    }
  ]
})
