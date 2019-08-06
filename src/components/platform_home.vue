<template>
  <div style="width: 100%;background-color: #F2F6FC;" :style="{height:pageheight}">
    <el-container >
      <!-- 页头 -->
      <el-header style="border-bottom:1px solid #DCDFE6;background-color: #FFFFFF;box-shadow: #EBEEF5 2px 2px 10px 2px;padding-left: 0px;">
        <!-- 图标 -->
        <div style="height: 100%;width: 260px;float: left;position: relative;">
          <img :src="PageLogo" style="height: 40px;margin-top: 10px;margin-left: 15px;">
          <font style="font-size: 1.1em;font-weight: bolder;position: absolute;top: 19px;left: 70px;">蜂巢系统深度学习平台</font>
        </div>
        <!-- 面包屑 -->
        <div style="height: 100%;width: auto;float: left;margin-left: 60px;">
          <el-breadcrumb separator="/" style="margin-top: 23px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 个人中心 -->
        <div style="height: 100%;width: 300px;float: right;">
          <!-- 个人界面 -->
          <a href="javascript:void(0)" @click="mydrawer = true">
            <div style="float: right;width: 44px;height: 44px;margin-top: 8px;margin-right: 20px;" >
              <el-avatar  :size="50" style="width: 44px;height: 44px;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
          </a>
          <!-- 信息界面 -->
          <el-badge :value="PendingEvents"  style="float: right;margin: 13px 40px 0px 0px;">
            <el-button  @click="drawer = true" icon="el-icon-message" style="width: 50px;height: 34px;padding: 8px;"></el-button>
          </el-badge>
        </div>
      </el-header>
    <el-container>
    <!-- 导航栏 -->
    <el-aside width="260px" :style="{height:asideheight}" style="background-color: #FFFFFF;clear: both;">
    <el-col style="clear: both;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </el-col>
    </el-aside>
    <!-- 主要内容 -->
    <el-main style="clear: both;">

    </el-main>
  </el-container>
  </el-container>
  <!-- 个人中心-展开页面 -->
  <el-drawer
    title="个人中心"
    :visible.sync="mydrawer"
    :direction="mydirection"
    :before-close="handleClose">
    <span>我来啦!</span>
  </el-drawer>
  <!-- 待处理消息-展开页面 -->
  <el-drawer
    title="待处理消息"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose">
    <span>我来啦!</span>
  </el-drawer>
  </div>

</template>

<script>
export default {
  data () {
    return {
      //加入我们展示图
      //页面高度
      pageheight:'',
      asideheight:'',
      PageLogo:'../../static/logo_black.png',
      drawer: false,
      direction: 'rtl',
      mydrawer: false,
      mydirection: 'rtl',
      PendingEvents:13,
    }

  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(done) {
        
            done();
         
      }
      // onSubmit() {
      //   console.log(this.ruleForm.username);
      //   ///platform_login
      //   this.$router.push('/platform_home');
      // }
  },
  created(){
    //页面加载时执行
    //console.log(document.documentElement.scrollHeight);
    //动态设置页面高度
    this.pageheight = (document.documentElement.scrollHeight) + 'px';
    this.asideheight = (document.documentElement.scrollHeight-60) + 'px';
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

