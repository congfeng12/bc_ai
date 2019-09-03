<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
    <el-card style="position: absolute;top: 20px;width: 100%;margin-bottom: 40px;">
       <font style="font-size: 0.9em;font-weight: bolder;">动态获取资源</font>&nbsp&nbsp
      <!-- 心跳服务开关 -->
      <el-switch v-model="dynamicswitch" active-color="#13ce66" inactive-color="#ff4949" style="" ></el-switch>
      <el-divider></el-divider>
      <!-- <el-tabs v-model="activeName" @tab-click="handleClick" :tab-position="tabPosition">
        <el-tab-pane label="cpu" name="cpu">
         
        </el-tab-pane>
        <el-tab-pane label="内存" name="2">内存</el-tab-pane>
        <el-tab-pane label="硬盘" name="3">硬盘</el-tab-pane>
        <el-tab-pane label="网络" name="4">网络</el-tab-pane>
      </el-tabs>
      <el-divider></el-divider> -->
       <!-- 前台定时请求动态资源图 -->
      <div id="cpu" style="width: 100%;height:400px;"></div>
      <!-- 内存 -->

      <!-- 硬盘 -->
      <!-- 网络 -->
      <el-divider></el-divider>
      <!-- 服务器资源信息表 -->
      <h3 style="margin: 0px 0px 0px 5px;">
        <font style="font-size: 0.9em;">服务器资源信息表</font>
      </h3>
      <!-- 增加服务器 -->
      <el-button size="mini" icon="el-icon-plus" type="primary" plain style="position: absolute;right: 20px;top: 540px;">添加服务器</el-button>
      <div v-for="(service,index) in Services" style="width: 100%;height: 190px;position: relative;">
        <el-divider v-if="index !== 0 "></el-divider>
        <!-- 服务器编号名称 -->
        <div style="width: auto;height: auto;position: absolute;top: 10px;left: 40px;">
        <h3>
          <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">服务器编号名称:</font>
          <font style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">{{service.serviceid}}</font>
        </h3>
        </div>
         <!-- 服务器属性 -->
        <div style="width: auto;height: auto;position: absolute;top: 10px;left: 440px;">
        <h3>
          <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">服务器属性:</font>
          <font style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">
            <el-tag size="small" effect="plain" v-if="service.serviceproperties ==='Host'">主机</el-tag>
            <el-tag type="warning" effect="plain" size="small" v-else-if="service.serviceproperties ==='Subordinate'">从机</el-tag>
            <el-tag type="info" effect="plain" size="small" v-else>未知状态</el-tag>
          </font>
        </h3>
        </div>
        <!-- cpu数量 -->
        <div style="width: auto;height: auto;position: absolute;top: 50px;left: 40px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">CPU数量:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.cpunumber}}</font>
        </h3>
        </div>
         <!-- 内存大小 -->
        <div style="width: auto;height: auto;position: absolute;top: 50px;left: 230px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">内存大小:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.memorysize}}</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">KByte</font>
        </h3>
        </div>
          <!-- 磁盘大小 -->
        <div style="width: auto;height: auto;position: absolute;top: 50px;left: 520px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">磁盘大小:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.harddisksize}}</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">KByte</font>
        </h3>
        </div>
        <!-- 服务器ip -->
        <div style="width: auto;height: auto;position: absolute;top: 50px;left: 820px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">服务器ip:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.ipnumber}}</font>
        </h3>
        </div>
        <!-- MAC Addr -->
        <div style="width: auto;height: auto;position: absolute;top: 90px;left: 40px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">MAC地址:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.macaddr}}</font>
        </h3>
        </div>
        <!-- 操作系统的名称 -->
        <div style="width: auto;height: auto;position: absolute;top: 90px;left: 340px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">操作系统:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.osname}}</font>
        </h3>
        </div>
        <!-- 操作系统版本 -->
        <div style="width: auto;height: auto;position: absolute;top: 90px;left: 560px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">操作系统版本:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.osversion}}</font>
        </h3>
        </div>
        <!-- 操作用户 -->
        <div style="width: auto;height: auto;position: absolute;top: 90px;left: 820px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">操作用户:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.pcusername}}</font>
        </h3>
        </div>
        <!-- 服务器创建时间 -->
        <div style="width: auto;height: auto;position: absolute;top: 130px;left: 40px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">服务器创建时间:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.creatdate}}</font>
        </h3>
        </div>
        <!-- 服务器创建用户 -->
        <div style="width: auto;height: auto;position: absolute;top: 130px;left: 340px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">服务器创建用户:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{service.creatuser}}</font>
        </h3>
        </div>
        <!-- 服务器状态 -->
        <div style="width: auto;height: auto;position: absolute;top: 130px;left: 820px;">
        <h3>
          <font style="color: #909399;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">服务器状态:</font>
          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">
            <el-tag type="success" size="small" v-if="service.servicetype ==='success'">正常</el-tag>
            <el-tag type="warning" size="small" v-else-if="service.servicetype === 'warning'">锁定</el-tag>
            <el-tag type="danger" size="small" v-else-if="service.servicetype === 'danger'">异常</el-tag>
            <el-tag type="info" size="small" v-else>未知状态</el-tag>
          </font>
        </h3>
        </div>
        <!-- 锁定服务器信息 -->
        <el-button size="mini" icon="el-icon-lock" type="warning" plain style="position: absolute;right: 0px;bottom:100px;" v-if="index !== 0 ">锁定</el-button>
        <!-- 解锁服务器信息 -->
        <el-button size="mini" icon="el-icon-unlock" type="success" plain style="position: absolute;right: 0px;bottom:70px;" v-if="index !== 0 ">解锁</el-button>
        <!-- 编辑服务器信息 -->
        <el-button size="mini" icon="el-icon-edit" type="primary" plain style="position: absolute;right: 0px;bottom:40px;" v-if="index !== 0 ">编辑</el-button>
        <!-- 删除服务器 -->
        <el-button size="mini" icon="el-icon-minus" type="danger" plain style="position: absolute;right: 0px;bottom:10px;" v-if="index !== 0 " @click="deleteservice(index,service.serviceid)">删除</el-button>
      </div>
    <!-- 提示框 -->
    </el-card>
    </div>
  </div>
</template>
<script>
    // var data = [];
    // var now = +new Date(1997, 9, 3);
    // var oneDay = 24 * 3600 * 1000;
    // var value = Math.random() * 1000;
    // var echarts = require('echarts');
    // // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById('main'));
export default {
  data () {
    return {
      //页面高度
      //pageheight:'',
      //activeNames: ['1'],
      dialogVisible: false,
      // activeName: 'cpu',
      // tabPosition:'top',
      dynamicswitch: true,
      //动态实时信息
      dynamicoption:{},
      //历史资源数据信息
      historycoption:{},
      //
      interval:'',
      //图表曲线颜色
      colors :['#5793f3', '#d14a61', '#675bba'],
      //实时动态信息
      dynamimyChart:null,
      //历史数据
      historymyChart:null,
      //服务器信息列表
      Services: [
        {
        //服务器id编号
        serviceid:'S100-001',
        //服务器属性
        serviceproperties:'Host',
        //服务器资源说明表
        cpunumber:'8',
        //内存大小
        memorysize:'16777216',
        //硬盘大小
        harddisksize:'234095152',
        //服务器ip
        ipnumber:'172.16.18.9',
        //macaddr
        macaddr:'00:0e:c6:b6:85:8c',
        //操作系统
        osname:'Mac OS X',
        //操作系统版本号
        osversion:'10.14.6',
        //操作用户
        pcusername:'congfeng',
        //服务器创建时间
        creatdate:'2019-07-21',
        //创建用户
        creatuser:'cmaple',
        //服务器状态
        servicetype:'success',
        },
        {
        //服务器id编号
        serviceid:'S100-002',
        //服务器属性
        serviceproperties:'Subordinate',
        //服务器资源说明表
        cpunumber:'8',
        //内存大小
        memorysize:'16777216',
        //硬盘大小
        harddisksize:'234095152',
        //服务器ip
        ipnumber:'172.16.18.9',
        //macaddr
        macaddr:'00:0e:c6:b6:85:8c',
        //操作系统
        osname:'Mac OS X',
        //操作系统版本号
        osversion:'10.14.6',
        //操作用户
        pcusername:'congfeng',
        //服务器创建时间
        creatdate:'2019-07-21',
        //创建用户
        creatuser:'cmaple',
        //服务器状态
        servicetype:'warning',
        },
        {
        //服务器id编号
        serviceid:'S100-003',
        //服务器属性
        serviceproperties:'Subordinate',
        //服务器资源说明表
        cpunumber:'8',
        //内存大小
        memorysize:'16777216',
        //硬盘大小
        harddisksize:'234095152',
        //服务器ip
        ipnumber:'172.16.18.9',
        //macaddr
        macaddr:'00:0e:c6:b6:85:8c',
        //操作系统
        osname:'Mac OS X',
        //操作系统版本号
        osversion:'10.14.6',
        //操作用户
        pcusername:'congfeng',
        //服务器创建时间
        creatdate:'2019-07-21',
        //创建用户
        creatuser:'cmaple',
        //服务器状态
        servicetype:'danger',
        },
       {
        //服务器id编号
        serviceid:'S100-004',
        //服务器属性
        serviceproperties:'Subordinate',
        //服务器资源说明表
        cpunumber:'8',
        //内存大小
        memorysize:'16777216',
        //硬盘大小
        harddisksize:'234095152',
        //服务器ip
        ipnumber:'172.16.18.9',
        //macaddr
        macaddr:'00:0e:c6:b6:85:8c',
        //操作系统
        osname:'Mac OS X',
        //操作系统版本号
        osversion:'10.14.6',
        //操作用户
        pcusername:'congfeng',
        //服务器创建时间
        creatdate:'2019-07-21',
        //创建用户
        creatuser:'cmaple',
        //服务器状态
        servicetype:'success',
        },
        {
        //服务器id编号
        serviceid:'S100-005',
        //服务器属性
        serviceproperties:'Subordinate',
        //服务器资源说明表
        cpunumber:'8',
        //内存大小
        memorysize:'16777216',
        //硬盘大小
        harddisksize:'234095152',
        //服务器ip
        ipnumber:'172.16.18.9',
        //macaddr
        macaddr:'00:0e:c6:b6:85:8c',
        //操作系统
        osname:'Mac OS X',
        //操作系统版本号
        osversion:'10.14.6',
        //操作用户
        pcusername:'congfeng',
        //服务器创建时间
        creatdate:'2019-07-21',
        //创建用户
        creatuser:'cmaple',
        //服务器状态
        servicetype:'success',
        },
        {
        //服务器id编号
        serviceid:'S100-006',
        //服务器属性
        serviceproperties:'Subordinate',
        //服务器资源说明表
        cpunumber:'8',
        //内存大小
        memorysize:'16777216',
        //硬盘大小
        harddisksize:'234095152',
        //服务器ip
        ipnumber:'172.16.18.9',
        //macaddr
        macaddr:'00:0e:c6:b6:85:8c',
        //操作系统
        osname:'Mac OS X',
        //操作系统版本号
        osversion:'10.14.6',
        //操作用户
        pcusername:'congfeng',
        //服务器创建时间
        creatdate:'2019-07-21',
        //创建用户
        creatuser:'cmaple',
        //服务器状态
        servicetype:'success',
        },
        {
        //服务器id编号
        serviceid:'S100-007',
        //服务器属性
        serviceproperties:'Subordinate',
        //服务器资源说明表
        cpunumber:'8',
        //内存大小
        memorysize:'16777216',
        //硬盘大小
        harddisksize:'234095152',
        //服务器ip
        ipnumber:'172.16.18.9',
        //macaddr
        macaddr:'00:0e:c6:b6:85:8c',
        //操作系统
        osname:'Mac OS X',
        //操作系统版本号
        osversion:'10.14.6',
        //操作用户
        pcusername:'congfeng',
        //服务器创建时间
        creatdate:'2019-07-21',
        //创建用户
        creatuser:'cmaple',
        //服务器状态
        servicetype:'success',
        },

      ],
      



    }
  },
  methods: {
      handleChange(val) {
        console.log(val);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleswitch(){
        if (this.dynamicswitch==true) {
              this.$message({
                message: '心跳服务已开启！',
                type: 'success'
              });
          
              if (this.interval == null) {
                this.startsi();
              }
       }else{
          this.$message({
            message: '注意，心跳服务已关闭！',
            type: 'warning'
          });
          window.clearInterval(this.interval);
          this.interval = null;
      }
      },
    randomData() {
    this.now = new Date(+this.now + this.oneDay);
    this.value = this.value + Math.random() * 21 - 10;
    return {
        name: this.now.toString(),
        value: [
            [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
            Math.round(this.value)
        ]
        }
      },
      deleteservice(index,serviceid){
          this.$confirm('此操作将永久删除'+serviceid+', 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除'+serviceid+'服务器成功！'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },

    },
  created(){
    //页面加载时执行
    
  },
  mounted(){
    //console.log(this);
    //页面加载后执行
    var echarts = require('echarts');
    // 基于准备好的dom，初始化echarts实例
    //cpu动态信息
    this.cpumyChart = echarts.init(document.getElementById('cpu'));
    this.cpucoption=
      {
          title: {
              text: '主机CPU使用率'
          },
          tooltip: {
              trigger: 'axis',
              formatter: "{a} <br/>{b} : {c}%"
          },
          legend: {
              data:['主机CPU使用率']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['11:54:31','11:54:33','11:54:35','11:54:37','11:54:39','11:54:41','11:54:43','11:54:45','11:54:47','11:54:49',]
          },
          yAxis: {
              type: 'value',
              axisLabel: {
                  formatter: '{value} %'
              },
              max : 100
          },
          series: [
              {
                  name:'主机CPU使用率',
                  type:'line',
                  stack: '总量',
                  data:[22.2, 23.4, 12.5, 21.7, 45.8, 32.6, 79.2,23.4,23.5,12.4],
                  markPoint: {
                      data: [
                          {type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}
                      ]
                  },
                  markLine : { //添加警戒线
                    symbol:'none', //去掉警戒线最后面的箭头
                    name:'警戒线',
                    label:{
                      position:'middle', //将警示值放在哪个位置，三个值“start”,“middle”,“end” 开始 中点 结束
                      formatter: '警戒线' +95+ '%',
                    },
                    data : 
                    [{
                     
                      lineStyle:{ //警戒线的样式 ，虚实 颜色
                        type:'average',
                      },
                      name: '警戒线',
                      yAxis: 95
                    }]
                    }
              },
          ]
      };
    //初始化图样
    this.cpumyChart.setOption(this.cpucoption);
    


  }
}
</script>
<style>
.el-divider--horizontal{
  margin: 10px 0 !important;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->