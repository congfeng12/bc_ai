<template>
  <div style="height: 100%;">
    <!-- 上半部分 -->
    <div style="width: 100%;background-color: #eeedee;">
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
        <div style="width: 1200px;height: 300px;margin: 0 auto 0;">
          <!-- 标题及文字 -->
          <div style="width: 730px;height: 593px;margin: 0 auto 0;">
            <h1 style="font-size: 40px;margin: 0px 0px 15px 0px;">{{title}}</h1>
            <b style="color: #606266;letter-spacing: 0.2em;font-size: 16px;">{{synopsis}}</b>
            <p></p>
            <div style="margin-top: 90px;color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;">{{author}}</div>
            <div style="color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;">{{time}}</div>
            <div style="color:#909399;text-decoration: none;font-size: 12px;letter-spacing: 0.2em;">{{readtime}}</div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div style="width: 720px;height: auto;margin: 0 auto 0;margin-top: 100px;">
        <div v-for="con in content">
          <!-- 标题 -->
          <div style="font-size: 1.2em;letter-spacing: 0.02em;font-weight: bolder;margin-top: 40px;">
            {{con.title}}
          </div>
          <!-- 公告内容 -->
          <div style="color: #606266;letter-spacing: 0.1em;font-size: 16px;margin-top: 10px;">
            {{con.msg}}
          </div>
        </div>
      </div>
      <!-- 页尾 -->
      <div style="width: 1200px;height: auto;margin: 0 auto 0;padding: 100px 0px 10px 0px;">
            <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
              <div v-for="synopsi in footer">
                  <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%;position: relative;overflow: hidden;clear: both;">
                      <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2em;font-weight: normal;text-transform: uppercase;margin-right: 165px;position: absolute;left: 0px;">{{ synopsi.title }}</b>
                      <div style="float: right;width: 960px;float: right;display: flex;flex-direction: column;justify-content:space-between;">
                          <b style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.2;font-weight: normal;line-height: 1.4;">{{ synopsi.msg }}</b>
                      </div>
                      
                  </li>
              </div>
            </ol>
      </div>
    
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
      //公告标题
      title:' 为什么负责人工智能开发需要安全合作',
      //公告作者
      author:'CMAPLE',
      //公告简介
      synopsis:'我们发布了蜂巢系统纲领，并在其中描述了我们履行蜂巢系统使命的原则。这份宣言包含了许多我们实践的重要原则，它是蜂巢系统内外许多人在两年里不断完善人工智能发展战略的努力的结晶。达成通',
      //时间
      time:'2019年7月21日',
      //阅读时间
      readtime:'16分钟阅读',
      //公告内容
      content:[
        {
          title:'广泛造福社会',
          msg:'我们承诺在通用人工智能的开发过程中，将利用所有可获得的影响力，确保它可以造福全人类。我们将避免把人工智能或通用人工智能的技术置于损害人类或过度集中权力的事业中。'
        },
        {
          title:'广泛造福社会',
          msg:'我们承诺在通用人工智能的开发过程中，将利用所有可获得的影响力，确保它可以造福全人类。我们将避免把人工智能或通用人工智能的技术置于损害人类或过度集中权力的事业中。'
        },
        {
          title:'广泛造福社会',
          msg:'我们承诺在通用人工智能的开发过程中，将利用所有可获得的影响力，确保它可以造福全人类。我们将避免把人工智能或通用人工智能的技术置于损害人类或过度集中权力的事业中。'
        },
      ],
      footer:[
        {
          title:'致谢',
          msg:'感谢Rewon Child和Scott Gray在稀疏变压器上的工作，以及Jeff Wu和Alec Radford在GPT-2上的工作。我们还感谢以下关于这篇文章草稿的反馈：Greg Brockman，Ilya Sutskever，Durk Kingma，Arvind Neelakantan，Tim Salimans，Rob Laidlow，Judith Finell，Moni Simeonov，Ray Iwazumi，Sam McCandlish，Miles Brundage，Jack Clark，Jonas施奈德，克里斯奥拉'
        },
        {
          title:'脚注',
          msg:'感谢Rewon Child和Scott Gray在稀疏变压器上的工作，以及Jeff Wu和Alec Radford在GPT-2上的工作。我们还感谢以下关于这篇文章草稿的反馈：Greg Brockman，Ilya Sutskever，Durk Kingma，'
        }

      ],
      //微信弹窗属性
      WeChartVisible: false,
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
      GitHubPagerl:'https://github.com/congfeng12',
      
    }
  },
   mounted(){
    //页面加载后执行
    
  }

}
</script>

