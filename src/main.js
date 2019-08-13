// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import mavonEditor from 'mavon-editor'
import 'element-ui/lib/theme-chalk/index.css'
import 'mavon-editor/dist/css/index.css'

import api from './utils/api/api.js'

Vue.prototype.$api = api
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(mavonEditor)

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  /* 路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
