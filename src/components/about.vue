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
    <!-- 说明 -->
    <div style="width: 1500px;height: auto;margin:0 auto 0;">
      <!-- 标题 -->
      <h6 style="padding-top: 20px;font-size: .95em;letter-spacing: 0.2em;font-weight: normal;color: #606266;margin:0;float: left;">关于蜂巢</h6>
      <!-- 内容 -->
      <div style="width: 963px;height: auto;margin:0 auto 0;padding:15px 0px 40px 0px;">
        <font style="font-size: 30px;">
          蜂巢系统·个人服务网站是CMAPLE搭建的个人网站，主要用于发现和开发有趣的应用和服务。我们将这些服务免费开源，所有人都可以使用或者针对自己的需求进行二次开发。或者加入我们，我们的办公地点灵活，只要有网络并且你有相关的技术和兴趣就可以加入我们，一起完善蜂巢系统。
        </font>
      </div>
    </div>
    <!-- 展示图 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;">
      <img :src="about1" style="width: 1500px;">
    </div>
    <!-- 章程说明 -->
    <div style="width: 713px;height: auto;margin: 0 auto 0;padding: 60px 0px 40px 0px;">
      <font style="font-size: 1.3em;color: #303133;font-family:Hiragino Sans GB;">
        蜂巢系统的使命是发现并开发有趣的应用或者服务，让我们的工作能对全人类有意。我们将开源这些程序，如果你对我们的工作有兴趣，也可以加入我们，和我们一起完善蜂巢系统。
      </font>
      <p style="height: 10px;"></p>
      <a :href="CharterPageUrl" style="color:#C0C4CC;text-decoration: none;font-size: 10px;letter-spacing: 0.3em;">我们的宪章&nbsp<i class="el-icon-arrow-right"></i></a>
    </div>
    <!-- 团队说明 -->
    <div style="width: 713px;height: auto;margin: 0 auto 0;padding: 40px 0px 60px 0px;border-top:1px solid #DCDFE6;">
      <font style="font-size: 1.3em;color: #303133;font-family:Hiragino Sans GB;">
        蜂巢系统由CMAPLE管理，由一下人员为该项目提供了技术支持：吴 KangLi（前端技术支持）、颜 ChengJie（前端技术支持）。
      </font>
      <p></p>
      <font style="font-size: 1.3em;color: #303133;font-family:Hiragino Sans GB;">
        我们的投资者包括: 暂无。我们很幸运能够任务一致，乐于助人的投资者！
      </font>
      <p style="height: 10px;"></p>
      <a :href="StatePageUrl" style="color:#C0C4CC;text-decoration: none;font-size: 10px;letter-spacing: 0.3em;">了解更多关于我们的信息&nbsp<i class="el-icon-arrow-right"></i></a>
    </div>
    <!-- 团队照片 -->
    <div style="width: 1500px;height: auto;margin:0 auto 0;"> 
      <img :src="about2" style="width: 1500px;">
      <font style="font-size: .75em;letter-spacing: 0;font-weight: normal;color: #C0C4CC;">此处为团队合影位置，暂时使用其他照片代替</font>
    </div>
    <!-- 时间线 -->
    <div style="width: 100%;background-color: #f8f8f8;">
      <div style="width: 1500px;height: auto;margin: 0 auto 0;margin-top: 60px;padding: 20px 0px 20px 0px;">
      <el-timeline>
        <h3 style="font-size: 1.5em;letter-spacing: 0.25em;line-height: 1.4;">时间轴</h3>
        <el-timeline-item v-for="timeline in Timelines" :timestamp="timeline.eventtime" placement="top" v-bind:key="timeline.id">
          <el-card style="width: 1370px;">
            <h3 style="font-size: 1.2em;letter-spacing: 0.075em;">{{timeline.title}}</h3>
            <p style="font-size: .9em;letter-spacing: 0.025em;color: #909399;">{{timeline.content}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      </div>
    </div>
    <!-- 加入我们 -->
    <div style="width: 100%;height: auto;margin-top: 80px;">
      <div style="width: 1500px;height: 380px;margin:0 auto 0;">
        <!-- 加入我们 -->
        <div style="width: 470px;margin:0px;float: right;">
          <h2 style="letter-spacing: 0.1em;">加入我们</h2>
          <div style="margin:0px 0px 168px 0px;">
            <font style="font-size: 20px;">加入我们一起学习、开发、完善蜂巢系统。一起打造更多有趣的应用或者服务。</font>
          </div>
          <p></p>
          <a :href="JoinPageUrl" style="text-decoration: none;color:#C0C4CC;text-decoration: none;font-size: 13.3px;letter-spacing: 0.3em;">
              查看详细内容&nbsp<i class="el-icon-arrow-right"></i>
          </a>
        </div>
        <!-- 图片集 -->
        <div style="margin-top: 19.92px;">
          <!-- 展示打图 -->
          <div style="float: left;height: 325px;width: 487.5px;">
            <img style="height: 325px;" :src="Joinimg1">
          </div>
          <!-- 并列图片 -->
          <div style="float: left;height: 325px;width: 500px;">
            <div>
              <div style="float: left;margin-left: 14px;">
                <img style="height: 160px;" :src="Joinimg2">
              </div>
              <div style="float: right;">
                <img style="height: 160px;" :src="Joinimg3">
              </div>
            </div>
            <div>
              <div style="float: left;height: 160px;margin-left: 14px;">
                <img style="height: 160px;" :src="Joinimg4">
              </div>
              <div style="float: right;height: 160px;">
                <img style="height: 160px;" :src="Joinimg5">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页尾 -->
    <div style="border-top:1px solid #DCDFE6;width: 1500px;margin:0 auto 0;height: 70px;">
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
      about1:'../../static/about1.jpg',
      about2:'../../static/about2.jpg',
      //时间轴相关数据
      Timelines:[      
      ],
      //加入我们展示图
      Joinimg1:'../../static/join_us_img1.jpg',
      Joinimg2:'../../static/join_us_img2.jpg',
      Joinimg3:'../../static/join_us_img3.jpg',
      Joinimg4:'../../static/join_us_img4.jpg',
      Joinimg5:'../../static/join_us_img5.jpg',
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
      //获取最新的时间轴信息
      getTimeAxisAtHome(){
        //设置必要参数
        var that = this;
        //请求时间轴信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getTimeAxisAtHome,{})
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            that.Timelines = res.data.RTDATA;
          }else{
            //异常结果显示
            that.$Global.error_Message(that,res.data.RTMSG);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err+'');
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
   //获取时间轴信息
    this.getTimeAxisAtHome();
  },
  mounted(){
    //页面加载后执行
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
