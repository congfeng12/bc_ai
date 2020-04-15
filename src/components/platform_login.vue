<template>
  <div style="width: 100%;background-color: #F2F6FC;height: 100%">
    <div style="width: 100%;height: 100%;">
      <!-- 登录框 -->
      <div style="width: 800px;height: 400px;background-color: #FFFFFF;position: fixed;top: 200px;margin: 0 auto 0;left: 0;right: 0;border-radius: 15px;box-shadow: #EBEEF5 2px 2px 10px 2px;background-image:url(../../static/FormBackgroundImg.png)">
        <!-- 表单 -->
        <div style="width: 370px;height: 400px;">
          <div style="width: 370px;height: 70px;position: relative;">
            <a :href="HomePageImgUrl"><img :src="FormPageLogo" style="height: 50px;margin: 20px 0px 0px 30px;"></a>
            <font style="position: absolute;top: 35px;left: 100px;font-size: 1.2em;font-weight: bolder;">蜂巢系统资源平台</font>
          </div>
          <h3 style="margin: 0px;padding: 40px 0px 20px 145px;">
            <font>欢迎登录</font>
          </h3>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="20px">
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username" style="width: 330px;" prefix-icon="el-icon-user" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="ruleForm.password" type="password" @keyup.enter.native="platform_login" style="width: 330px;" prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <!-- <el-checkbox v-model="ruleForm.remberlogin" style="margin: 0px 30px 30px 20px;"></el-checkbox> -->
            <div style="margin:0 auto 0;width: 184px;">
              <el-link type="info" style="margin:0px 20px 0px 0px;" href="//">忘记密码？</el-link>
              <el-link type="primary" href="/platform_registered">注册平台账号</el-link>
            </div>
            <el-form-item>
              <el-button type="primary" @click="platform_login"  style="width: 200px;margin:20px 0px 0px 65px;border-radius: 50px;"><font style="letter-spacing: 0.8em;">登录</font></el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div style="width: 360px;height: auto;margin: 0 auto 0;clear: both;position: fixed;top: 620px;left: 0;right: 0;text-align: center;">
        <font style="color: #C0C4CC;font-size: 0.5em;">{{Record_Number}} &nbsp&nbsp&nbsp {{Run_Time_Range}}&nbsp&nbsp{{Domain_Name}}</font>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      //logo图
      FormPageLogo:'../../static/logo_black.png',
      //背景图
      PageBackgroundImg:'',
      //表单背景图
      FormBackgroundImg:'../../static/FormBackgroundImg.png',
      HomePageImgUrl:'/',
      //备案号
      Record_Number:'',
      //运行时间
      Run_Time_Range:'',
       //域名
      Domain_Name:'',
      ruleForm: {
          username: '',
          password:'',
          remberlogin:false
      },
      rules: {
          //暂时取消规则
          // username: [
          //   { required: true, message: '账号不能为空', trigger: 'blur' },
          //   { min: 5, message: '长度需要5个字节以上', trigger: 'blur' }
          // ],
          // password: [
          //   { required: true, message: '密码不能为空', trigger: 'blur' },
          //   { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
          // ]
        }
    }
  },
  methods: {
    //登录
    platform_login() {
        var that = this;
        let sha256 = require("js-sha256").sha256//这里用的是require方法
        var shapassword = sha256(this.ruleForm.password)
        //请求公告信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.login,this.$qs.stringify({
           telephonenumber:this.ruleForm.username,
           password:shapassword,
           uip:localStorage.getItem('cip'),
           lastplace:localStorage.getItem('cname'),
        }))
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理公告信息
            localStorage.setItem("token",res.data.RTDATA);
            that.$router.push('/platform_menu/');
          }else{
            //异常结果显示
            that.$Global.error_Message(that,res.data.RTMSG + res.data.RTDATA);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err+'');
        });
    },
    //跳转到修改密码页面

  },
  created(){
    //页面加载时执行
    this.Record_Number = this.$Global.Record_Number;
    this.Run_Time_Range = this.$Global.Run_Time_Range;
    this.Domain_Name = this.$Global.Domain_Name;
  },
  mounted(){
    //页面加载后执行
    this.$Global.warning_notify(this,'通知','为了能够提供更好的浏览体验请使用IE8以上的浏览器或者chrome浏览器等。我们将使用您的ip地址，用于保证账户的安全性。我们将不会在其他位置使用这些信息，您的这些信息将完全保密！',3000);
  }
}
</script>
<style>
.el-input__inner{
  border-radius: 50px !important;
}
</style>
<!-- that.$Global.setCookie('userinfo', res.data.RTDATA.telephonenumber);
            var userinfo = that.$Global.getCookie('userinfo');
            console.log(userinfo);
            that.$Global.delCookie('userinfo');
            var userinfo1 = that.$Global.delCookie('userinfo');
            console.log(userinfo1); -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
