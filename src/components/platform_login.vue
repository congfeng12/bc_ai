<template>
  <div style="width: 100%;background-color: #F2F6FC;height: 100%">
    <div style="width: 100%;height: 100%;">
      <!-- 登录框 -->
      <div style="width: 800px;height: 400px;background-color: #FFFFFF;position: fixed;top: 200px;margin: 0 auto 0;left: 0;right: 0;border-radius: 15px;box-shadow: #EBEEF5 2px 2px 10px 2px;background-image:url(../../static/FormBackgroundImg.png)">
        <!-- 表单 -->
        <div style="width: 370px;height: 400px;">
          <div style="width: 370px;height: 70px;position: relative;">
            <a :href="HomePageImgUrl"><img :src="FormPageLogo" style="height: 50px;margin: 20px 0px 0px 30px;"></a>
            <font style="position: absolute;top: 35px;left: 100px;font-size: 1.2em;font-weight: bolder;">蜂巢系统深度学习平台</font>
          </div>
          <h3 style="margin: 0px;padding: 40px 0px 20px 145px;">
            <font>欢迎登录</font>
          </h3>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="20px">
            <el-form-item prop="username">
              <el-input v-model="ruleForm.username" style="width: 330px;" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="ruleForm.password" type="password" style="width: 330px;" prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-checkbox v-model="ruleForm.remberlogin" style="margin: 0px 30px 30px 20px;">记住登录状态</el-checkbox>
            <el-link type="info" style="margin-right: 20px;">忘记密码？</el-link>
            <el-link type="primary" >注册平台账号</el-link>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" style="width: 200px;margin-left: 65px;border-radius: 50px;"><font style="letter-spacing: 0.8em;">登录</font></el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div style="width: 360px;height: auto;margin: 0 auto 0;clear: both;position: fixed;top: 620px;left: 0;right: 0;">
        <font style="color: #C0C4CC;font-size: 0.5em;">蜂巢系统版权归CMAPLE拥有 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp @2019-2019 CMAPLE.CN</font>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      //加入我们展示图
      
      //logo图
      FormPageLogo:'../../static/logo_black.png',
      //背景图
      PageBackgroundImg:'',
      //表单背景图
      FormBackgroundImg:'../../static/FormBackgroundImg.png',
      HomePageImgUrl:'/',
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
  onSubmit() {
        //console.log(this.ruleForm.username);
        ///platform_login
        if (''!=this.ruleForm.username && ''!=this.ruleForm.password) {
          this.$router.push('/platform_menu/');
        }else{
          this.$message.error('账户名或密码错误！');
        }
      }
  },
  created(){
    //页面加载时执行
    //console.log(document.documentElement.scrollHeight)
    console.log(window.navigator);
    var ua = navigator.userAgent;

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
<!-- Add "scoped" attribute to limit CSS to this component only -->
