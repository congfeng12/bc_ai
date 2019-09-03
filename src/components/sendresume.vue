<template>
  <div style="width: 100%;height: 100%;height: 100%;">
    
      <!-- 页头标题 -->
      <div style="clear: both;background-color: #F2F6FC">
        <div style="width: 760px;margin: 0 auto 0;">
          <div style="padding: 30px 0px 0px 0px;position: relative;">
            <img src="../../static/logo_black.png" style="width: 55px;">
            <h3 style="margin: 0px 0px 0px 0px;position: absolute;bottom: 5px;left: 70px;">
              <font style="font-weight: normal;font-size: 1.8em;letter-spacing: 0.1em;">蜂巢系统</font>
            </h3>
          </div>
          <!-- 工作标题&按钮 -->
          <div style="width: 100%;margin: 30px 0px 0px 0px;position: relative;">
            <h3 style="margin: 0px 0px 0px 0px;">
              <font style="font-weight: normal;font-size: 2em;letter-spacing: 0.1em;">{{title}}</font>
            </h3>
            <!-- <el-button type="primary" style="position: absolute;right: 0px;top: 8px;letter-spacing: 0.1em;">申请这份工作</el-button> -->
            <!-- 地点&类型 -->
            <h3 style="margin: 10px 0px 0px 0px;">
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;">{{place}}&nbsp&nbsp{{type}}&nbsp&nbsp{{ask}}</font>
            </h3>
            <div style="height: 30px;"></div>
          </div>
        </div>
      </div>
      <!-- 表单 -->
      <div style="clear: both;width: 100%;height: auto;margin: 40px 0px 0px 0px;">
        <div style="width: 760px;margin: 0 auto 0;">
          <!-- 提交申请 -->
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: bolder;font-size: 0.9em;letter-spacing: 0.1em;">提交申请</font>
          </h3>
          <div style="width: 100%;height: 350px;margin-top: 50px;">
            <!-- 标题 -->
            <div style="width: 150px;height: 350px;float: left;background-color: ">
              
              <h3 style="margin: 4px 0px 0px 0px;">
                <el-badge is-dot >
                  <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">真实姓名</font>
                </el-badge>
              </h3>
              <h3 style="margin: 40px 0px 0px 0px;">
                <el-badge is-dot >
                  <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">电话号码</font>
                </el-badge>
              </h3>
              <h3 style="margin: 40px 0px 0px 0px;">
                <el-badge is-dot >
                  <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">电子邮件</font>
                </el-badge>
              </h3>
              <h3 style="margin: 40px 0px 0px 0px;">
                <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">联系地址</font>
              </h3>
              <h3 style="margin: 45px 0px 0px 0px;">
                <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">目前就职的公司</font>
              </h3>
            </div>
            <!-- 输入框 -->
            <div style="width: 600px;height: 350px;float: right;">
              <div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div style="margin-top: 28px">
                <el-input v-model="input" placeholder="请输入真实姓名"></el-input>
              </div>
              <div style="margin-top: 28px">
                <el-input v-model="input" placeholder="请输入电子邮件"></el-input>
              </div>
              <div style="margin-top: 28px">
                <el-input v-model="input" placeholder="请输入电话"></el-input>
              </div>
              <div style="margin-top: 28px">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </div>

            </div>
          </div>
          <!-- 链接 -->
          <h3 style="margin: 60px 0px 0px 0px;">
            <font style="color: #606266;font-weight: bolder;font-size: 0.9em;letter-spacing: 0.1em;">链接</font>
          </h3>
          <div style="width: 100%;height: 150px;margin-top: 30px;">
            <!-- 标题 -->
            <div style="width: 150px;height: 150px;float: left;">
              <h3 style="margin: 5px 0px 0px 0px;">
                <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">GitHub网址</font>
              </h3>
              <h3 style="margin: 40px 0px 0px 0px;">
                <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">个人网站URL</font>
              </h3>
            </div>
            <!-- 输入框 -->
            <div style="width: 600px;height: 150px;float: right;">
              <div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div style="margin-top: 25px">
                <el-input v-model="input" placeholder="请输入真实姓名"></el-input>
              </div>
            </div>
          </div>
          <!-- 附加信息 -->
          <h3 style="margin: 80px 0px 40px 0px;">
            <font style="color: #606266;font-weight: bolder;font-size: 0.9em;letter-spacing: 0.1em;">附加信息</font>
          </h3>
          <el-input
            type="textarea"
            :autosize="{ minRows: 6}"
            placeholder="输入附加内容"
            v-model="textarea2"
            maxlength="200"
            show-word-limit>
          </el-input>
          <!-- 上传附件 -->
          <h3 style="margin: 80px 0px 40px 0px;">
            <font style="color: #606266;font-weight: bolder;font-size: 0.9em;letter-spacing: 0.1em;">上传附件</font>
          </h3>
          <div style="margin-bottom: 60px">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false"
              >
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <div slot="tip" class="el-upload__tip">只能上传PDF/DOCX 的简历文件，且不超过30M</div>
            </el-upload>
          </div>
          <!-- 分割线 -->
          <el-divider></el-divider>
           <!-- 链接 -->
          <h3 style="margin: 40px 0px 0px 0px;">
            <font style="color: #606266;font-weight: bolder;font-size: 0.9em;letter-spacing: 0.1em;">美国平等就业机会信息</font>
            <font style="color: #606266;font-weight: normal;font-size: 0.9em;letter-spacing: 0.1em;">（完成是自愿的，不会对您造成不利待遇）</font>
          </h3>
           <h3 style="margin: 50px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们公司重视多元化。为确保我们遵守报告要求并了解有关如何增加候选人群体多样性的更多信息，我们邀请您在本申请表的最后通过保密调查自愿提供人口统计信息。提供此信息是可选的。它不会在招聘过程中被访问或使用，也不会影响您的就业机会。
            </font>
          </h3>
        </div>
      </div>
      <!-- 按钮 -->
      <div style="clear: both;width: 100%;text-align: center;margin: 150px 0px 150px 0px;">
        <el-button type="primary" style="letter-spacing: 0.2em;">提交简历</el-button>
      </div>
      <!-- 页尾 -->
      <div style="width: 100%;clear: both;margin: 0px 0px 0px 0px;text-align: center;padding: 50px 0px 20px 0px;background-color: #F2F6FC">
        <el-link type="primary">蜂巢系统主页</el-link>
        <!-- 合作 -->
        <div style="width: 100%;margin-bottom: 50px;">
          <h3 style="margin: 10px 0px 0px 0px;">
            <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.7em;letter-spacing: 0.1em;">
              @2019-2019 CMAPLE.CN
            </font>
          </h3>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        //标题
        title:'JAVA工程师',
        //地区
        place:'不限制地区',
        //职位类型
        type:'技术人员',
        //职位要求
        ask:'无需在职',
        //表单
        textarea2:'',
        fileList: [
          {
            name: 'food.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            name: 'food2.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            name: 'food2.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            name: 'food2.jpeg', 
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
        ],
      
  
    }
  },
  methods: {
    submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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

