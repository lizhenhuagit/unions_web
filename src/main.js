// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './common/router'
import axios from 'axios'
import VueAxios from 'vue-axios'



axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios,axios)


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    console.log(sessionStorage.userName)
    if (sessionStorage.userName=== undefined||sessionStorage.userName=== ' ') { // userName
      next({
        path: '/login'
      })
    }else{
      next();
    }
  } else {
    next();
  }
});
/*router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    console.log(sessionStorage.userName)
    if (sessionStorage.userName=== undefined||sessionStorage.userName=== ' ') { // userName
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }else{
      next();
    }
  } else {
    next();
  }
});*/

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/*router.beforeEach((to, from, next) => {
  if (false) {
    // 如果为true的话，会重定向到指定页面去，否则的话会重定向到登录页面去
    next();
  } else {
    next({
      path: '/login'
    });
  }
});*/

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/

