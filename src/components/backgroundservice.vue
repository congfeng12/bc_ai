<template>
  <div style="height: 100%;">
    <!-- 上半部分 -->
    <div style="width: 100%;background-color: #cee5f0;">
     <!--  <img src="../jpg/background.png">  -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;margin-bottom: 10px;">
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
        <div style="width: 750px;height: 600px;margin: 0 auto 0;">
          <!-- 标题及文字 -->
          <div style="width: 750px;height: 600px;margin: 0 auto 0;position: relative;float: left;">
            <div style="position: relative;height: 60px;">
              <img src="../../static/code.png" style="width: 60px;position: absolute;">
              <h1 style="font-size: 40px;margin: 0px 0px 0px 0px;position: absolute;left: 70px;bottom: 0px;">{{name}}</h1>
              <h1 style="font-size: 30px;margin: 0px 0px 8px 0px;padding: 0px;position: absolute;right: 80px;bottom: 0px;color: #2aa515;" v-if="servicestate === 'run'">线上服务正常</h1>
              <h1 style="font-size: 30px;margin: 0px 0px 5px 0px;padding: 0px;position: absolute;right: 80px;bottom: 0px;color: #ea9518;" v-else-if="servicestate ==='lock'">线上服务锁定</h1>
              <h1 style="font-size: 30px;margin: 0px 0px 8px 0px;padding: 0px;position: absolute;right: 80px;bottom: 0px;color: #d81e06;" v-else>线上服务异常</h1>
              <img src="../../static/service_run.png" v-if="servicestate === 'run'" style="width: 60px;position: absolute;right: 0px;bottom: 0px;">
              <img src="../../static/service_lock.png" v-else-if="servicestate ==='lock'" style="width: 60px;position: absolute;right: 0px;bottom: 0px;">
              <img src="../../static/service_error.png" v-else style="width: 60px;position: absolute;right: 0px;bottom: 0px;">
            </div>
            <h1 style="color: #303133;font-size: 25px;margin: 10px 0px 15px 0px;font-weight: normal;">服务编号：{{serviceid}}</h1>
            <b style="color: #606266;letter-spacing: 0.2em;font-size: 16px;font-weight: bolder;">{{synopsis}}</b>
            <p></p>
            <div style="position: absolute;bottom: 80px;">
              <p style="color:#303133;text-decoration: none;font-size: 14px;letter-spacing: 0.2em;font-weight: bolder;margin:0px 0px 6px 0px;">版本：{{version}}</p>
              <p style="color:#303133;text-decoration: none;font-size: 14px;letter-spacing: 0.2em;font-weight: bolder;margin:0px 0px 6px 0px;">编程语言：{{proglanguage}}</p>
              <p style="color:#303133;text-decoration: none;font-size: 14px;letter-spacing: 0.2em;font-weight: bolder;margin:0px 0px 6px 0px;">服务大小：{{size}}</p>
              <p style="color:#303133;text-decoration: none;font-size: 14px;letter-spacing: 0.2em;font-weight: bolder;margin:0px 0px 6px 0px;">接口类型：{{receivetype}}</p>
              <p style="color:#303133;text-decoration: none;font-size: 14px;letter-spacing: 0.2em;font-weight: bolder;margin:0px 0px 6px 0px;">请求接口：{{route}}</p>
              <p style="color:#303133;text-decoration: none;font-size: 14px;letter-spacing: 0.2em;font-weight: bolder;margin:0px 0px 6px 0px;">所在服务器：{{serverid}}</p>
            </div>
            <div style="position: absolute;bottom: 10px;">
              <p style="color:#606266;text-decoration: none;font-size: 14px;font-weight: bolder;margin:0px 0px 6px 0px;">
                <el-link type="primary">{{author}}</el-link>
              &nbsp&nbsp提供服务</p>
              <p style="color:#606266;text-decoration: none;font-size: 14px;font-weight: bolder;margin:0px 0px 6px 0px;">服务创建日期：{{createdate}}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <!-- 内容 -->
    <div v-html="content"></div>
    <!-- 按钮 -->
    <div style="width: 260px;margin: 0px auto 0px;margin: 0px auto 0px;padding-bottom: 80px">
      <el-button type="primary" plain>下载文档</el-button>
      <el-button type="info" plain>在GitHub上查看</el-button>
    </div>
    <!-- 页脚 -->
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
      //服务编号
      serviceid:'',
      //服务名称
      name:'',
      //服务简介
      synopsis:'',
      //服务版本
      version:'',
      //请求路径
      route:'',
      //服务大小
      size:'',
      //编程语言
      proglanguage:'',
      //服务提供者
      author:'',
      //接口类型
      receivetype:'',
      //服务创建时间
      createdate:'',
      //所在服务器编号
      serverid:'',
      //服务状态
      servicestate:'',
      //页面填充内容
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
      getBackgroundServicesById(){
        //设置必要参数
        var that = this;
        //请求里程碑信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getBackgroundServicesById,this.$qs.stringify({
           id:this.$route.query.id,
        }))
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理里程碑信息
            that.name = res.data.RTDATA.data.name;
            that.synopsis = res.data.RTDATA.data.synopsis;
            that.author = res.data.RTDATA.data.author;
            var c_creattime = res.data.RTDATA.data.createdate.split("-");
            that.createdate = c_creattime[0]+'年'+c_creattime[1]+'月'+c_creattime[2]+'日';
            that.serviceid = res.data.RTDATA.data.serviceid;
            that.version = res.data.RTDATA.data.version;
            that.route = res.data.RTDATA.data.route;
            that.size = res.data.RTDATA.data.size;
            that.proglanguage = res.data.RTDATA.data.proglanguage;
            that.receivetype = res.data.RTDATA.data.receivetype;
            that.serverid = res.data.RTDATA.data.serverid;
            that.servicestate = res.data.RTDATA.data.servicestate;
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
    this.getBackgroundServicesById();
  },
   mounted(){
    //页面加载后执行
    
  }

}
</script>

