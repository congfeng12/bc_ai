<template>
  <div style="width: 100%;height: auto;">
    <!-- 上半部分 -->
    <div style="width: 100%;background-color: #F56C6C">
    <div style="width: 1500px;height: 960px;margin: 0 auto 0;">
      <!-- 标题头 -->
      <div style="width: 100%;height: 98px;border-bottom:2px solid #FFFFFF;margin: 0px 0px 30px 0px;">
        <!-- 图标 -->
        <div style="float: left;width: 250px;">
          <img src="../jpg/logo.png" style="width: 70px;margin: 15px 0px 0px 0px;float: left;">
        </div>
        <!-- 主题文字 -->
        <div style="width: 200px;float: left;margin: 0px;padding: 12px 0px 0px 0px;text-align: left;">
          <a href="/" style="text-decoration: none;">
            <h3 style="color: #FFFFFF;font-size: 22px;">ByteAI</h3>
          </a>
        </div>
        <!-- 标题栏按钮按钮 -->
        <div style="float: right;width: 307px;height: 30px;margin: 32px 0px 0px 0px;">
          <!-- 公告 -->
          <div style="float: right;padding: 4px 7px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #FFFFFF;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">公告</font>
            </a>
          </div>
          <!-- 资源 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #FFFFFF;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">资源</font>
            </a>
          </div>
          <!-- 进展 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #FFFFFF;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">进展</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: right;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
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
            <font style="color: #FFFFFF;font-weight: normal !important;">发现并制定 安全的人工智能通道。</font>
          </h1>
          <!-- 学到更多 - 链接 -->
          <a  href="" style="color:#FFFFFF;text-decoration: none;font-size: 14.4px;">学到更多&nbsp<i class="el-icon-arrow-right"></i></a>
        </div>
      </div>
      <!-- 最新发布 -->
      <div style="width: 100%;height: 600px;margin: 0px 0px 0px 0px;">
        <div style="width: 100%;margin: 0px 0px 0px 0px;padding: 15px 0px 0px 0px;margin: 0px 0px 20px 0px;">
          <font style="color: #FFFFFF;font-size: 15px;padding-left: 10px;">最新发布</font>
        </div>
        <el-row :gutter="11">
          <el-col :span="6">
            <a href="" style="text-decoration: none;">
              <el-card :body-style="{ padding: '12px' }" shadow="always">
                <p style="margin: 5px 0px 30px 0px;font-weight: 700;">块稀疏GPU内核</p>
                <img style="width: 100%;" src="https://d4mucfpksywv.cloudfront.net/research-covers/musenet/1x-no-mark.jpg">
            </el-card>
            </a>
          </el-col>
          <el-col :span="6">
           <a href="" style="text-decoration: none;">
              <el-card :body-style="{ padding: '12px' }" shadow="always">
                <p style="margin: 5px 0px 30px 0px;font-weight: 700;">AI培训如何扩展</p>
                <img style="width: 100%;" src="https://d4mucfpksywv.cloudfront.net/research-covers/science-of-ai/1x-no-mark.jpg">
            </el-card>
            </a>
          </el-col>
          <el-col :span="6">
           <a href="" style="text-decoration: none;">
              <el-card :body-style="{ padding: '12px' }" shadow="always">
                <p style="margin: 5px 0px 30px 0px;font-weight: 700;">OpenAI宪章</p>
                <img style="width: 100%;" src="https://d4mucfpksywv.cloudfront.net/research-covers/learning-dexterity/1x-no-mark.jpg">
            </el-card>
            </a>
          </el-col>
          <el-col :span="6">
           <a href="" style="text-decoration: none;">
              <el-card :body-style="{ padding: '12px' }" shadow="always">
                <p style="margin: 5px 0px 30px 0px;font-weight: 700;">用无监督学习提高语言理解能力</p>
                <img style="width: 100%;" src="https://d4mucfpksywv.cloudfront.net/research-covers/language-unsupervised/1x-no-mark.jpg">
            </el-card>
            </a>
          </el-col>
        </el-row>
        <div style="width: 100%;height: 30px;margin: 40px 0px 0px 0px;">
          <div style="width: 105px;margin: 0 auto 0;height: 30px;">
            <a href="" style="text-decoration: none;color:#FFFFFF;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;">
              查看公告&nbsp<i class="el-icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!--  -->
    <div style="width: 100%;">
      <div style="width: 962px;margin: 0 auto 0;height: auto;margin-top: 90px;">
        <font style="font-size: 30px;">
          OpenAI的使命是确保人工一般智能对全人类都有益。我们是一个由100人组成的团队，总部设在加利福尼亚州旧金山。该OpenAI宪章介绍了指导我们执行我们的任务的原则。
        </font>
        <p></p>
        <div style="margin-top: 35px;">
           <a href="" style="text-decoration: none;color:#C0C4CC;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;">
              查看进度&nbsp<i class="el-icon-arrow-right"></i>
           </a>
        </div>
      </div>
    </div>
    <!-- 公告列表 -->
    <div style="width: 100%;height: auto;margin-top: 80px;">
      <div style="width: 1500px;margin:0 auto 0;height: auto;">
          <b style="letter-spacing: 0.1em;font-size: 16px;font-weight: normal;">最近的博客帖子</b>
          <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:30px 0px 0px 0px;">
            <a v-for="todo in todos" href="" style="text-decoration:none;color: ＃909399;">
              <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 20px 0px 20px 0px;width: 100%">
              
              <b>{{ todo.text }}</b>
              <b>{{ todo.text }}</b>
              </li>
            </a>        
          </ol>
          <div style="width: 1500px;border-top:1px solid #DCDFE6;"></div>
          <p style="margin-top: 40px;"></p>
          <a href="" style="text-decoration: none;color:#C0C4CC;text-decoration: none;font-size: 14.4px;letter-spacing: 0.3em;">
              查看进度&nbsp<i class="el-icon-arrow-right"></i>
          </a>
      </div>
    </div>
    <!-- 加入我们 -->
    <div style="width: 100%;height: auto;">
      <div style="width: 1500px;height: 380px;margin:0 auto 0;border-top:1px solid #DCDFE6;margin-top: 80px;">
        <!-- 加入我们 -->
        <div style="width: 470px;margin:0px;float: left;">
          <h2 style="letter-spacing: 0.1em;">加入ByteAI</h2>
          <div style="margin:0px 0px 195px 0px;">
            <font style="font-size: 20px;">我们聘请了各种技术和非技术人才加入我们在旧金山的团队。</font>
          </div>
          <p></p>
          <a href="" style="text-decoration: none;color:#C0C4CC;text-decoration: none;font-size: 13.3px;letter-spacing: 0.3em;">
              查看空缺职位&nbsp<i class="el-icon-arrow-right"></i>
           </a>
        </div>
        <!-- 图片集 -->
        <div style="margin-top: 19.92px;">
          <!-- 展示打图 -->
          <div style="float: left;height: 325px;width: 400px;margin-left: 40px;">
            <img style="height: 325px;" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
          </div>
          <!-- 并列图片 -->
          <div style="float: right;height: 325px;width: 500px;">
            <div>
              <div style="float: left;margin-left: 14px;">
                <img style="height: 160px;" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
              </div>
              <div style="float: right;">
                <img style="height: 160px;" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
              </div>
            </div>
            <div>
              <div style="float: left;height: 160px;margin-left: 14px;">
                <img style="height: 160px;" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
              </div>
              <div style="float: right;height: 160px;">
                <img style="height: 160px;" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
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
        <a href="">
          <img style="height: 25px;float: left;" src="../jpg/github.png">
        </a>
        <!-- 微信 -->
        <a href="">
          <img style="height: 25px;float: left;margin-left: 20px;" src="../jpg/weixin.png">
        </a>
      </div>
      <!-- 快捷连接 -->
      <div style="height: 30px;width: 1280px;float: left;margin-top: 10px;">
        <!-- 公告 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">关于</font>
            </a>
          </div>
          <!-- 资源 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">进展</font>
            </a>
          </div>
          <!-- 进展 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">资源</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">公告</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">宪章</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">加入</font>
            </a>
          </div>
          <!-- 关于 -->
          <div style="float: left;padding: 4px 30px 0px 0px;">
            <a href="" style="text-decoration: none;">
              <font style="color: #909399;font-size: 13.33px;font-weight: bold;text-transform: uppercase;letter-spacing: 0.2em;">声明</font>
            </a>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '学习 Vue' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
