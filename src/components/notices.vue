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
                          <p style="color: #303133;font-size: 0.9em;letter-spacing: 0.15em;font-family:Hiragino Sans GB;width: 1000px;">{{notice.text}}</p>
                        </div>
                      </div>
                    </div>
                  
                  <p></p>
                  <div style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bold;text-transform: uppercase;">
                    {{notice.readtime}}
                  </div>
                  </a>
                </li>
            </div>
          </ol>
          <!-- 分页按钮 -->
          <div style="margin: 0 auto 0;width: 535px;margin-top: 20px;">
             <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="1000">
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
      //公告列表
      Notices: [
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '/Announcement',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '/Announcement',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '/Announcement',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '/Announcement',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '/Announcement',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '',
        },
        { 
          date:'2019-07-21',
          title:'为什么负责人工智能开发需要安全合作',
          text: '我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          readtime:'24分钟阅读',
          url: '',
        },
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
