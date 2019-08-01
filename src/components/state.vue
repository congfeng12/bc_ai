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
        <font style="color: #606266;font-weight: normal;letter-spacing: 0.14em;">蜂巢系统的使命是确保人工一般智能对全人类都有益。我们是一个由100人组成的团队，总部设在加利福尼亚州旧金山。OpenAI宪章描述了在我们执行任务时指导我们的原则。</font>
      </h3>
      <el-button type="info" plain style="letter-spacing: 0.14em;">查看宪章&nbsp<i class="el-icon-arrow-right"></i></el-button>
      <h3 style="margin: 50px 0px 0px 0px;">
        <font style="font-size: 1.6em;">我们所做的</font>
      </h3>
      <h3 style="margin: 30px 0px 0px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">我们致力于AI能力，安全和政策，特别强调强化学习，机器人和生成模型。</font>
      </h3>
      <h3 style="margin: 30px 0px 0px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">我们最近的一些成果包括：</font>
      </h3>
      <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <div v-for="notice in Notices">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                  <a :href="notice.url" style="text-decoration:none;" target="view_window">
                    <div style="width: 100%;height: auto;">
                      <div>
                        <b style="color: #303133;font-size: 0.95em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">{{ notice.title }}</b>
                        <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0;font-weight: normal;float: right;">{{notice.date}}</b>
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
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">OpenAI由OpenAI Nonprofit董事会管理，该公司由OpenAI LP员工Greg Brockman（董事长兼首席技术官），Ilya Sutskever（首席科学家）和Sam Altman（首席执行官）以及非员工Adam D'Angelo，Holden Karnofsky， Reid Hoffman，Sue Yoon和Tasha McCauley。
        </font>
    </h3>
    <h3 style="margin: 30px 0px 20px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">页面参照OPEN AI官网进行制作。</font>
    </h3>
    <el-button type="info" plain style="letter-spacing: 0.14em;">访问OPEN AI&nbsp<i class="el-icon-arrow-right"></i></el-button>
    <h3 style="margin: 30px 0px 20px 0px;">
        <font style="font-size: 1.1em;color: #606266;font-weight: normal;letter-spacing: 0.05em;">任何问题？电子邮件：press@openai.com。</font>
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
          <b style="float: right;color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;padding-top: 6px;">@2019-2019 cmaple.cn</b>
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
      //职位展示
      Notices: [
        { date:'2019-07-21',title:'优化算法工具包',url: ''},
        { date:'2019-07-21',title:'BBTI-1',url: ''},
        { date:'2019-07-21',title:'IMGTI-1',url: ''},
        { date:'2019-07-21',title:'人工神经网络框架',url: ''},
      ],
      //首页导航url
      HomePageImgUrl:'/',
      HomePageTextUrl:'/',
      //关于
      AboutPageUrl:'/about',
      //进展
      ProgressPageUrl:'/progress',
      //资源
      ResourcesPagerl:'/resources',
      //公告
      NoticesPageUrl:'/notices',
      //加入我们
      JoinPageUrl:'/join',
      //宪章
      CharterPageUrl:'/charter',
      //声明
      StatePageUrl:'/state',
      //微信
      WeChartPageUrl:'',
      //github
      GitHubPagerl:'https://github.com/congfeng12',
      showtext:false
    }
  },
  created(){
    //页面加载时执行

  },
  mounted(){
    //页面加载后执行
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
