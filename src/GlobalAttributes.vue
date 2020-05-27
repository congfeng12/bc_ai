<script type="text/javascript">
    //公共属性
    //后台服务前置名称
    const Back_End_Service = 'http://localhost:8081'//'/MAIN_SERVICE'
    //前段版本号
    const Version_Number = 'Version 1.0.1'
    //版本类型
    const Version_Type = 'Trial Run'
    //备案号
    const Record_Number = '浙ICP备19041141号'
    //网站运行年限
    const Run_Time_Range = '@2019-2020'
    //网站域名
    const Domain_Name = 'CMAPLE.CN'
    //GitHubURL
    const GitHubURL = 'https://github.com/congfeng12'
    //静态资源路径
    const StaticResourcesPath = '/Users/congfeng/Downloads'
    //主页
    const HomePageUrl = '/'
    //关于
    const AboutPageUrl = '/about'
    //进展
    const ProgressPageUrl = '/progress'
    //资源
    const ResourcesPagerl = '/resources'
    //公告
    const NoticesPageUrl = '/notices'
    //加入我们
    const JoinPageUrl = '/join'
    //宪章
    const CharterPageUrl = '/charter'
    //声明
    const StatePageUrl = '/state'
    //主页获取最新的时间轴信息
    const getTimeAxisAtHome = '/TimeAxis/selectAtHomePage'
    //根据id查询公告信息
    const getAnnouncementById = '/Announcement/selectById'
    //根据id查询服务信息
    const getBackgroundServicesById = '/BackgroundService/selectById'
    //主页获取最新的里程碑信息
    const getMilestoneAtHome = '/Milestone/selectAtHomePage'
    //主页获取公告列表
    const getAnnouncementAtHome = '/Announcement/selectAtHomePage'
    //请求调查报告流文件路径
    const getRequestById = '/Report/selectById?id='
    //获取最新的岗位信息列表
    const getWorkDescOrderBy = '/Work/selectDescOrderByTime'
    //根据id获取里程碑信息
    const getMilestoneById = '/Milestone/selectById'
    //分页获取公告列表
    const getAnnouncementDescOrderBy = '/Announcement/selectDescOrderByTime'
    //获取里程碑列表
    const getMilestoneDescOrderBy = '/Milestone/selectDescOrderByTime'
    //获取调查报告列表
    const getReportDescOrderBy = '/Report/selectDescOrderByTime'
    //获取最新的后台服务信息
    const getBackgroundServicesDescOrderBy = '/BackgroundService/selectDescOrderByTime'
    //根据id获取岗位信息
    const getWorkById = '/Work/selectById'
    //登录
    const login = '/user/login'
    //获取登录的用户信息
    const getUserSession = '/user/getUserSession'
    //注册登录的用户信息
    const setUserSession = '/user/setUserSession'
    //更新登录的用户信息
    const updateUserLoginInfo = '/user/updateUserLoginInfo'
    //注册新的账号
    const userinsert = '/user/insert'
    //操作日志
    const selectByCriteria = '/operationlog/selectByCriteria'
    //个人操作日志
    const selectUserOperationLogByCriteria = '/operationlog/selectUserOperationLogByCriteria'
    //个人导出日志为excel
    const getOperationLogByParamsToExcel = '/operationlog/getOperationLogByParamsToExcel'
    //管理员导出excel
    const getOperationLogToExcel = '/operationlog/getOperationLogToExcel'
    //发送验证码
    const sendSMS = '/user/sendSMS'
    //查询用户列表
    const selectUsers = '/user/selectByCriteria'
    //统计信息查询
    const selectCountHomePage = '/Statistics/selectCountHomePage'
    //访问静态资源
    const selectStaticResources = '/staticresources/selectStaticResources'
    //访问公告资源
    const selectNotices = '/Announcement/selectByCriteria'
    //查询里程碑列表
    const selecttMilestonep = '/Milestone/selectByCriteria'
    //按照条件查询调查报告列表
    const selectReports = '/Report/selectByCriteria'
    //按照条件查询岗位信息
    const selectWorks = '/Work/selectByCriteria'
    //按照条件搜索时间轴信息
    const selectTimeAxis = '/TimeAxis/selectByCriteria'
    //公共方法
    //报错弹窗提示
    function error_Message(importThis,c_message) {
      importThis.$message.error(
        {
        message: c_message,
        duration:5000
      })
    }
    //成功弹窗提示
    function success_Message(importThis,c_message) {
      importThis.$message({
        message: c_message,
        type: 'success',
        duration:5000
      })
    }
    //成功通知提示
    function success_notify(importThis,c_title,c_message,c_time){
      importThis.$notify({
          title: c_title,
          message: c_message,
          type: 'success',
          duration: c_time
        });
    }
    //警告通知提示
    function warning_notify(importThis,c_title,c_message,c_time){
      importThis.$notify({
          title: c_title,
          message: c_message,
          type: 'warning',
          duration: c_time
        });
    }
    //错误通知提示
    function error_notify(importThis,c_title,c_message,c_time){
      importThis.$notify.error({
          title: c_title,
          message: c_message,
          duration: c_time
        });
    }
    //重要信息页面弹窗提示
    function main_message(importThis,c_title,c_message){
      importThis.$alert(c_message, c_title, {
        confirmButtonText: '确定',
        callback: action => {
          //回调信息

        }
      });
    }
    //重要通知
    function message_box(importThis,c_title,c_message){
      importThis.$alert(c_message , c_title, {
          confirmButtonText: '确定',
          callback: action => {
            importThis.$message({
              type: 'success',
              message: 'success!'
            });
          }
        });
    }
    //登录失败回跳
    function login_message_box(importThis,c_title,c_message,c_url){
      importThis.$alert(c_message , c_title, {
          confirmButtonText: '确定',
          callback: action => {
            importThis.$router.push(c_url);
          }
        });
    }
    //保存cookie
    function setCookie (c_name, value, expiredays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiredays);
      document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }
    //获取cookie
    function getCookie(name) {
      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
      return (arr[2]);
      else
      return null;
    }
    //删除cookie
    function delCookie (name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = getCookie(name);
      if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
    //储存localStorage
    function setlocalStorage(name , val){
      localStorage.setItem(name, 'Bearer ' + val)
    }
    //读取localStorage
    function loadlocalStorage(name){

    }
    //删除localStorage
    function dellocalStorage(name){

    }
    //更新localStorage
    function updatelocalStorage(name , up_val){

    }
    // 暴露出这些属性和方法
    export default {
      Back_End_Service,
      Version_Number,
      Version_Type,
      Record_Number,
      Run_Time_Range,
      Domain_Name,
      GitHubURL,
      HomePageUrl,
      AboutPageUrl,
      ProgressPageUrl,
      ResourcesPagerl,
      NoticesPageUrl,
      JoinPageUrl,
      CharterPageUrl,
      StatePageUrl,
      error_Message,
      success_Message,
      getTimeAxisAtHome,
      getAnnouncementById,
      getBackgroundServicesById,
      getMilestoneAtHome,
      getAnnouncementAtHome,
      getRequestById,
      getWorkDescOrderBy,
      getMilestoneById,
      getAnnouncementDescOrderBy,
      getMilestoneDescOrderBy,
      getReportDescOrderBy,
      getBackgroundServicesDescOrderBy,
      getWorkById,
      success_notify,
      warning_notify,
      error_notify,
      main_message,
      login,
      message_box,
      setCookie,
      getCookie,
      delCookie,
      getUserSession,
      login_message_box,
      setUserSession,
      updateUserLoginInfo,
      userinsert,
      selectUserOperationLogByCriteria,
      getOperationLogByParamsToExcel,
      selectByCriteria,
      getOperationLogToExcel,
      sendSMS,
      selectUsers,
      selectCountHomePage,
      selectStaticResources,
      StaticResourcesPath,
      selectNotices,
      selecttMilestonep,
      selectReports,
      selectWorks,
      selectTimeAxis,
    }
</script>