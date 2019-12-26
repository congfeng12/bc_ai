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
    <!-- 标题位 -->
    <div style="width: 1500px;height: 500px;margin: 0 auto 0;">
      <!-- 文字 -->
      <div style="width: 600px;height: auto;float: left;">
        <h3 style="margin: 0px 0px 10px 0px;font-size: 1.7em;">
          <font>加入蜂巢系统</font>
        </h3>
        <font style="color: #606266;font-size: 1.2em;letter-spacing: 0.15em;">
          我们希望各种技术和非技术人才加入我们的团队。
        </font>
      </div>
      <!-- 图片 -->
      <div style="float: right;width: 720px;height: auto;">
        <img :src="joinimgurl1" style="width: 720px;">
      </div>
    </div>
    <!-- 说明 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;border-top:1px solid #DCDFE6;clear: both;margin-top: 70px;">
      <div style="width: 750px;height: auto;margin: 0 auto 0;">
        <h3 style="margin: 40px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1.15em;letter-spacing: 0.1em;font-weight: normal;">我们相信，一个高度创造性，多元化的团队，将会发挥出巨大的能量。</font>
        </h3>
        <h3>
          <font style="color: #606266;font-size: 1em;letter-spacing: 0em;font-weight: normal;">蜂巢系统的使命是创造对社会有帮助的程序，我们希望我们的团队能够代表世界。我们的团队包括不同国籍，年龄和社会经济背景的人。</font>
        </h3>
        <h3>
          <font style="color: #606266;font-size: 1em;letter-spacing: 0em;font-weight: normal;">我们非常重视潜在的经验。在蜂巢系统之前，我们的许多顶级贡献者都没有深入的学习经验 - 人们在学习所需的技能的同时还在执行各自的工作。共同开发程序是一件有趣的事情，我们感谢那些参加进来的人。</font>
        </h3>
      </div>
    </div>
    <!-- 图片&说明 -->
    <div style="width: 1500px;height: 466px;margin: 0 auto 0;border-top:1px solid #DCDFE6;clear: both;margin-top: 70px;">
      <div style="width: 466px;height: 450px;margin: 20px 50px 0px 0px;float: left;">
        <img :src="joinimgurl2" style="width: 466px;clear: both;">
        <h3 style="margin: 10px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1em;font-weight: normal;">如果您想进行软件工程，例如构建我们的基础架构，只需要懂得基础就可以申请我们的技术职位，我们将分享我们的学习经验，可以让你早日进入到开发行列。</font>
        </h3>
      </div>
      <div style="width: 466px;height: 450px;margin: 20px 50px 0px 0px;float: left;">
        <img :src="joinimgurl3" style="width: 466px;clear: both;">
        <h3 style="margin: 10px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1em;font-weight: normal;">如果您想深入学习，请查看我们的学习计划。我们正在寻找想要在6-18个月内学会成为核心贡献者的人，并且我们将提供给您相关目标，以便您在开发过程中每一步都可以是有意义的。</font>
        </h3>
      </div>
      <div style="width: 466px;height: 450px;margin: 20px 0px 0px 0px;float: right;">
        <img :src="joinimgurl4" style="width: 466px;clear: both;">
        <h3 style="margin: 10px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1em;font-weight: normal;">如果您已经深入学习，请申请我们的研究员职位，我们将共同解决有难度的相关目标。</font>
        </h3>
      </div>
    </div>
    <!-- 文化&优点 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;border-top:1px solid #DCDFE6;clear: both;margin-top: 70px;">
      <div style="width: 750px;height: auto;margin: 0 auto 0;margin-top: 50px;">
        <h3>
          <font style="font-size: 1.7em;">文化</font>
        </h3>
        <font>我们的文化始终在不断发展，我们相信新人能够而且应该改变我们的运营方式和价值。一些反复出现的主题脱颖而出：</font>
        <h3>
          <font>任务驱动:</font>
          <font style="font-weight: normal;">蜂巢系统的参与者特别关心有益于对社会有正面影响的程序开发</font>
        </h3>
        <h3>
          <font>目标导向:</font>
          <font style="font-weight: normal;">我们将快速的针对目标采取行动，以在最短的时间内完成我们的开发目标。</font>
        </h3>
        <h3>
          <font>协作:</font>
          <font style="font-weight: normal;">我们将与很多个人和团队达成合作。</font>
        </h3>
        <h3>
          <font>反思:</font>
          <font style="font-weight: normal;">我们将对我们的工作进行反复的检查和反思，这样有助于我们在新的工作开展的时候吸取经验。</font>
        </h3>
        <h3>
          <font>成长心态:</font>
          <font style="font-weight: normal;">我们相信反馈的力量，并鼓励持续学习和成长的心态。</font>
        </h3>
      </div>
      <img :src="joinimgurl5" style="width: 100%;margin-top: 50px;">
      <div style="width: 750px;height: auto;margin: 0 auto 0;margin-top: 60px;">
        <h3>
          <font style="font-size: 1.7em;">优点</font>
        </h3>
        <h3>
          <font style="font-weight: normal;">我们将为参与者提供完整的学习计划和目标</font>
        </h3>
        <h3>
          <font style="font-weight: normal;">你们的所有贡献将会署上你们自己的名字，但是请保持程序开源</font>
        </h3>
        <h3>
          <font style="font-weight: normal;">我们不会占用你们的工作时间，只需要在工作之余进行即可</font>
        </h3>
        <h3>
          <font style="font-weight: normal;">参与进来也将让你在工作和兴趣上有更大的进步</font>
        </h3>
      </div>
    </div>
    <!-- 空缺职位 -->
    <div style="width: 1500px;height: auto;margin: 0 auto 0;border-top:1px solid #DCDFE6;clear: both;margin-top: 70px;margin-bottom: 70px;">
      <div style="width: 750px;height: auto;margin: 0 auto 0;margin-top: 50px;">
        <!-- 标题 -->
         <h3>
          <font style="font-size: 1.7em;">空缺职位</font>
        </h3>
        <!-- 遍历职位 -->
        <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <div v-for="work in Works">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                  <a :href="work.url" style="text-decoration:none;" target="view_window">
                    <div style="width: 100%;height: auto;">
                      <div>
                        <b style="color: #303133;font-size: 0.85em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;">{{ work.title }}</b>
                        <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0;font-weight: normal;float: right;">{{work.date}} & {{ work.place }}</b>
                      </div>
                      <div>
                        <font style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0;font-weight: normal;">
                          {{ work.type }}&{{ work.nature }}
                        </font>
                        <font style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0;font-weight: normal;float: right;">
                          需要 {{ work.need }} 人
                        </font>
                      </div>
                    </div>
                  </a> 
                </li>
            </div>
          </ol>
      </div>
    </div>
    <!-- 页尾 -->
    <div style="border-top:1px solid #DCDFE6;width: 1500px;margin:0 auto 0;height: 70px;clear: both;">
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
      //加入我们-图片url
      joinimgurl1:'../../static/join_us_img1.jpg',
      joinimgurl2:'../../static/join_us_img2.jpg',
      joinimgurl3:'../../static/join_us_img3.jpg',
      joinimgurl4:'../../static/join_us_img4.jpg',
      joinimgurl5:'../../static/join_us_img5.jpg',
      //职位展示
      Works: [
        //{ date:'2019-07-21',title:'java工程师',type: '技术人员',nature: '研究员' ,need:10 ,url: '/jobdescription',place:'不限制地区'},
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
      //获取最新的岗位信息
      getWorkDescOrderBy(){
        //设置必要参数
        var that = this;
        //请求岗位信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getWorkDescOrderBy,{})
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理岗位信息
            for (var i = 0; i < res.data.RTDATA.length; ++i) {
              var c_Works = new Object();
              c_Works.id=res.data.RTDATA[i].id;
              c_Works.url='/jobdescription?id='+res.data.RTDATA[i].id;
              c_Works.title=res.data.RTDATA[i].title;
              c_Works.place=res.data.RTDATA[i].place;
              c_Works.type=res.data.RTDATA[i].type;
              c_Works.nature=res.data.RTDATA[i].nature;
              c_Works.date=res.data.RTDATA[i].creatdate;
              c_Works.need=res.data.RTDATA[i].need;
              that.Works.push(c_Works);
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
    //获取岗位信息
    this.getWorkDescOrderBy();
  },
  mounted(){
    //页面加载后执行
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
