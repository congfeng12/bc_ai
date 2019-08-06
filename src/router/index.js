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
    },
    {
      path: '/charter',
      name: 'charter',
      meta:{
        title:'宪章',
      },
      component: () => import('@/components/charter'),
    },
    {
      path: '/join',
      name: 'join',
      meta:{
        title:'加入我们',
      },
      component: () => import('@/components/join'),
    },
    {
      path: '/state',
      name: 'state',
      meta:{
        title:'声明页面',
      },
      component: () => import('@/components/state'),
    },
    {
      path: '/resources',
      name: 'resources',
      meta:{
        title:'资源',
      },
      component: () => import('@/components/resources'),
    },
    {
      path: '/platform_login',
      name: 'platform_login',
      meta:{
        title:'平台主页-登录页面',
      },
      component: () => import('@/components/platform_login'),
      children:[
        // {
        //   path: 'home',
        //   name: 'about',
        //   component: () => import('@/components/communityhome')
        // },
        
      ]
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
