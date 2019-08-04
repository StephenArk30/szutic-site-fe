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
    }
  ]
})
