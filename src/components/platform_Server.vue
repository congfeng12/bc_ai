<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
    <el-card style="position: absolute;top: 20px;width: 100%;margin-bottom: 40px;">
       <font style="font-size: 0.9em;font-weight: bolder;">动态获取资源</font>&nbsp&nbsp
      <!-- 心跳服务开关 -->
      <el-switch v-model="dynamicswitch" active-color="#13ce66" inactive-color="#ff4949" style="" ></el-switch>
      <el-divider></el-divider>
      <el-tabs v-model="activeName" @tab-click="handleClick" :tab-position="tabPosition">
        <el-tab-pane label="cpu" name="cpu">
          <!-- 前台定时请求动态资源图 -->
          <div id="dynamicresources" style="width: 100%;height:400px;"></div>
        </el-tab-pane>
        <el-tab-pane label="内存" name="2">内存</el-tab-pane>
        <el-tab-pane label="硬盘" name="3">硬盘</el-tab-pane>
        <el-tab-pane label="网络" name="4">网络</el-tab-pane>
      </el-tabs>
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
      activeName: 'cpu',
      tabPosition:'top',
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
    
      // startsi(){
      //   var _this=this;
      //   var appcount = 11;
      //   this.interval = setInterval(function (){
      //     var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

      //     var data0 = _this.dynamicoption.series.data;
      //     //var data1 = _this.dynamicoption.series[1].data;
      //     data0.shift();
      //     data0.push(Math.random() * 30);
      //     // data1.shift();
      //     // data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

      //     _this.dynamicoption.xAxis[0].data.shift();
      //     _this.dynamicoption.xAxis[0].data.push(axisData);
      //     _this.dynamicoption.xAxis[1].data.shift();
      //     _this.dynamicoption.xAxis[1].data.push(appcount++);

      //     _this.dynamimyChart.setOption(_this.dynamicoption);
      //     console.log();
      //   }, 10000000);
      // },



    },
  created(){
    //页面加载时执行
    
  },
  mounted(){
    //console.log(this);
    //页面加载后执行
    var echarts = require('echarts');
    // 基于准备好的dom，初始化echarts实例
    this.dynamimyChart = echarts.init(document.getElementById('dynamicresources'));
    // for (var i = 0; i < 1000; i++) {
    //     this.data.push(this.randomData());
    // }

    this.dynamicoption = 
    // {
    // title: {
    //     text: 'CPU使用实时动态数据',
    //     subtext: '虚拟数据'
    // },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'cross',
    //         label: {
    //             backgroundColor: '#283b56'
    //         }
    //     }
    // },
    // legend: {
    //     data:['cpu使用量（百分比）']
    // },
    // toolbox: {
    //     show: false,
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    // dataZoom: {
    //     show: false,
    //     start: 0,
    //     end: 100
    // },
    // xAxis: [
    //     {
    //         type: 'category',
    //         boundaryGap: true,
    //         data: (function (){
    //             var now = new Date();
    //             var res = [];
    //             var len = 10;
    //             while (len--) {
    //                 res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
    //                 now = new Date(now - 5000);
    //             }
    //             return res;
    //         })()
    //     },
    //     {
    //         type: 'category',
    //         boundaryGap: true,
    //         data: (function (){
    //             var res = [];
    //             var len = 10;
    //             while (len--) {
    //                 res.push(10 - len - 1);
    //             }
    //             return res;
    //         })()
    //     },
        
    // ],
    // yAxis: [
    //     {
    //         type: 'value',
    //         scale: true,
    //         name: '使用资源量',
    //         max: 100,
    //         min: 0,
    //         boundaryGap: [0.2, 0.2]
    //     },
    //     {
    //         type: 'value',
    //         scale: true,
    //         name: '请求次数',
    //         max: 100,
    //         min: 0,
    //         boundaryGap: [0.2, 0.2]
    //     },
        
        
    // ],
    // series: 
    //     {
    //         name:'CPU使用量（百分比）',
    //         type:'bar',
    //         xAxisIndex: 1,
    //         yAxisIndex: 1,
    //         data:(function (){
    //             var res = [];
    //             var len = 10;
    //             while (len--) {
    //                 res.push(Math.random() * 30);
    //             }
    //             return res;
    //         })()
    //     },
    // };
    
    {
    // color: ['#3398DB'],
    title: {
        text: 'CPU使用量（百分比）',
        subtext: '单位 - %'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['S100-001', 'S100-002', 'S100-003', 'S100-004', 'S100-005', 'S100-006', 'S100-007'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            max:100,
        }
    ],
    series : [
        {
            name:'CPU使用率',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 20, 33, 39, 30, 21]
        }
    ]
    };
    //初始化图样
    this.dynamimyChart.setOption(this.dynamicoption);
    //心跳更新数据
    //var _this=this;
    //this.startsi();


  }
}
</script>
<style>
.el-divider--horizontal{
  margin: 10px 0 !important;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->