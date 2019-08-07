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
          <a href="javascript:void(0)" @click="openeldrawer('pc')">
            <div style="float: right;margin-top: 8px;margin-right: 20px;" >
              <el-avatar  :src="userimg"></el-avatar>
            </div>
          </a>
          <!-- 信息界面 -->
          <el-badge :value="PendingEvents"  style="float: right;margin: 13px 40px 0px 0px;">
            <el-button  @click="openeldrawer('pm')" icon="el-icon-message" style="width: 50px;height: 34px;padding: 8px;"></el-button>
          </el-badge>
        </div>
      </el-header>
    <el-container>
    <!-- 导航栏 -->
    <el-aside width="260px" :style="{height:asideheight}" style="background-color: #FFFFFF;clear: both;box-shadow: #EBEEF5 2px 2px 10px 0px;">
    <el-col style="clear: both;">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <!-- 资源管理 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-folder-opened"></i>
          <span>资源管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">网站静态资源管理</template>
           <!-- 二级菜单 -->
          <el-menu-item index="1-1">官网静态资源</el-menu-item>
          <el-menu-item index="1-2">服务器资源</el-menu-item>
          <el-menu-item index="1-3">后台服务资源</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">网站其他资源管理</template>
          <!-- 二级菜单 -->
          <el-menu-item index="1-4">公告资源</el-menu-item>
          <el-menu-item index="1-5">里程碑资源</el-menu-item>
          <el-menu-item index="1-6">调查报告资源</el-menu-item>
          <el-menu-item index="1-7">空缺职位资源</el-menu-item>
          <el-menu-item index="1-8">时间轴资源</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">节点资源管理</template>
          <!-- 二级菜单 -->
          <el-menu-item index="1-9">服务节点资源</el-menu-item>
         <!--  <el-menu-item index="1-10">待审节点资源</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <!-- 用户管理 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">管理及授权</template>
          <el-menu-item index="2-1">平台账号</el-menu-item>
          <el-menu-item index="2-2">平台管理员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 日志 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-notebook-1"></i>
          <span>日志信息</span>
        </template>
        <el-menu-item-group>
          <template slot="title">日志</template>
          <el-menu-item index="3-1">官网日志</el-menu-item>
          <el-menu-item index="3-2">平台日志</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">危险及警告</template>
          <el-menu-item index="3-3">警报信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 统计信息 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-pie-chart"></i>
          <span>统计信息</span>
        </template>
        <el-menu-item-group>
          <template slot="title">统计信息</template>
          <el-menu-item index="4-1">平台信息统计</el-menu-item>
          <el-menu-item index="4-2">用户信息统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 第三方服务管理 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-cloudy"></i>
          <span>第三方服务管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">第三方服务</template>
          <el-menu-item index="5-1">平台接入服务</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 个人服务资源 -->
      <!-- <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-connection"></i>
          <span>个人服务资源管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">个人资源</template>
          <el-menu-item index="6-1">个人资源管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <el-menu-item index="6">
        <i class="el-icon-connection"></i>
        <span slot="title">个人服务资源管理</span>
      </el-menu-item>
      <!-- 个人操作日志 -->
      <!-- <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-connection"></i>
          <span>个人操作日志</span>
        </template>
        <el-menu-item-group>
          <template slot="title">个人日志</template>
          <el-menu-item index="7-1">个人操作日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <el-menu-item index="7">
        <i class="el-icon-postcard"></i>
        <span slot="title">个人操作日志</span>
      </el-menu-item>

    </el-menu>
    </el-col>
    </el-aside>
    <!-- 主要内容 -->
    <el-main style="clear: both;padding: 0px;">
      <router-view/>
    </el-main>
  </el-container>
  </el-container>
  <!-- 展开页面 -->
  <el-drawer
    :title="EldrawerTitle"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="eldrawerClose">
    <!-- 内容 -->
    <span>
      <!-- 个人中心显示内容 -->
      <div>
        
      </div>
      <!-- 待处理事项 -->
    </span>
  </el-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //页面高度
      pageheight:'',
      //导航栏高度
      asideheight:'',
      //页面logo图片url
      PageLogo:'../../static/logo_black.png',
      //抽屉页面显示标志
      drawer: false,
      //抽屉页面显示方向
      direction: 'rtl',
      //新消息
      PendingEvents:13,
      //用户头像
      userimg:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      //抽屉页面标题显示
      EldrawerTitle:'',
    }

  },
  methods: {
    //打开导航栏标签
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    //关闭导航栏标签
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //关闭抽屉
    eldrawerClose(done) {
      done();
    },
    //打开抽屉
    openeldrawer(key){
      //this.$message.error(key);
      if ('pc' == key) {
        //个人中心
        this.EldrawerTitle = '个人中心';
      }else if ('pm' == key) {
        //待处理事项
        this.EldrawerTitle = '未读消息';
      }

        this.drawer = true;
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

