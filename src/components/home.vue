<template>
  <div style="width: 100%;height: auto;">
    <!-- 上半部分 -->
    <div style="width: 100%;background-image:url(../../static/background.jpg)">
     <!--  <img src="../jpg/background.png">  -->
    <div style="width: 1500px;height: 960px;margin: 0 auto 0;">
      <!-- 标题头 -->
      <div style="width: 100%;height: 98px;border-bottom:2px solid #FFFFFF;margin: 0px 0px 30px 0px;">
        <!-- 图标 -->
        <div style="float: left;width: 250px;">
          <a :href="HomePageImgUrl">
            <img src="../../static/logo.png" style="width: 70px;margin: 15px 0px 0px 0px;float: left;">
          </a>
        </div>
        <!-- 主题文字 -->
        <div style="width: 240px;float: left;margin: 0px;padding: 12px 0px 0px 0px;text-align: left;">
          <a :href="HomePageTextUrl" style="text-decoration: none;">
            <h3 style="color: #FFFFFF;font-size: 22px;">蜂巢系统·个人服务网站</h3>
          </a>
        </div>
        <!-- 标题栏按钮按钮 -->
        <div style="float: right;width: 307px;height: 30px;margin: 32px 0px 0px 0px;">
          <!-- 公告 -->
          <div style="float: right;padding: 4px 7px 0px 0px;">
            <a :href="NoticesPageUrl" style="text-decoration: none;">
              <font style="color: #FFFFFF;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">公告</font>
            </a>
          </div>
          <!-- 资源 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="ResourcesPagerl" style="text-decoration: none;">
              <font style="color: #FFFFFF;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">资源</font>
            </a>
          </div>
          <!-- 进展 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="ProgressPageUrl" style="text-decoration: none;">
              <font style="color: #FFFFFF;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">进展</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a :href="AboutPageUrl" style="text-decoration: none;">
              <font style="color: #FFFFFF;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">关于</font>
            </a>
          </div>
        </div>
      </div>
      <!-- 网页主要内容 -->
      <!-- 我的工作 -->
      <div style="width: 100%;height: 150px;border-bottom:0.5px solid #E4E7ED;">
        <div style="width: 250px;float: left;height: 80px;">
          <font style="margin: 10px 0px 0px 0px;color: #FFFFFF;font-size: 15px;padding-left: 10px;">我们的工作</font>
        </div>
        <!-- 主要内容 -->
        <div style="width: 800px;height: auto;float: left;">
          <!-- 大标题 -->
          <h1 style="margin: 0px 0px 30px 0px;">
            <font style="color: #FFFFFF;font-weight: normal !important;">发现并开发有趣的应用或者服务。</font>
          </h1>
          <!-- 学到更多 - 链接 -->
          <a  :href="AboutPageUrl" style="color:#FFFFFF;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;">了解更多&nbsp<i class="el-icon-arrow-right"></i></a>
        </div>
      </div>
      <!-- 最新发布 -->
      <div style="width: 100%;height: 600px;margin: 0px 0px 0px 0px;">
        <div style="width: 100%;margin: 0px 0px 0px 0px;padding: 15px 0px 0px 0px;margin: 0px 0px 20px 0px;">
          <font style="color: #FFFFFF;font-size: 15px;padding-left: 10px;">最新发布</font>
        </div>
        <el-row :gutter="11">
          <!-- 公告循环 -->
          <el-col v-for="progres in Progress" v-bind:key="progres.id" :span="6" >
            <a :href="progres.url" style="text-decoration: none;" target="_blank">
              <el-card :body-style="{ padding: '12px' }" shadow="always">
                <p style="margin: 5px 0px 30px 0px;font-weight: 700;">{{progres.title}}</p>
                <img style="width: 100%;" :src="progres.jpgurl">
            </el-card>
            </a>
          </el-col>
        </el-row>
        <div style="width: 100%;height: 30px;margin: 40px 0px 0px 0px;">
          <div style="width: 105px;margin: 0 auto 0;height: 30px;">
            <a :href="ProgressPageUrl" style="text-decoration: none;color:#FFFFFF;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;">
              查看进度&nbsp<i class="el-icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!--  -->
    <div style="width: 100%;">
      <div style="width: 962px;margin: 0 auto 0;height: auto;margin-top: 90px;">
        <h3>
          <font style="font-size: 27px;font-weight: normal;">
            蜂巢系统的使命是发现并开发有趣的应用或者服务。我们是一个完全有相同的目标组成的一个团队。我们没有固定的办公地点，只需要在有网络的地方我们就可以进行办公和沟通，这并不会打扰到你原来的工作。该【宪章】介绍了指导我们执行我们的任务的基本原则。
          </font>
        </h3>
        <p></p>
        <div style="margin-top: 35px;">
           <a :href="CharterPageUrl" style="text-decoration: none;color:#C0C4CC;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;">
              查看宪章&nbsp<i class="el-icon-arrow-right"></i>
           </a>
        </div>
      </div>
    </div>
    <!-- 公告列表 -->
    <div style="width: 100%;height: auto;margin-top: 80px;">
      <div style="width: 1500px;margin:0 auto 0;height: auto;">
          <b style="letter-spacing: 0.1em;font-size: 16px;font-weight: normal;">最近的公告文章</b>
          <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <div v-for="notice in Notices">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                  <a :href="notice.url" style="text-decoration:none;" target="_blank">
                    <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;margin-right: 115px;">{{ notice.date }}</b>
                    <b style="color: #303133;font-size: 0.85em;letter-spacing: 0;font-weight: normal;line-height: 1.4;">{{ notice.title }}</b>
                  </a> 
                </li>
            </div>
          </ol>
          <div style="width: 1500px;border-top:1px solid #DCDFE6;"></div>
          <p style="margin-top: 40px;"></p>
          <a :href="NoticesPageUrl" style="text-decoration: none;color:#C0C4CC;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;">
              查看更多&nbsp<i class="el-icon-arrow-right"></i>
          </a>
      </div>
    </div>
    <!-- 加入我们 -->
    <div style="width: 100%;height: auto;">
      <div style="width: 1500px;height: 380px;margin:0 auto 0;border-top:1px solid #DCDFE6;margin-top: 80px;">
        <!-- 加入我们 -->
        <div style="width: 470px;margin:0px;float: left;">
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
          <div style="float: left;height: 325px;width: 400px;margin-left: 40px;">
            <img style="height: 325px;" :src="Joinimg1">
          </div>
          <!-- 并列图片 -->
          <div style="float: right;height: 325px;width: 500px;">
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
        <a :href="GitHubPagerl" target="_blank">
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
          <!-- 公告 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="NoticesPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">公告</font>
            </a>
          </div>
          <!-- 宪章 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="CharterPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">宪章</font>
            </a>
          </div>
          <!-- 加入 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a :href="JoinPageUrl" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">加入</font>
            </a>
          </div>
          <!-- 声明 -->
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
    </el-dialog>  </div>
</template>
<script>
export default {
  data () {
    return {
      //微信弹窗属性
      WeChartVisible: false,
      //公告展示
      Progress:[
      ],
      //公告列表
      Notices: [
      ],
      //加入我们展示图
      Joinimg1:'../../static/join_us_img1.jpg',
      Joinimg2:'../../static/join_us_img2.jpg',
      Joinimg3:'../../static/join_us_img3.jpg',
      Joinimg4:'../../static/join_us_img4.jpg',
      Joinimg5:'../../static/join_us_img5.jpg',
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
      getMilestoneAtHome(){
        //设置必要参数
        var that = this;
        //请求里程碑信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getMilestoneAtHome,{})
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理里程碑信息
            for (var i = 0; i < res.data.RTDATA.length; ++i) {
              var c_Progress = new Object();
              c_Progress.id = res.data.RTDATA[i].id;
              c_Progress.title = res.data.RTDATA[i].title;
              c_Progress.url = '/milestone?id='+res.data.RTDATA[i].id;
              c_Progress.jpgurl = res.data.RTDATA[i].imgurl;//c_imgurl[imgnum];
              that.Progress.push(c_Progress);
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
      //主页获取公告列表
      getAnnouncementAtHome(){
        //设置必要参数
        var that = this;
        //请求公告信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getAnnouncementAtHome,{})
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理公告信息
            for (var i = 0; i < res.data.RTDATA.length; ++i) {
              var c_Notices = new Object();
              c_Notices.id = res.data.RTDATA[i].id;
              c_Notices.date = res.data.RTDATA[i].createtime;
              c_Notices.title = res.data.RTDATA[i].title;
              c_Notices.url = '/announcement?id='+res.data.RTDATA[i].id;
              that.Notices.push(c_Notices);
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
    //获取主页里程碑信息
    this.getMilestoneAtHome();
    //获取公告信息
    this.getAnnouncementAtHome();
  },
  mounted(){
    //页面加载后执行
     
  }

}
</script>
