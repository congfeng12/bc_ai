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
    const Run_Time_Range = '@2019-2019'
    //网站域名
    const Domain_Name = 'CMAPLE.CN'
    //GitHubURL
    const GitHubURL = 'https://github.com/congfeng12'
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
    const getTimeAxisAtHome = '/TimeAxis/getTimeAxisAtHome'
    //根据id查询公告信息
    const getAnnouncementById = '/Announcement/getAnnouncementById'
    //根据id查询服务信息
    const getBackgroundServicesById = '/BackgroundService/getBackgroundServicesById'
    //主页获取最新的里程碑信息
    const getMilestoneAtHome = '/Milestone/getMilestoneAtHome'
    //主页获取公告列表
    const getAnnouncementAtHome = '/Announcement/getAnnouncementAtHome'
    //请求调查报告流文件路径
    const getRequestById = '/Report/getRequestById?id='
    //获取最新的岗位信息列表
    const getWorkDescOrderBy = '/Work/getWorkDescOrderBy'
    //根据id获取里程碑信息
    const getMilestoneById = '/Milestone/getMilestoneById'
    //分页获取公告列表
    const getAnnouncementDescOrderBy = '/Announcement/getAnnouncementDescOrderBy'
    //获取里程碑列表
    const getMilestoneDescOrderBy = '/Milestone/getMilestoneDescOrderBy'
    //获取调查报告列表
    const getReportDescOrderBy = '/Report/getReportDescOrderBy'
    //获取最新的后台服务信息
    const getBackgroundServicesDescOrderBy = '/BackgroundService/getBackgroundServicesDescOrderBy'
    //根据id获取岗位信息
    const getWorkById = '/Work/getWorkById'
    //公共方法
    //报错弹窗提示
    function error_Message(importThis,c_message) {
      importThis.$message.error(c_message)
    }
    //成功弹窗提示
    function success_Message(importThis,c_message) {
      importThis.$message({
        message: c_message,
        type: 'success'
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
    }
</script>