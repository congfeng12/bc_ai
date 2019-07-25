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
    },
    {
      path: '/progress',
      name: 'progress',
      meta:{
        title:'进展',
      },
      component: () => import('@/components/progress'),
    },
    {
      path: '/notices',
      name: 'notices',
      meta:{
        title:'公告',
      },
      component: () => import('@/components/notices'),
    }
  ],
  mode: 'history'
  ,
  scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
})
