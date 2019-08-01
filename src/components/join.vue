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
        <!-- 主题文字 -->
        <!-- <div style="width: 240px;float: left;margin: 0px;padding: 12px 0px 0px 0px;text-align: left;">
          <a :href="HomePageTextUrl" style="text-decoration: none;">
            <h3 style="color: #FFFFFF;font-size: 22px;">神经网络框架·蜂巢系统</h3>
          </a>
        </div> -->
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
          我们聘请了各种技术和非技术人才加入我们的团队。
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
          <font style="color: #606266;font-size: 1.15em;letter-spacing: 0.1em;font-weight: normal;">我们相信，一个高度创造性，多元化的人类一致工作，最好的结果是不合理的。</font>
        </h3>
        <h3>
          <font style="color: #606266;font-size: 1em;letter-spacing: 0em;font-weight: normal;">蜂巢系统的使命是建立有利于人类的安全AGI，我们希望我们的团队能够代表世界。我们的团队包括不同国籍，年龄和社会经济背景的人。</font>
        </h3>
        <h3>
          <font style="color: #606266;font-size: 1em;letter-spacing: 0em;font-weight: normal;">我们非常重视潜在的经验。在蜂巢系统之前，我们的许多顶级贡献者都没有深入的学习经验 - 人们在学习所需的技能的同时还在执行有用的工作。深度学习是一项团队运动，我们感谢那些非常体贴和善良的人。</font>
        </h3>
      </div>
    </div>
    <!-- 图片&说明 -->
    <div style="width: 1500px;height: 466px;margin: 0 auto 0;border-top:1px solid #DCDFE6;clear: both;margin-top: 70px;">
      <div style="width: 466px;height: 450px;margin: 20px 50px 0px 0px;float: left;">
        <img :src="joinimgurl2" style="width: 466px;clear: both;">
        <h3 style="margin: 10px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1em;font-weight: normal;">如果您想进行软件工程，例如构建我们的基础架构，改进机器人界面或编写Dota管道，则无需任何机器学习经验。申请我们的技术职位。</font>
        </h3>
      </div>
      <div style="width: 466px;height: 450px;margin: 20px 50px 0px 0px;float: left;">
        <img :src="joinimgurl3" style="width: 466px;clear: both;">
        <h3 style="margin: 10px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1em;font-weight: normal;">如果您想深入学习，请查看我们的研究员，实习生和学者计划。我们正在寻找想要在6-18个月内学会成为核心ML贡献者的人，并且我们构建您的工作，以便您在ML中成长的每一步都做有用的工作。</font>
        </h3>
      </div>
      <div style="width: 466px;height: 450px;margin: 20px 0px 0px 0px;float: right;">
        <img :src="joinimgurl4" style="width: 466px;clear: both;">
        <h3 style="margin: 10px 0px 0px 0px;">
          <font style="color: #606266;font-size: 1em;font-weight: normal;">如果您已经深入学习，请申请我们的研究工程师或研究科学家  职位。</font>
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
          <font style="font-weight: normal;">OpenAI的人们非常关心以有益于人类的方式建立人工智能。</font>
        </h3>
        <h3>
          <font>目标导向:</font>
          <font style="font-weight: normal;">我们快速而有意地采取行动，以平衡研究和工程目标。</font>
        </h3>
        <h3>
          <font>协作:</font>
          <font style="font-weight: normal;">我们的许多最大进步源于多个团队的工作。</font>
        </h3>
        <h3>
          <font>反思:</font>
          <font style="font-weight: normal;">建立具有影响社会潜力的强大技术需要深入思考和讨论。</font>
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
          <font style="font-weight: normal;">为您和您的家人提供全面的健康，牙科和视力保障</font>
        </h3>
        <h3>
          <font style="font-weight: normal;">无限时间休假（我们鼓励4周以上的假期）</font>
        </h3>
        <h3>
          <font style="font-weight: normal;">新父母的竞争假</font>
        </h3>
        <h3>
          <font style="font-weight: normal;">每天午餐和晚餐</font>
        </h3>
        <h3>
          <font style="font-weight: normal;">灵活的工作时间</font>
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
            <div v-for="notice in Notices">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                  <a :href="notice.url" style="text-decoration:none;" target="view_window">
                    <div style="width: 100%;height: auto;">
                      <div>
                        <b style="color: #303133;font-size: 0.85em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;">{{ notice.title }}</b>
                        <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0;font-weight: normal;float: right;">{{notice.date}} & {{ notice.place }}</b>
                      </div>
                      <div>
                        <font style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0;font-weight: normal;">
                          {{ notice.text }}
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
      //加入我们-图片url
      joinimgurl1:'../../static/join_us_img1.jpg',
      joinimgurl2:'../../static/join_us_img2.jpg',
      joinimgurl3:'../../static/join_us_img3.jpg',
      joinimgurl4:'../../static/join_us_img4.jpg',
      joinimgurl5:'../../static/join_us_img5.jpg',
      //职位展示
      Notices: [
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
        { date:'2019-07-21',title:'java工程师',text: '技术人员',url: '',place:'不限制地区'},
      ],
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
      GitHubPagerl:'https://github.com/congfeng12'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
