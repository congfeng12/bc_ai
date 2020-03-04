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
            <!-- 地点&类型 -->
             <h3 style="margin: 50px 0px 0px 0px;">
              <el-link style="font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;" type="primary">{{createuser}}</el-link>
            </h3>
            <h3 style="margin: 0px 0px 0px 0px;">
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;">{{createdate}}</font>
            </h3>
            <h3 style="margin: 10px 0px 0px 0px;">
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;">{{place}}</font>
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;">&nbsp&nbsp{{type}}</font>
              <el-tooltip class="item" effect="dark" content="贡献者-网站的普通参与者，不具备网站管理权限；研究员-网站的核心参与人员，具备相应的网站管理权限；" placement="top">
                <el-link style="font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;" :underline="false" type="primary">&nbsp&nbsp{{nature}}</el-link>
              </el-tooltip>
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;margin-left: 5px;">需求
                <font style="color: #67C23A">{{need}}</font>
              人</font>
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;margin-left: 5px;">目前
                <font style="color: #F56C6C">{{application}}</font>
              人申请</font>
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
                <el-input v-model="name" placeholder="请填写真实姓名"></el-input>
              </div>
              <div style="margin-top: 28px">
                <el-input v-model="phonenumber" maxlength="11" placeholder="请填写电话号码"></el-input>
              </div>
              <div style="margin-top: 28px">
                <el-input v-model="emaile" placeholder="请填写电子邮件"></el-input>
              </div>
              <div style="margin-top: 28px">
                <el-input v-model="address" placeholder="请填写联系地址"></el-input>
              </div>
              <div style="margin-top: 28px">
                <el-input v-model="company" placeholder="请填写目前就职的公司"></el-input>
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
                <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">GitHub域名</font>
              </h3>
              <h3 style="margin: 40px 0px 0px 0px;">
                <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">个人网站URL</font>
              </h3>
            </div>
            <!-- 输入框 -->
            <div style="width: 600px;height: 150px;float: right;">
              <div>
                <el-input v-model="githuburl" placeholder="请填写个人GitHub域名"></el-input>
              </div>
              <div style="margin-top: 25px">
                <el-input v-model="personelurl" placeholder="请填写个人网站的域名"></el-input>
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
            placeholder="请填写个人简介及个人掌握的相关技术"
            v-model="information"
            maxlength="400"
            show-word-limit>
          </el-input>
          <!-- 分割线 -->
          <el-divider></el-divider>
           <!-- 链接 -->
          <h3 style="margin: 40px 0px 0px 0px;">
            <font style="color: #606266;font-weight: bolder;font-size: 0.9em;letter-spacing: 0.1em;">非全职性质的工作</font>
            <font style="color: #606266;font-weight: normal;font-size: 0.9em;letter-spacing: 0.1em;">（完全是自愿的，不会对您造成不利待遇）</font>
          </h3>
           <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们是一个完全自发的个人服务网站，我们在寻找志同道合的小伙伴一起来完善和丰富蜂巢个人服务网站，蜂巢系统是一个针对各种有趣或者有用的服务进行开发的个人服务网站，你只要对我们所做的事情表示认同并且想要进一步的参与进来都可以来加入我们，我们不会占用你的工作时间，我们的开发时间完全自由。
            </font>
          </h3>
        </div>
      </div>
      <!-- 按钮 -->
      <div style="clear: both;width: 100%;text-align: center;margin: 80px 0px 100px 0px;">
        <el-button type="primary" style="letter-spacing: 0.2em;" @click="JobApplication()">提交简历</el-button>
      </div>
      <!-- 页尾 -->
      <div style="width: 100%;clear: both;margin: 0px 0px 0px 0px;text-align: center;padding: 50px 0px 20px 0px;background-color: #F2F6FC">
        <el-link type="primary">蜂巢系统主页</el-link>
        <!-- 合作 -->
        <div style="width: 100%;margin-bottom: 50px;">
          <h3 style="margin: 10px 0px 0px 0px;">
            <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.7em;letter-spacing: 0.1em;">
              {{Run_Time_Range}} {{Domain_Name}}
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
        //岗位id
        workid:'',
        //标题
        title:'',
        //地区
        place:'',
        //职位类型
        type:'',
        //岗位性质
        nature:'',
        //岗位发布人员
        createuser:'',
        //岗位发布日期
        createdate:'',
        //岗位需求人数
        need:'',
        //岗位申报人数
        application:'',
        //真实姓名
        name:'',
        //电话号码
        phonenumber:'',
        //电子邮件
        emaile:'',
        //地址
        address:'',
        //公司
        company:'',
        //githuburl
        githuburl:'',
        //个人网站
        personelurl:'',
        //附加信息
        information:'',
        //运行时间
        Run_Time_Range:'',
        //域名
        Domain_Name:'',
  
    }
  },
  methods: {
    //获取岗位详细信息
    getWorkById(){
      //设置必要参数
        var that = this;
        //请求里程碑信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getWorkById,this.$qs.stringify({
           id:this.$route.query.id,
        }))
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理岗位信息
            that.workid = res.data.RTDATA.id;
            that.title = res.data.RTDATA.title;
            that.place = res.data.RTDATA.place;
            that.type = res.data.RTDATA.type;
            that.nature = res.data.RTDATA.nature;
            that.createuser = res.data.RTDATA.createuser;
            var c_creatdate = res.data.RTDATA.createtime.split("-");
            that.createdate = c_creatdate[0]+'年'+c_creatdate[1]+'月'+c_creatdate[2]+'日';
            that.need = res.data.RTDATA.need;
            that.application = res.data.RTDATA.application;
           
          }else{
            //异常结果显示
            that.$Global.error_Message(that,res.data.RTMSG);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err+'');
        });
    },
    //提交岗位申请
    JobApplication(){
      this.$Global.success_notify(this,'申请成功！','我们将会以短信和邮件的形式通知您申请结果！',5000);
    },
  },
  created(){
    //页面加载时执行
    this.Run_Time_Range = this.$Global.Run_Time_Range;
    this.Domain_Name = this.$Global.Domain_Name;
    //获取岗位信息
    this.getWorkById();
  },
  mounted(){
    //页面加载后执行
    
  }
}
</script>

