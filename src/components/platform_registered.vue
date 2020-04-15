<template>
  <div style="width: 100%;background-color: #F2F6FC;height: 100%">
    <div style="width: 100%;height: 100%;">
      <div style="height: 60px;"></div>
      <!-- 登录框 -->
      <div style="width: 800px;height: 700px;background-color: #FFFFFF;margin: 0 auto 0;left: 0;right: 0;border-radius: 15px;box-shadow: #EBEEF5 2px 2px 10px 2px;background-image:url(../../static/registered_.png)">
        <!-- 表单 -->
        <div style="width: 370px;height: 700px;">
          <div style="width: 370px;height: 70px;position: relative;">
            <a :href="HomePageImgUrl"><img :src="FormPageLogo" style="height: 50px;margin: 20px 0px 0px 30px;"></a>
            <font style="position: absolute;top: 35px;left: 100px;font-size: 1.2em;font-weight: bolder;">注册蜂巢资源平台账户</font>
          </div>
          <h3 style="margin: 0px;padding: 40px 0px 20px 145px;">
            <font>欢迎注册</font>
          </h3>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="昵称">
              <el-input v-model="ruleForm.petname" style="width: 230px;"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="ruleForm.telephonenumber" style="width: 230px;" maxlength="11"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="ruleForm.securitycode" style="width: 100px;margin-right: 5px;"></el-input>
              <el-button type="primary" @click="platform_securitycode" round>获取验证码</el-button>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="ruleForm.name" style="width: 230px;"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码">
              <el-input v-model="ruleForm.idcard" style="width: 230px;" maxlength="18"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="ruleForm.password" style="width: 230px;"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="ruleForm.v_password" style="width: 230px;"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" @click="platform_insert" style="width: 200px;margin-left: -10px;border-radius: 50px;"><font style="letter-spacing: 0.8em;">注册</font></el-button>
            </el-form-item>
          </el-form>
        </div>
       <div style="width: 360px;height: auto;margin: 0 auto 0;clear: both;position: fixed;bottom: 30px;left: 0;right: 0;text-align: center;">
        <font style="color: #C0C4CC;font-size: 0.5em;">{{Record_Number}} &nbsp&nbsp&nbsp {{Run_Time_Range}}&nbsp&nbsp{{Domain_Name}}</font>
      </div>
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
      HomePageImgUrl:'/',
      //备案号
      Record_Number:'',
      //运行时间
      Run_Time_Range:'',
       //域名
      Domain_Name:'',
      ruleForm: {
        petname: '',
        telephonenumber:'',
        securitycode:'',
        name:'',
        idcard:'',
        password:'',
        v_password:'',
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
    //注册
    platform_insert() {
        //console.log(this.ruleForm.username);
        var that = this;
        let sha256 = require("js-sha256").sha256//这里用的是require方法
        var shapassword = sha256(this.ruleForm.password)
        //请求公告信息 localStorage.getItem('cip'),localStorage.getItem('cname')
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.userinsert,this.$qs.stringify({
           petname:that.ruleForm.petname,
           telephonenumber:that.ruleForm.telephonenumber,
           name:that.ruleForm.name,
           securitycode:that.ruleForm.securitycode,
           idcard:that.ruleForm.idcard,
           password:shapassword,
           commonip:localStorage.getItem('cip'),
           lastplace:localStorage.getItem('cname'),
        }))
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            that.$router.push('/platform_login/');
          }else{
            //异常结果显示
            that.$Global.error_Message(that,res.data.RTMSG);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err+'');
        });
    },
    //验证验证码
    platform_securitycode(){
      var that = this;
      //sendSMS
      this.$Axios.post(this.$Global.Back_End_Service+this.$Global.sendSMS,this.$qs.stringify({
           telephonenumber:that.ruleForm.telephonenumber,
        }))
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            that.$Global.success_Message(that,res.data.RTMSG);
          }else{
            //异常结果显示
            that.$Global.error_Message(that,res.data.RTMSG);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err+'');
        });
    }
  },
  created(){
    //页面加载时执行
    this.Record_Number = this.$Global.Record_Number;
    this.Run_Time_Range = this.$Global.Run_Time_Range;
    this.Domain_Name = this.$Global.Domain_Name;
  },
  mounted(){
    //页面加载后执行
  }
}
</script>
<style>
.el-input__inner{
  border-radius: 50px !important;
}
</style>
