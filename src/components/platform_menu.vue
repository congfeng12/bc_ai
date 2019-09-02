<template>
  <div style="width: 100%;background-color: #F2F6FC;height: 100%;" >
    <el-container style="height: 100%">
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
            <el-breadcrumb-item :to="{ path: '/platform_menu' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 个人中心 -->
        <div style="height: 100%;width: 300px;float: right;">
          <!-- 个人界面 -->
          <a href="javascript:void(0)" @click="openeldrawer()">
            <div style="float: right;margin-top: 8px;margin-right: 20px;" >
              <el-avatar  :src="userimg"></el-avatar>
            </div>
          </a>
        </div>
      </el-header>
    <el-container>
    <!-- 导航栏 -->
    <el-aside width="260px" style="background-color: #FFFFFF;clear: both;box-shadow: #EBEEF5 2px 2px 10px 0px;">
    <el-col style="clear: both;">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="this.$router.path"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect">
      <!-- 资源管理 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-folder-opened"></i>
          <span>资源管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">网站主要资源管理</template>
           <!-- 二级菜单 -->
          <el-menu-item index="/platform_menu/staticresources">官网静态资源</el-menu-item>
          <el-menu-item index="/platform_menu/server">服务器资源</el-menu-item>
          <el-menu-item index="/platform_menu/backgroundService">后台服务资源</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">网站其他资源管理</template>
          <!-- 二级菜单 -->
          <el-menu-item index="/platform_menu/notices">官网公告资源</el-menu-item>
          <el-menu-item index="/platform_menu/milestone">里程碑资源</el-menu-item>
          <el-menu-item index="/platform_menu/report">调查报告资源</el-menu-item>
          <el-menu-item index="/platform_menu/work">空缺职位资源</el-menu-item>
          <el-menu-item index="/platform_menu/timeaxis">时间轴资源</el-menu-item>
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
          <el-menu-item index="/platform_menu/account">平台账号</el-menu-item>
          <el-menu-item index="/platform_menu/admin">平台管理员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 日志 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-notebook-1"></i>
          <span>日志&信息</span>
        </template>
        <el-menu-item-group>
          <template slot="title">日志</template>
          <el-menu-item index="/platform_menu/logs">操作日志</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">统计信息</template>
          <el-menu-item index="/platform_menu/statistics">统计信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      </el-submenu>
       <el-menu-item index="/platform_menu/personalcenter">
        <i class="el-icon-connection"></i>
        <span slot="title">服务资源中心</span>
      </el-menu-item>
      <!-- 个人操作日志 --> 
      <el-menu-item index="/platform_menu/personallogs">
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
    title="个人中心"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="eldrawerClose">
    <!-- 内容 -->
    <span>
      <!-- 个人中心显示内容 -->
      <div>
        <div style="margin: 0 auto 0;width: 60px;" >
          <!-- 头像 -->
          <el-avatar :size="60"  :src="userimg"></el-avatar>
        </div>
        <!-- 名称 -->
        <div style="clear: both;width: 150px;height: auto;margin: 0 auto 0;">
          <h3 style="margin: 5px 0px 0px 0px;text-align: center;">
            <font style="font-size: 0.8em;font-weight: normal;">congfeng</font>
          </h3>
        </div>
        <!-- 身份标识 -->
        <div style="clear: both;width: 300px;height: auto;margin: 0 auto 0;margin-top: 8px;text-align: center;">
          <el-tag size="small" :type="PCType">平台管理员</el-tag>
        </div>
        <!-- 个人信息卡片 -->
        <div style="width: 400px;height: auto;margin: 0 auto 0;margin-top: 20px;">
          <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:40px 0px 0px 0px;">
            <!-- 电子邮箱 -->
            <div style="position: relative;">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%">
                  <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">电子邮箱</b>
                  <b style="color: #303133;font-size: 0.5em;letter-spacing: 0;font-weight: bolder;position: absolute;left: 130px;top: 13px;">congfeng12@163.com</b>
                  <el-tooltip class="item" effect="dark" content="更改绑定的电子邮箱" placement="top-start">
                    <el-link type="primary" style="float: right;padding: 3px 0px 0px 0px;font-size: 0.5em;">设置</el-link>
                  </el-tooltip>
                </li>
            </div>
            <!-- 电话 -->
            <div style="position: relative;">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%;">
                  <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">电话</b>
                  <b style="color: #303133;font-size: 0.5em;letter-spacing: 0;font-weight: bolder;position: absolute;left: 130px;top: 13px;">183****0269</b>
                  <el-tooltip class="item" effect="dark" content="更改绑定的手机号码" placement="top-start">
                    <el-link type="primary" style="float: right;padding: 3px 0px 0px 0px;font-size: 0.5em;">设置</el-link>
                  </el-tooltip>
                </li>
            </div>
            <!-- 姓名 -->
            <div style="position: relative;">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%">
                  <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">姓名</b>
                  <b style="color: #303133;font-size: 0.5em;letter-spacing: 0;font-weight: bolder;position: absolute;left: 130px;top: 13px;">丛枫</b>
                </li>
            </div>
            <!-- 身份信息 -->
            <div style="position: relative;">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%">
                  <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">身份证号码</b>
                  <b style="color: #303133;font-size: 0.5em;letter-spacing: 0;font-weight: bolder;position: absolute;left: 130px;top: 13px;">152223********0014</b>
                </li>
            </div>
            <!-- 注册日期 -->
            <div style="position: relative;">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%">
                  <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">注册日期</b>
                  <b style="color: #303133;font-size: 0.5em;letter-spacing: 0;font-weight: bolder;position: absolute;left: 130px;top: 13px;">2019年8月9日</b>
                </li>
            </div>
            <!-- 账户余额 -->
             <div style="position: relative;">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%">
                  <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">账户余额（¥）</b>
                  <b style="color: #303133;font-size: 0.5em;letter-spacing: 0;font-weight: bolder;position: absolute;left: 130px;top: 13px;">999.99</b>
                  <el-tooltip class="item" effect="dark" content="目前充值只做测试和平台开发者的打赏" placement="top-start">
                    <el-link type="primary" style="float: right;padding: 3px 0px 0px 0px;font-size: 0.5em;">充值</el-link>
                  </el-tooltip>
                </li>
            </div>
            <!-- 上次登录位置 -->
            <div style="position: relative;">
                <li style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%">
                  <b style="color: #C0C4CC;font-size: 0.5em;letter-spacing: 0.2em;font-weight: bolder;text-transform: uppercase;">上次登录位置</b>
                  <b style="color: #303133;font-size: 0.5em;letter-spacing: 0;font-weight: bolder;position: absolute;left: 130px;top: 13px;">浙江省·杭州市</b>
                </li>
            </div>
          </ol>
        </div>
        <!-- 按钮 -->
        <div style="width: 280px;height: auto;margin: 0 auto 0;margin-top: 370px;">
          <!-- 检查客户端设置 -->
          <el-tooltip class="item" effect="dark" content="检查客户端设置" placement="top-start">
            <el-button icon="el-icon-monitor" circle></el-button>
          </el-tooltip>
          <!-- 修改密码 -->
          <el-button type="warning" round>修改密码</el-button>
          <!-- 注销登录 -->
          <el-button type="danger" round>注销登录</el-button>
        </div>
      </div>
    </span>
  </el-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      //个人身份标签类型
      PCType:'',
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
    handleSelect(key, keyPath){
      console.log(key, keyPath);
    },
    //关闭抽屉
    eldrawerClose(done) {
      done();
    },
    //打开抽屉
    openeldrawer(){
      //个人中心
      this.drawer = true;
      this.PCType='';
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
<style>
.el-input__inner{
  border-radius: 50px !important;
}
</style>

