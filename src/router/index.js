import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/investigationreport',
      name: 'investigationreport',
      meta:{
        title:'调查报告',
      },
      component: () => import('@/components/investigationreport'),
    },
    {
      path: '/announcement',
      name: 'announcement',
      meta:{
        title:'公告内容',
      },
      component: () => import('@/components/announcement'),
    },
    {
      path: '/jobdescription',
      name: 'jobdescription',
      meta:{
        title:'工作说明',
      },
      component: () => import('@/components/jobdescription'),
    },
    {
      path: '/sendresume',
      name: 'sendresume',
      meta:{
        title:'工作申请',
      },
      component: () => import('@/components/sendresume'),
    },
    {
      path: '/milestone',
      name: 'milestone',
      meta:{
        title:'里程碑内容显示',
      },
      component: () => import('@/components/milestone'),
    },
    {
      path: '/backgroundservice',
      name: 'backgroundservice',
      meta:{
        title:'后台服务介绍页',
      },
      component: () => import('@/components/backgroundservice'),
    },
    {
      path: '/platform_menu',
      name: 'platform_menu',
      meta:{
        title:'资源',
      },
      component: () => import('@/components/platform_menu'),
      children:[
        {
          path: '/platform_menu/',
          name: '平台主页',
          component: () => import('@/components/platform_home')
        },
        {
          path: '/platform_menu/staticresources',
          name: '官网静态资源',
          component: () => import('@/components/platform_StaticResources')
        },
         {
          path: '/platform_menu/server',
          name: '服务器资源',
          component: () => import('@/components/platform_Server')
        },
        {
          path: '/platform_menu/backgroundService',
          name: '后台服务资源',
          component: () => import('@/components/platform_backgroundService')
        },
        {
          path: '/platform_menu/notices',
          name: '官网公告资源',
          component: () => import('@/components/platform_notices')
        },
        {
          path: '/platform_menu/milestone',
          name: '里程碑资源',
          component: () => import('@/components/platform_milestone')
        },
        {
          path: '/platform_menu/report',
          name: '调查报告',
          component: () => import('@/components/platform_report')
        },
        {
          path: '/platform_menu/work',
          name: '空缺职位',
          component: () => import('@/components/platform_work')
        },
        {
          path: '/platform_menu/timeaxis',
          name: '时间轴',
          component: () => import('@/components/platform_timeaxis')
        },
        {
          path: '/platform_menu/account',
          name: '平台账户',
          component: () => import('@/components/platform_account')
        },
        {
          path: '/platform_menu/admin',
          name: '管理员账户',
          component: () => import('@/components/platform_admin')
        },
        {
          path: '/platform_menu/logs',
          name: '操作日志',
          component: () => import('@/components/platform_logs')
        },
        {
          path: '/platform_menu/statistics',
          name: '统计信息',
          component: () => import('@/components/platform_statistics')
        },
        {
          path: '/platform_menu/personalcenter',
          name: '个人资源中心',
          component: () => import('@/components/platform_personalcenter')
        },
        {
          path: '/platform_menu/personallogs',
          name: '个人操作日志',
          component: () => import('@/components/platform_personallogs')
        },
      ]
    },
    {
      //当访问了不存在的路由的时候
      path: '*',
      name: 'err_404',
      meta:{
        title:'404错误页面',
      },
      component: () => import('@/components/err_404'),
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
})
// router.beforeEach((to, from, next) => {
//   console.log(to);
//    console.log(from);
//   if (to.matched.length === 0) { 
//     from.name ? next({
//       name: from.name
//     }) : next('/errorinfo'); 
//   } else {
//     next(); //如果匹配到正确跳转
//   }
// });
// export default router;