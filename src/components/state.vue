<template>
  <div style="width: 100%;height: auto;">
    <!-- 上半部分 -->
    <div style="width: 100%;">
     <!--  <img src="../jpg/background.png">  -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;">
      <!-- 标题头 -->
      <div style="width: 100%;height: 98px;border-bottom:2px solid #000000;margin: 0px 0px 30px 0px;">
        <!-- 图标 -->
        <div style="float: left;width: 250px;">
          <a :href="HomePageImgUrl">
            <img src="../../static/logo_black.png" style="width: 70px;margin: 15px 0px 0px 0px;float: left;">
          </a>
        </div>
        <!-- 标题栏按钮按钮 -->
        <div style="float: right;width: 307px;height: 30px;margin: 32px 0px 0px 0px;">
          <!-- 公告 -->
          <div style="float: right;padding: 4px 7px 0px 0px;">
            <a :href="NoticesPageUrl" style="text-decoration: none;">
              <font style="color: #000000;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">公告</font>
            </a>
          </div>
          <!-- 资源 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="ResourcesPagerl" style="text-decoration: none;">
              <font style="color: #000000;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">资源</font>
            </a>
          </div>
          <!-- 进展 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="ProgressPageUrl" style="text-decoration: none;">
              <font style="color: #000000;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">进展</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="AboutPageUrl" style="text-decoration: none;">
              <font style="color: #000000;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">关于</font>
            </a>
          </div>
        </div>
      </div>
      <!-- 网页主要内容 -->
      </div>
    </div>
    <!-- 说明内容 -->
    <div style="width: 750px;height: auto;margin:0 auto 0;clear: both;">
      <h1 style="margin: 40px 0px 0px 0px;">
        <font style="font-size: 1.4em;">声明</font>
      </h1>
      <h3 style="margin: 25px 0px 30px 0px;">
        <font style="color: #606266;font-weight: normal;letter-spacing: 0.14em;">蜂巢系统的使命是确保程序都是对社会有正面影响，并且我们的团队是来自五湖四海的线上工作者，我们在开发应用和程序的时候都在执行我们的执行标准。</font>
      </h3>
      <el-button type="info" plain style="letter-spacing: 0.14em;">查看宪章&nbsp<i class="el-icon-arrow-right"></i></el-button>
      <h3 style="margin: 50px 0px 0px 0px;">
        <font style="font-size: 1.6em;">我们所做的</font>
      </h3>
      <h3 style="margin: 30px 0px 0px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">我们致力于有趣的应用和算法进行开发。</font>
      </h3>
      <h3 style="margin: 30px 0px 0px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">我们最近的一些成果包括：</font>
      </h3>
      <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <div v-for="backgroundService in BackgroundServices">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                  <a :href="backgroundService.url" style="text-decoration:none;" target="view_window">
                    <div style="width: 100%;height: auto;">
                      <div>
                        <b style="color: #303133;font-size: 0.95em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">{{ backgroundService.title }}</b>
                        <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0;font-weight: normal;float: right;">{{backgroundService.date}}</b>
                      </div>
                    </div>
                  </a> 
                </li>
            </div>
          </ol>
    <h3 style="margin: 30px 0px 20px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">访问我们的进度页面了解更多关于蜂巢系统的信息。</font>
    </h3>
    <el-button type="info" plain style="letter-spacing: 0.14em;">查看进度&nbsp<i class="el-icon-arrow-right"></i></el-button>
    <h3 style="margin: 50px 0px 0px 0px;">
      <font style="font-size: 1.6em;">参与者</font>
    </h3>
    <h3 style="margin: 30px 0px 0px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">蜂巢系统由 CMAPLE、EMMA 提供核心支持，由吴KangLi（前端技术支持）、颜ChengJie（前端技术支持）提供技术支持。
        </font>
    </h3>
    <h3 style="margin: 30px 0px 20px 0px;">
        <font style="font-size: 1.1em;font-weight: normal;letter-spacing: 0.05em;font-weight: bolder;">页面参照OPEN AI官网进行制作。</font>
    </h3>
    <el-button type="info" plain style="letter-spacing: 0.14em;">访问OPEN AI&nbsp<i class="el-icon-arrow-right"></i></el-button>
    <h3 style="margin: 30px 0px 20px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">任何问题？电子邮件：congfeng12@163.com。</font>
    </h3>
    </div>
    <!-- 页尾 -->
    <div style="border-top:1px solid #DCDFE6;width: 1500px;margin:0 auto 0;height: 70px;margin-top: 60px;">
      <div style="height: 30px;width: 220px;float: left;margin-top: 10px;">
        <!-- github -->
        <a :href="GitHubPagerl" target="view_window">
          <img style="height: 25px;float: left;" src="../../static/github.png">
        </a>
        <!-- 微信 -->
        <a href="javascript:void(0)" @click="WeChartVisible = true">
          <img style="height: 25px;float: left;margin-left: 20px;" src="../../static/weixin.png">
        </a>
      </div>
      <!-- 快捷连接 -->
      <div style="height: 30px;width: 1280px;float: left;margin-top: 10px;">
        <!-- 公告 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="AboutPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">关于</font>
            </a>
          </div>
          <!-- 资源 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="ProgressPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">进展</font>
            </a>
          </div>
          <!-- 进展 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="ResourcesPagerl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">资源</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="NoticesPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">公告</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="CharterPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">宪章</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="JoinPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">加入</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="StatePageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">声明</font>
            </a>
          </div>
          <b style="float: right;color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.2em;font-weight: bold;text-transform: uppercase;padding-top: 6px;">{{Record_Number}} &nbsp {{Run_Time_Range}}&nbsp{{Domain_Name}}</b>
      </div>
    </div>
    <!-- 微信公众号展示页面 -->
    <el-dialog
      title="微信公众号"
      :visible.sync="WeChartVisible"
      width="500px"
      center>
        <img style="width: 400px;padding-left: 25px;" src="../../static/WechatIMG485.jpeg">
        <span slot="footer" class="dialog-footer">
          关注微信订阅号，随时获取最新的消息
        </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      //微信弹窗属性
      WeChartVisible: false,
      //后台服务列表
      BackgroundServices: [
      ],
      //主页
      HomePageImgUrl:'',
      //关于
      AboutPageUrl:'',
      //进展
      ProgressPageUrl:'',
      //资源
      ResourcesPagerl:'',
      //公告
      NoticesPageUrl:'',
      //加入我们
      JoinPageUrl:'',
      //宪章
      CharterPageUrl:'',
      //声明
      StatePageUrl:'',
      //github
      GitHubPagerl:'',
      //备案号
      Record_Number:'',
      //运行时间
      Run_Time_Range:'',
      //域名
      Domain_Name:'',
    }
  },
  methods: {  
      //获取最新的后台服务信息
      getBackgroundServicesDescOrderBy(){
        //设置必要参数
        var that = this;
        //请求后台服务信息
         this.$Axios.post(this.$Global.Back_End_Service+'/BackgroundService/getBackgroundServicesDescOrderBy',{})
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理后台服务信息
            for (var i = 0; i < res.data.RTDATA.length; ++i) {
              var c_BackgroundServices = new Object();
              c_BackgroundServices.id=res.data.RTDATA[i].id;
              c_BackgroundServices.url='/backgroundService?id='+res.data.RTDATA[i].id;
              c_BackgroundServices.title=res.data.RTDATA[i].name;
              c_BackgroundServices.date=res.data.RTDATA[i].createdate;
              that.BackgroundServices.push(c_BackgroundServices);
            }
          }else{
            //异常结果显示
            that.error_Message(res.data.RTMSG);
          }
        })
        .catch(function(err){
          console.log(err);
        });
      }, 
      //报错弹窗提示
      error_Message(c_message) {
        this.$message.error(c_message);
      },
      //成功弹窗提示
      success_Message(c_message) {
        this.$message({
          message: c_message,
          type: 'success'
        });
      }
    },
  created(){
    //页面加载时执行
    //设置公共属性
    this.HomePageImgUrl = this.$Global.HomePageUrl;
    this.AboutPageUrl = this.$Global.AboutPageUrl;
    this.ProgressPageUrl = this.$Global.ProgressPageUrl;
    this.ResourcesPagerl = this.$Global.ResourcesPagerl;
    this.NoticesPageUrl = this.$Global.NoticesPageUrl;
    this.JoinPageUrl = this.$Global.JoinPageUrl;
    this.CharterPageUrl = this.$Global.CharterPageUrl;
    this.StatePageUrl = this.$Global.StatePageUrl;
    this.GitHubPagerl = this.$Global.GitHubURL;
    this.Record_Number = this.$Global.Record_Number;
    this.Run_Time_Range = this.$Global.Run_Time_Range;
    this.Domain_Name = this.$Global.Domain_Name;
    //获取主页后台服务信息
    this.getBackgroundServicesDescOrderBy();
  },
  mounted(){
    //页面加载后执行
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
