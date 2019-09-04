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
      <font style="font-size: 1.8em;font-family:Hiragino Sans GB;color: #303133;letter-spacing: 0.05em;">蜂巢致力于推进AI功能，安全性和策略。</font>
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
                <p style="margin: 5px 0px 30px 0px;font-weight: 700;">{{progres.text}}</p>
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
            <div v-for="notice in Notices">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
                  <a :href="notice.url" style="text-decoration:none;" target="view_window">
                    <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;margin-right: 175px;">{{ notice.date }}</b>
                    <b style="color: #303133;font-size: 0.85em;letter-spacing: 0;font-weight: normal;line-height: 1.4;">{{ notice.text }}</b>
                    <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bold;;text-transform: uppercase;float: right;">{{ notice.type }}</b>
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
      //公告展示
      Progress:[
        { id:1, url:'/milestone',text:'了解蜂巢',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/musenet/1x-no-mark.jpg'},
        { id:2, url:'',text:'蜂巢系统页面开发流程',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/science-of-ai/1x-no-mark.jpg'},
        { id:3, url:'',text:'蜂巢系统宪章',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/learning-dexterity/1x-no-mark.jpg'},
        { id:4, url:'',text:'蜂巢系统后台使用的相关技术',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/language-unsupervised/1x-no-mark.jpg'},
        { id:5, url:'',text:'蜂巢系统宪章',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/learning-dexterity/1x-no-mark.jpg'},
        { id:6, url:'',text:'蜂巢系统宪章',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/learning-dexterity/1x-no-mark.jpg'},
        { id:7, url:'',text:'蜂巢系统宪章',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/learning-dexterity/1x-no-mark.jpg'},
        { id:8, url:'',text:'蜂巢系统宪章',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/learning-dexterity/1x-no-mark.jpg'},
        { id:9, url:'',text:'蜂巢系统宪章',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/learning-dexterity/1x-no-mark.jpg'},
        { id:10, url:'',text:'蜂巢系统宪章',jpgurl:'https://d4mucfpksywv.cloudfront.net/research-covers/learning-dexterity/1x-no-mark.jpg'},
      ],
      //公告列表
      Notices: [
        { date:'2019-07-21',text: '为什么负责人工智能开发需要安全合作',type:'强化学习',url: '/investigationreport'},
        { date:'2019-07-20',text: '只能学习研讨会2019',type:'机器人',url: '/investigationreport' },
        { date:'2019-07-19',text: '机械学系学者大会' ,type:'强化学习',url: '/investigationreport'},
        { date:'2019-07-18',text: '优化算法' ,type:'强化学习',url: "http://127.0.0.4"},
        { date:'2019-07-18',text: '优化算法' ,type:'强化学习',url: "http://127.0.0.4"},
        { date:'2019-07-18',text: '优化算法' ,type:'强化学习',url: "http://127.0.0.4"},
        { date:'2019-07-18',text: '优化算法' ,type:'强化学习',url: "http://127.0.0.4"},
        { date:'2019-07-18',text: '优化算法' ,type:'强化学习',url: "http://127.0.0.4"},
        { date:'2019-07-18',text: '优化算法' ,type:'强化学习',url: "http://127.0.0.4"},
        { date:'2019-07-17',text: '深度学习网络' ,type:'机器人',url:''}
      ],
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
