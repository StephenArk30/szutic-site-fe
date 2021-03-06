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
      path: '/aboutus/:active',
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
      component: () => import('../views/joinUs/joinUs')
    },
    {
      path: '/joinus/applicant',
      name: '报名',
      meta: {
        title: '报名'
      },
      component: () => import('../views/joinUs/applicant')
    },
    {
      path: '/joinus/applicant/get',
      name: '已报名',
      meta: {
        title: '已报名'
      },
      component: () => import('../views/joinUs/getApplicant')
    },
    {
      path: '/joinus/bonus',
      name: '加分题',
      meta: {
        title: '加分题'
      },
      component: () => import('../views/bonus/bonus')
    },
    {
      path: '/joinus/publishbonus',
      name: '发布题目',
      meta: {
        title: '发布题目'
      },
      component: () => import('../views/bonus/publishBonus')
    },
    {
      path: '/joinus/bonuslist/:type',
      name: '题目列表',
      meta: {
        title: '题目列表'
      },
      component: () => import('../views/bonus/bonusList')
    },
    {
      path: '/joinus/bonusdetail/:id',
      name: '题目详情',
      meta: {
        title: '题目详情'
      },
      component: () => import('../views/bonus/bonusDetail')
    },
    {
      path: '/gitguide',
      name: '深大腾创代码库',
      meta: {
        title: '深大腾创代码库'
      },
      component: () => import('../views/gitguide')
    },
    {
      path: '/cloudguide',
      name: '社团云盘',
      meta: {
        title: '社团云盘'
      },
      component: () => import('../views/cloudguide')
    },
    {
      path: '/tool/sendsms',
      name: '群发短信',
      meta: {
        title: '群发短信'
      },
      component: () => import('../views/sendSMS')
    }
  ]
})
