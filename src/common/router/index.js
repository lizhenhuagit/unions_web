import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export var constantRouterMap = [
  { path: '/', component: () => import('../views/login/HelloWorld'),meta: {
      title: '',
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },hidden:true},
  { path: '/login', component: () => import('../views/login/HelloWorld'),hidden:true},
  { path: '/home', component: () => import('../views/login/index'),hidden:true}
]
export default new Router({
  routes: constantRouterMap
})


/*export default new Router({
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
})*/
