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
    <!-- 标题 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;">
      <!-- 标题及说明 -->
      <h3 style="margin: 10px 0px 0px 0px;">
        <font style="font-size: 1.7em;font-weight: bolder;letter-spacing: 0px;">资源</font>
      </h3>
      <h3 style="margin: 10px 0px 0px 0px;">
        <font style="color: #606266;font-size: 1.7em;font-weight: normal;letter-spacing: 0.05em;">蜂巢系统主要用于发现并开</font>
      </h3>
      <h3 style="margin: 0px 0px 80px 0px;">
        <font style="color: #606266;font-size: 1.7em;font-weight: normal;letter-spacing: 0.05em;">发有趣的应用或者服务。</font>
      </h3>
    </div>
    <!-- 主要工具介绍 -->
    <div style="width: 1500px;height: 400px;margin: 0 auto 0;border-top:1px solid #DCDFE6;padding-top: 40px;">
      <!-- 标题及说明及按钮 -->
      <div style="width: 345px;height: 442px;float: left;position: relative;">
        <h3 style="margin: 5px 0px 0px 0px;">
          <font font style="font-size: 1.3em;font-weight: bolder;letter-spacing: 0px;">蜂巢系统相关资源使用手册</font>
        </h3>
        <h3 style="margin: 10px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1em;font-weight: normal;letter-spacing: 0.05em;">系统中相关服务和应用的相关教育资源，宗旨是让参考人员熟练的使用及开发相关资源。</font>
        </h3>
        <a :href="ProgressPageUrl" style="color: #909399;text-decoration: none;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;position: absolute;bottom: 0px;">
          查看详细内容&nbsp<i class="el-icon-arrow-right"></i>
        </a>
      </div>
      <!-- 图片 -->
      <div style="width: 1100px;height: 442px;margin: 0px;float: right;padding: 10px 0px 0px 0px;">
        <img :src="resourcesLogoImgUrl" style="width: 720px;">
      </div>
    </div>
    <!-- 工具平台 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;border-top:1px solid #DCDFE6;clear: both;margin-top: 100px;padding-top: 40px;">
      <!-- 标题及说明及按钮 -->
      <div style="width: 345px;height: 442px;float: left;position: relative;">
        <h3 style="margin: 5px 0px 0px 0px;">
          <font font style="font-size: 1.3em;font-weight: bolder;letter-spacing: 0px;">资源平台</font>
        </h3>
        <h3 style="margin: 10px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1em;font-weight: normal;letter-spacing: 0.05em;">查看并使用在线相关服务，管理员可以通过资源平台进行资源管理。</font>
        </h3>
      </div>
      <!-- 平台资源 -->
      <div style="width: 1100px;height: 642px;margin: 0px;float: right;padding: 10px 0px 0px 0px;">
        <div style="width: 400px;height: auto;clear: both;">
          <a :href="resourcesPlatform[3]" style="text-decoration: none;">
            <el-card :body-style="{ padding: '10px' }" shadow="always" style="width: 400px;">
              <img style="width: 100%;" :src="resourcesPlatform[2]">
            </el-card>
            <h3 style="margin: 20px 0px 0px 0px;">
              <font font style="color: #000000;font-size: 1em;font-weight: bolder;letter-spacing: 0px;">{{resourcesPlatform[0]}}</font>
            </h3>
            <font style="color: #606266;font-size: 0.9em;font-weight: normal;">{{resourcesPlatform[1]}}</font>
          </a>
        </div>
      </div>
    </div>
    <!-- 框架工具列表 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;margin-top: 50px;clear: both;">
      <h3 style="margin: 20px 0px 0px 0px;">
        <font font style="color: #000000;font-size: 1em;font-weight: bolder;letter-spacing: 0px;">工具</font>
      </h3>
      <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <div v-for="backgroundService in BackgroundServices">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                  <a :href="backgroundService.url" style="text-decoration:none;" target="view_window">
                    <div style="width: 100%;height: auto;">
                      <div style="position: relative;">
                        <b style="color: #303133;font-size: 0.95em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">{{ backgroundService.title }}</b>
                        <b style="color: #909399;font-size: 0.8em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;position: absolute;left: 400px;">{{ backgroundService.synopsis }}</b>
                        <b style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0;font-weight: normal;float: right;">{{backgroundService.date}}</b>
                      </div>
                    </div>
                  </a> 
                </li>
            </div>
          </ol>
    </div>
    <!-- GitHub -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;padding-top: 30px;clear: both;">
      <a :href="GitHubPagerl" style="color: #909399;text-decoration: none;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;" target="view_window">
          在GITHUB上查看更多&nbsp<i class="el-icon-arrow-right"></i>
      </a>
    </div>
    <!-- 页尾 -->
    <div style="border-top:1px solid #DCDFE6;width: 1500px;margin:0 auto 0;height: 70px;margin-top: 60px;clear: both;">
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
      //资源页标题图片
      resourcesLogoImgUrl:'../../static/resourselogoimg.jpg',
      //平台资源列表title/msg/imgurl/url
      resourcesPlatform:[
        '蜂巢系统资源平台',
        '可以使用蜂巢系统的所有在线资源，并且可以上传你的服务节点来完善蜂巢系统',
        require('../../static/resourse1.svg'),
        '/platform_login'
      ],
      //职位展示
      BackgroundServices: [
      ],
      //主页
      HomePageImgUrl:'',
      HomePageTextUrl:'',
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
              c_BackgroundServices.synopsis=res.data.RTDATA[i].synopsis;
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
    this.HomePageTextUrl = this.$Global.HomePageUrl;
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
