import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/login/HelloWorld'

Vue.use(Router)


/*export var constantRouterMap = [
  { path: '/login', component: () => import('../views/login/HelloWorld'),hidden:true}
]
export default new Router({
  routes: constantRouterMap
})*/


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
        title: '',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
