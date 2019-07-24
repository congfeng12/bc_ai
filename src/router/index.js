import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  //个人住也
    {
      path: '/',
      name: 'home',
      meta:{
        title:'主页',
      },
      component: () => import('@/components/home'),
    },
    {
      path: '/about',
      name: 'about',
      meta:{
        title:'关于',
      },
      component: () => import('@/components/about'),
    }
  ],
  mode: 'history'
})
