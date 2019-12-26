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
      <h1>公告</h1>
    </div>
    <!-- 公告列表 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;" id="vue_global_api">
      <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <div v-for="notice in Notices">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%;overflow: hidden;clear: both;position: relative;">
                  <a :href="notice.url" style="text-decoration:none;width: 1500px;height: 100%;" target="view_window">
                    <div>
                      <div  style="width: 1500px;float: left;display: flex;flex-direction: column;justify-content:space-between;">
                        <div>
                          <b style="color: #303133;font-size: 1em;letter-spacing: 0;line-height: 1.4;margin: 0px;font-weight:900;">{{ notice.title }}</b>
                          <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bold;text-transform: uppercase;float: right;">{{ notice.date }}</b>
                          <p style="color: #303133;font-size: 0.9em;letter-spacing: 0.15em;font-family:Hiragino Sans GB;width: 1000px;">{{notice.synopsis}}</p>
                        </div>
                      </div>
                    </div>
                  
                  <p></p>
                  <div style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bold;text-transform: uppercase;">
                    {{notice.readtime}}分钟阅读
                  </div>
                  </a>
                </li>
            </div>
          </ol>
          <!-- 分页按钮 -->
          <div style="margin-top: 20px;">
             <el-pagination
            :page-size="20"
            :pager-count="11"
            @current-change="pageChange"
            :current-page="pagenum"
            layout="prev, pager, next"
            :total="total">
            </el-pagination>
          </div>
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
      //公告列表
      Notices: [
      ],
      total:0,
      pagenum:1,
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
      //获取最新的公告信息
      getAnnouncementDescOrderBy(){
        //设置必要参数
        var that = this;
        //初始化参数
        that.Notices = [];
        that.total = 0;
        //请求公告信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getAnnouncementDescOrderBy,this.$qs.stringify({
           page:this.pagenum
        }))
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理公告信息
            for (var i = 0; i < res.data.RTDATA.data.length; ++i) {
              var c_Notices = new Object();
              c_Notices.id=res.data.RTDATA.data[i].id;
              c_Notices.title=res.data.RTDATA.data[i].title;
              c_Notices.synopsis=res.data.RTDATA.data[i].synopsis;
              c_Notices.date=res.data.RTDATA.data[i].creattime;
              c_Notices.readtime=res.data.RTDATA.data[i].readtime;
              c_Notices.url='/announcement?id='+res.data.RTDATA.data[i].id;
              that.Notices.push(c_Notices);
            }
            that.total = res.data.RTDATA.total;
          }else{
            //异常结果显示
            that.error_Message(res.data.RTMSG);
          }
        })
        .catch(function(err){
          console.log(err);
        });
        this.Notices = that.Notices;
      }, 
      pageChange(val){
       this.pagenum = val;
       this.getAnnouncementDescOrderBy();
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
    //获取公告信息
    this.getAnnouncementDescOrderBy();
  },
  mounted(){
    //页面加载后执行
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
