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
            <b style="color: #606266;letter-spacing: 0.2em;font-size: 16px;">我们发布了蜂巢系统纲领，并在其中描述了我们履行蜂巢系统使命的原则。这份宣言包含了许多我们实践的重要原则，它是蜂巢系统内外许多人在两年里不断完善人工智能发展战略的努力的结晶。达成通用人工智能的时间表仍具有很大的不确定性，但这份纲领将指导我们在整个开发过程中致力于为人类的最佳利益行事。</b>
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
      //标签初始化位置
      tabPosition: 'cn',
      //宪章内容
      chartermsg:[
        'OpenAI的使命是确保通用人工智能 (Artificial General Intelligence, AGI)，即一种高度自主且在大多数具有经济价值的工作上超越人类的系统，将为全人类带来福祉。我们不仅希望直接建造出安全的、符合共同利益的通用人工智能，而且愿意帮助其它研究机构共同建造出这样的通用人工智能以达成我们的使命。为了达到这个目标，我们制订了如下原则：',
        '广泛造福社会',
        '我们承诺在通用人工智能的开发过程中，将利用所有可获得的影响力，确保它可以造福全人类。我们将避免把人工智能或通用人工智能的技术置于损害人类或过度集中权力的事业中。',
        '我们的首要任务是对人类文明负责。我们预计需要调用大量资源来完成这一使命。同时，我们会积极行动以减少雇员和利益相关者间的利益冲突，确保大多数人可以受益。',
        '关注长远安全问题',
        'OpenAI致力于进行能够确保通用人工智能安全的研究。我们力求在整个人工智能研究领域内推动这类研究项目的广泛应用。',
        '我们担心通用人工智能在发展后期将演变成一场激烈的竞赛，导致缺乏充足的时间进行安全防范。因此，如果一个与人类价值观相符、注重安全的项目领先于我们将近达成通用人工智能，我们承诺将停止竞赛，幷转而协助这个项目。我们会针对个别情况设计具体的合作方案。不过，一个典型的触发条件可能会是「这个项目在未来两年内能够成功研发通用人工智能的概率超过一半」。',
        '引领技术研究',
        '为了能有效地促进通用人工智能对社会的正面影响，OpenAI必须站在人工智能技术研究的前沿。我们认为仅做政策和安全性的倡导是过于单薄的。',
        '我们相信人工智能在达成通用人工智能之前便会产生广泛的社会影响。OpenAI希望在符合我们的使命和专长的领域中努力保持领先地位。',
        '保持合作意愿',
        '我们会和其它研究机构以及政策制定机构积极合作。我们希望可以建立一个国际化的社区，共同应对通用人工智能的全球性挑战。',
        '我们致力于研发公共物品，以帮助社会走向与通用人工智能共处的时代。目前这包括公开发表大多数的人工智能研究成果。OpenAI预料未来对安全和安保的考虑将会使我们减少发表传统的研究成果，而更注重分享安全、政策和标准化相关的研究。'
      ],
      //宪章表格内容
      synopsis:[
        {title:'宪章作者',msg:'CMAPLE'},
        {title:'宪章翻译',msg:'EMMA'},
        {title:'封面作者',msg:'未知'}
      ],
      //宪章标题配图
      charterimgurl:'../../static/charterlogo.jpg',
      //加入我们展示图
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
  },
  created(){
    //页面加载时执行

  },methods: {
    //切换语言类型
    switchs() {
        console.log(1111111);
        if ('cn' == this.tabPosition ) {
          this.chartermsg = 
          [
            'OpenAI的使命是确保通用人工智能 (Artificial General Intelligence, AGI)，即一种高度自主且在大多数具有经济价值的工作上超越人类的系统，将为全人类带来福祉。我们不仅希望直接建造出安全的、符合共同利益的通用人工智能，而且愿意帮助其它研究机构共同建造出这样的通用人工智能以达成我们的使命。为了达到这个目标，我们制订了如下原则：',
            '广泛造福社会',
            '我们承诺在通用人工智能的开发过程中，将利用所有可获得的影响力，确保它可以造福全人类。我们将避免把人工智能或通用人工智能的技术置于损害人类或过度集中权力的事业中。',
            '我们的首要任务是对人类文明负责。我们预计需要调用大量资源来完成这一使命。同时，我们会积极行动以减少雇员和利益相关者间的利益冲突，确保大多数人可以受益。',
            '关注长远安全问题',
            'OpenAI致力于进行能够确保通用人工智能安全的研究。我们力求在整个人工智能研究领域内推动这类研究项目的广泛应用。',
            '我们担心通用人工智能在发展后期将演变成一场激烈的竞赛，导致缺乏充足的时间进行安全防范。因此，如果一个与人类价值观相符、注重安全的项目领先于我们将近达成通用人工智能，我们承诺将停止竞赛，幷转而协助这个项目。我们会针对个别情况设计具体的合作方案。不过，一个典型的触发条件可能会是「这个项目在未来两年内能够成功研发通用人工智能的概率超过一半」。',
            '引领技术研究',
            '为了能有效地促进通用人工智能对社会的正面影响，OpenAI必须站在人工智能技术研究的前沿。我们认为仅做政策和安全性的倡导是过于单薄的。',
            '我们相信人工智能在达成通用人工智能之前便会产生广泛的社会影响。OpenAI希望在符合我们的使命和专长的领域中努力保持领先地位。',
            '保持合作意愿',
            '我们会和其它研究机构以及政策制定机构积极合作。我们希望可以建立一个国际化的社区，共同应对通用人工智能的全球性挑战。',
            '我们致力于研发公共物品，以帮助社会走向与通用人工智能共处的时代。目前这包括公开发表大多数的人工智能研究成果。OpenAI预料未来对安全和安保的考虑将会使我们减少发表传统的研究成果，而更注重分享安全、政策和标准化相关的研究。'
          ]
        }else{
          this.chartermsg = 
          [
            'OpenAI’s mission is to ensure that artificial general intelligence (AGI)—by which we mean highly autonomous systems that outperform humans at most economically valuable work—benefits all of humanity. We will attempt to directly build safe and beneficial AGI, but will also consider our mission fulfilled if our work aids others to achieve this outcome. To that end, we commit to the following principles:',
            'Broadly Distributed Benefits',
            'We commit to use any influence we obtain over AGI’s deployment to ensure it is used for the benefit of all, and to avoid enabling uses of AI or AGI that harm humanity or unduly concentrate power.',
            'Our primary fiduciary duty is to humanity. We anticipate needing to marshal substantial resources to fulfill our mission, but will always diligently act to minimize conflicts of interest among our employees and stakeholders that could compromise broad benefit.',
            'Long-Term Safety',
            'We are committed to doing the research required to make AGI safe, and to driving the broad adoption of such research across the AI community.',
            'We are concerned about late-stage AGI development becoming a competitive race without time for adequate safety precautions. Therefore, if a value-aligned, safety-conscious project comes close to building AGI before we do, we commit to stop competing with and start assisting this project. We will work out specifics in case-by-case agreements, but a typical triggering condition might be “a better-than-even chance of success in the next two years.”',
            'Technical Leadership',
            'To be effective at addressing AGI’s impact on society, OpenAI must be on the cutting edge of AI capabilities—policy and safety advocacy alone would be insufficient.',
            'We believe that AI will have broad societal impact before AGI, and we’ll strive to lead in those areas that are directly aligned with our mission and expertise.',
            'Cooperative Orientation',
            'We will actively cooperate with other research and policy institutions; we seek to create a global community working together to address AGI’s global challenges.',
            'We are committed to providing public goods that help society navigate the path to AGI. Today this includes publishing most of our AI research, but we expect that safety and security concerns will reduce our traditional publishing in the future, while increasing the importance of sharing safety, policy, and standards research.'
          ]
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
