<template>
  <div style="width: 100%;height: auto;">
    <!-- 上半部分 -->
    <div style="width: 100%;background-color: #e1e1d5;">
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
        <div style="width: 1200px;height: 630px;margin: 0 auto 0;">
          <el-card body-style="padding:13px;" style="width: 449px;float: left;">
            <img :src="charterimgurl" style="width: 423px;">
          </el-card>
          <!-- 标题及文字 -->
          <div style="width: 730px;height: 593px;float: right;">
            <h1 style="font-size: 40px;margin: 0px 0px 15px 0px;">蜂巢系统·宪章</h1>
            <b style="color: #606266;letter-spacing: 0.2em;font-size: 16px;">
            我们发布了蜂巢系统宪章，并在其中描述了我们履行蜂巢系统使命的原则。这份宪章包含了许多我们实践的重要原则，它是蜂巢系统内外许多人不断完善蜂巢系统能发展战略的努力的结晶。我们的所有开发的相关服务都将遵从这一宪章。
            </b>
            <p></p>
            <div style="margin-top: 390px;color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;">2019年7月26日</div>
            <div style="color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;">6分钟阅读</div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <!-- 宪章内容 -->
      <div style="width: 720px;height: auto;margin: 0 auto 0;">
        <!-- 按钮 -->
        <div style="width: 204px;height: auto;margin: 0 auto 0;margin-top: 30px;">
          <el-radio-group v-model="tabPosition" fill="#e6f3f3" text-color="#606266" style="margin-bottom: 30px;" @change="switchs">
            <el-radio-button label="cn">中&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp文</el-radio-button>
            <el-radio-button label="en">ENGLISH</el-radio-button>
          </el-radio-group>
        </div>
        <!-- 内容 -->
        <div style="width: 100%;height: auto;">
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;">
            {{chartermsg[0]}}
          </div>
          <div style="font-size: 1.2em;letter-spacing: 0.02em;font-weight: bolder;margin-top: 40px;">
            {{chartermsg[1]}}
          </div>
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;margin-top: 15px;">
            {{chartermsg[2]}}
          </div>
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;margin-top: 15px;">
            {{chartermsg[3]}}
          </div>
          <div style="font-size: 1.2em;letter-spacing: 0.02em;font-weight: bolder;margin-top: 40px;">
            {{chartermsg[4]}}
          </div>
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;margin-top: 15px;">
            {{chartermsg[5]}}
          </div>
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;margin-top: 15px;">
            {{chartermsg[6]}}
          </div>
          <div style="font-size: 1.2em;letter-spacing: 0.02em;font-weight: bolder;margin-top: 40px;">
            {{chartermsg[7]}}
          </div>
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;margin-top: 15px;">
            {{chartermsg[8]}}
          </div>
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;margin-top: 15px;">
            {{chartermsg[9]}}
          </div>
          <div style="font-size: 1.2em;letter-spacing: 0.02em;font-weight: bolder;margin-top: 40px;">
            {{chartermsg[10]}}
          </div>
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;margin-top: 15px;">
            {{chartermsg[11]}}
          </div>
          <div style="color: #606266;letter-spacing: 0.02em;font-size: 16px;margin-top: 15px;">
            {{chartermsg[12]}}
          </div>
        </div>
      </div>
    <!-- 简介列表 -->
    <div style="width: 1200px;height: auto;margin: 0 auto 0;padding: 100px 0px 10px 0px;">
       <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <div v-for="synopsi in synopsis">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                    <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;margin-right: 165px;">{{ synopsi.title }}</b>
                    <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2;font-weight: normal;line-height: 1.4;">{{ synopsi.msg }}</b>
                </li>
            </div>
          </ol>
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
      //标签初始化位置
      tabPosition: 'cn',
      //宪章内容
      chartermsg:
      [
        '蜂巢系统是个人服务网站，主要用于开发有趣的相关服务程序，或者有助程序开发的优化工具。 我们希望能开发出符合需求的服务或者工具，并且帮助其他个人或组织机构优化程序。位列达到这个目标，我们制定了如下原则：',
        '广泛造福社会',
        '我们承诺在通用服务和工具的开发过程中，保证程序是用于帮助个人或组织机构优化程序，并且服务及工具的应用都无损人类。',
        '我们的首要任务是对人类文明负责。我们预计需要调用大量资源来完成这一使命。同时，我们会积极行动以减少开发者和利益相关者间的利益冲突，确保大多数人可以受益。',

        '关注长远安全问题',
        '蜂巢系统致力于确保服务和工具，我们力求将所有服务和工具研究项目的广泛应用。',
        '我们担心在开发的过程中将会产生激烈的竞争，导致缺乏充足时间验证程序的安全性。因此，如果有人附和有益于人类价值的项目启动，并注重安全的项目领先我们，我们将协助其完成这个项目，我们会针对个别情况设计具体的合作方案。',

        '引领技术研究',
        '为了能有效的促进通用程序对社会的正面影响。蜂巢系统将权力开发程序，并且致力于站在技术研究的前沿。',
        '我们相信程序对社会的正面影响，蜂巢系统希望在附和我们的使命和专长的同时可以努力保持领先地位。',

        '保持合作意愿',
        '我们会和其它研究机构以及政策制定机构积极合作。我们希望可以建立一个国际化的社区。',
        '我们将会将确认安全的程序进行开源，让全球所有的相关工作人员受益，并且我们希望可以和全球的任何程序研发人员合作一起开发安全、高效、易于使用的程序。'
      ],
      //宪章表格内容
      synopsis:[
        {title:'宪章作者',msg:'CMAPLE'},
        {title:'宪章翻译',msg:'EMMA'},
        {title:'封面作者',msg:'未知'}
      ],
      //宪章标题配图
      charterimgurl:'../../static/charterlogo.jpg',
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
  },methods: {
    //切换语言类型
    switchs() {
        if ('cn' == this.tabPosition ) {
          this.chartermsg = 
          [
            '蜂巢系统是个人服务网站，主要用于开发有趣的相关服务程序，或者有助程序开发的优化工具。 我们希望能开发出符合需求的服务或者工具，并且帮助其他个人或组织机构优化程序。位列达到这个目标，我们制定了如下原则：',
            '广泛造福社会',
            '我们承诺在通用服务和工具的开发过程中，保证程序是用于帮助个人或组织机构优化程序，并且服务及工具的应用都无损人类。',
            '我们的首要任务是对人类文明负责。我们预计需要调用大量资源来完成这一使命。同时，我们会积极行动以减少开发者和利益相关者间的利益冲突，确保大多数人可以受益。',

            '关注长远安全问题',
            '蜂巢系统致力于确保服务和工具，我们力求将所有服务和工具研究项目的广泛应用。',
            '我们担心在开发的过程中将会产生激烈的竞争，导致缺乏充足时间验证程序的安全性。因此，如果有人附和有益于人类价值的项目启动，并注重安全的项目领先我们，我们将协助其完成这个项目，我们会针对个别情况设计具体的合作方案。',

            '引领技术研究',
            '为了能有效的促进通用程序对社会的正面影响。蜂巢系统将权力开发程序，并且致力于站在技术研究的前沿。',
            '我们相信程序对社会的正面影响，蜂巢系统希望在附和我们的使命和专长的同时可以努力保持领先地位。',

            '保持合作意愿',
            '我们会和其它研究机构以及政策制定机构积极合作。我们希望可以建立一个国际化的社区。',
            '我们将会将确认安全的程序进行开源，让全球所有的相关工作人员受益，并且我们希望可以和全球的任何程序研发人员合作一起开发安全、高效、易于使用的程序。'
          ]
        }else{
          this.chartermsg = 
          [
            'Honeycomb system is a personal service website, which is mainly used to develop interesting related service programs or optimization tools that help program development. We want to develop services or tools that meet your needs and help other individuals or organizations optimize their processes. To achieve this goal, we have formulated the following principles:',
            'Broadly benefit society',
            'We promise that in the development of general services and tools, the program is used to help individuals or organizations optimize the program, and the application of services and tools is not harmful to humans.',
            'Our priority is to be responsible for human civilization. We anticipate that significant resources will be required to accomplish this mission. At the same time, we will proactively reduce conflicts of interest between developers and stakeholders, and ensure that most people can benefit.',

            'Focus on long-term security issues',
            'Honeycomb System is committed to ensuring services and tools, and we strive to apply a wide range of services and tools research projects.',
            'We are concerned that fierce competition will occur during the development process, resulting in a lack of sufficient time to verify the security of the program. Therefore, if someone echoes the start of a project that is good for human value, and the safety-oriented project leads us, we will assist them to complete this project, and we will design specific cooperation programs for individual cases.',

            'Leading technology research',
            'In order to effectively promote the positive impact of common procedures on society. The hive system will develop programs and is committed to staying at the forefront of technological research.',
            'We believe that the process has a positive impact on society, and the hive system hopes to complement our mission and expertise while trying to stay ahead.',
            
            'Keep the willingness to cooperate',
            'We work actively with other research institutions and policy-makers. We hope to build an international community.',
            'We will open source the programs that are safe to benefit all relevant staff around the world, and we hope to work with any program developer worldwide to develop safe, efficient and easy-to-use programs.'
          ]
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
