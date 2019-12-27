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
    <!-- 文字说明 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;padding: 0px 0px 40px 0px;">
      <h1 style="font-size: 1.8em;letter-spacing: 0.1em;">进展</h1>
      <font style="font-size: 1.8em;font-family:Hiragino Sans GB;color: #303133;letter-spacing: 0.05em;">蜂巢致力于开发有趣的应用和服务。</font>
    </div>
    <!-- 锚点按钮 -->
    <!-- 里程碑发布 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;border-top:1px solid #DCDFE6;">
      <h6>
        <font style="font-size: 1.5em;letter-spacing: 0.1em;font-weight: normal;">里程碑发布</font>
      </h6>
        <el-row :gutter="11" style="margin-top: 30px;">
          <!-- 公告循环 -->
          <el-col v-for="progres in Progress" v-bind:key="progres.id" :span="6" >
            <a :href="progres.url" style="text-decoration: none;" target="view_window">
              <el-card :body-style="{ padding: '12px' }" shadow="always" style="margin-top: 10px;">
                <p style="margin: 5px 0px 30px 0px;font-weight: 700;">{{progres.title}}</p>
                <img style="width: 100%;" :src="progres.jpgurl">
            </el-card>
            </a>
          </el-col>
        </el-row>
    </div>
    <!-- 文章报告 -->
     <div style="width: 1500px;height: auto;margin: 0 auto 0;border-top:1px solid #DCDFE6;margin-top: 80px;">
       <h6>
        <font style="font-size: 1.5em;letter-spacing: 0.1em;font-weight: normal;">调查报告</font>
      </h6>
          <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <div v-for="report in Report">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                  <a :href="report.url" style="text-decoration:none;" target="view_window">
                    <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;margin-right: 175px;">{{ report.date }}</b>
                    <b style="color: #303133;font-size: 0.85em;letter-spacing: 0;font-weight: normal;line-height: 1.4;">{{ report.title }}</b>
                    <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;float: right;">{{ report.type }}</b>
                  </a> 
                </li>
            </div>
          </ol>
     </div>
    <!-- 页尾 -->
    <div style="border-top:1px solid #DCDFE6;width: 1500px;margin:0 auto 0;height: 70px;margin-top: 80px;">
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
      //公告展示
      Progress:[
        //{ id:1, url:'/milestone',text:'了解蜂巢',jpgurl:'../../static/notistest2.jpg'},
      ],
      //公告列表
      Report: [
        //{ date:'2019-07-21',title: '为什么负责人工智能开发需要安全合作',type:'强化学习',url: '/investigationreport'},
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
      //获取最新的里程碑信息
      getMilestoneDescOrderBy(){
        //设置必要参数
        var that = this;
        //请求里程碑信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getMilestoneDescOrderBy,{})
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理里程碑信息
            for (var i = 0; i < res.data.RTDATA.length; ++i) {
              var c_Progress = new Object();
              c_Progress.id=res.data.RTDATA.id;
              c_Progress.url='/milestone?id='+res.data.RTDATA[i].id;
              c_Progress.title=res.data.RTDATA[i].title;
              var c_imgurl = res.data.RTDATA[i].imgurl.split("/");
              var imgnum = c_imgurl.length-1;
              c_Progress.jpgurl='../../static/'+c_imgurl[imgnum];
              that.Progress.push(c_Progress);
            }
          }else{
            //异常结果显示
            that.$Global.error_Message(res.data.RTMSG);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err+'');
        });
      }, 
      //获取调查报告信息
      getReportDescOrderBy(){
        //设置必要参数
        var that = this;
        //请求调查报告
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getReportDescOrderBy,{})
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理调查报告信息
            for (var i = 0; i < res.data.RTDATA.length; ++i) {
              var c_Report = new Object();
              c_Report.id=res.data.RTDATA.id;
              c_Report.url='/investigationreport?id='+res.data.RTDATA[i].id;
              c_Report.title=res.data.RTDATA[i].title;
              c_Report.date=res.data.RTDATA[i].creatdate;
              c_Report.type=res.data.RTDATA[i].reporttype;
              that.Report.push(c_Report);
            }
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
    //获取程碑信息
    this.getMilestoneDescOrderBy();
    //获取调查报告信息
    this.getReportDescOrderBy();
  },
  mounted(){
    //页面加载后执行
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
