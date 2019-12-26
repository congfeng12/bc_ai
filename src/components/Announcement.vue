<template>
  <div style="height: 100%;">
    <!-- 上半部分 -->
    <div style="width: 100%;background-color: #eeedee;margin-bottom: 50px;">
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
      <!-- 宪章标题记住要内容 -->
      <div style="width: 1500px;height: auto;">
        <div style="width: 1200px;height: 300px;margin: 0 auto 0;">
          <!-- 标题及文字 -->
          <div style="width: 730px;height: 300px;margin: 0 auto 0;position: relative;">
            <h1 style="font-size: 40px;margin: 0px 0px 15px 0px;">{{title}}</h1>
            <b style="color: #606266;letter-spacing: 0.2em;font-size: 16px;">{{synopsis}}</b>
            <p></p>
            <div style="margin-top: 90px;color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;position: absolute;bottom: 0;">
              <p style="color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;margin:0px 0px 6px 0px;">{{author}}</p>
              <p style="color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;margin:0px 0px 6px 0px;">{{time}}</p>
              <p style="color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;margin:0px 0px 2px 0px;">{{readtime}}分钟阅读</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <!-- 内容 -->
    <div v-html="content"></div>    
    <!-- 页脚 -->
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
      //公告标题
      title:'',
      //公告作者
      author:'',
      //公告简介
      synopsis:'',
      //时间
      time:'',
      //阅读时间
      readtime:'',
      //公告内容
      content:``,
      //微信弹窗属性
      WeChartVisible: false,
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
    //查询公告
      getAnnouncementById(){
        //设置必要参数
        var that = this;
        //请求里程碑信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getAnnouncementById,this.$qs.stringify({
           id:this.$route.query.id,
        }))
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理里程碑信息
            that.title = res.data.RTDATA.data.title;
            that.synopsis = res.data.RTDATA.data.synopsis;
            var c_creattime = res.data.RTDATA.data.creattime.split("-");
            that.time = c_creattime[0]+'年'+c_creattime[1]+'月'+c_creattime[2]+'日';
            that.author = res.data.RTDATA.data.author;
            that.readtime = res.data.RTDATA.data.readtime;
            that.content = res.data.RTDATA.content;
          }else{
            //异常结果显示
            that.$Global.error_Message(that,res.data.RTMSG);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err);
        });
      }, 
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
    this.getAnnouncementById();
  },
   mounted(){
    //页面加载后执行
    
  }

}
</script>

