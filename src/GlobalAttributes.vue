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
    }
</script>