<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
        <!-- 小标签数量显示 -->
        <div style="position: absolute;top: 20px;width: 100%;height: auto;margin-bottom: 20px;">
          <div style="width: 100%;height: 300px;">
            <el-row :gutter="12">
              <!-- 今日官网访问量 #1296db-->
              <el-col :span="6">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                  <!-- 图片 -->
                  <img src="../../static/guanwangfangwen.png" style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;">
                  <!-- 标题 -->
                  <h3 style="margin:30px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">今日官网访问量</font>
                  </h3>
                  <!-- 数据 -->
                   <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #1296db;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;">12,951</font>
                  </h3>
                  <!-- 截止时间 -->
                  <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">统计截止：</font>
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">2019-08-29 10:10:32</font>
                  </h3>
                </el-card>
              </el-col>
               <!-- 今日平台访问量 -->
              <el-col :span="6">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                  <!-- 图片 -->
                  <img src="../../static/pingtaifangwen.png" style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;">
                  <!-- 标题 -->
                  <h3 style="margin:30px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">今日平台访问量</font>
                  </h3>
                  <!-- 数据 -->
                   <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #ea9518;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;">89,986</font>
                  </h3>
                  <!-- 截止时间 -->
                  <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">统计截止：</font>
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">2019-08-29 10:10:32</font>
                  </h3>
                </el-card>
              </el-col>
              <!-- 今日用户注册量 -->
              <el-col :span="6">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                   <!-- 图片 -->
                  <img src="../../static/zhuce.png" style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;">
                  <!-- 标题 -->
                  <h3 style="margin:30px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">今日用户注册量</font>
                  </h3>
                  <!-- 数据 -->
                   <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #2aa515;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;">1,329</font>
                  </h3>
                  <!-- 截止时间 -->
                  <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">统计截止：</font>
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">2019-08-29 10:10:32</font>
                  </h3>
                </el-card>
              </el-col>
              <!-- 今日异常日志数量 -->
              <el-col :span="6">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                    <!-- 图片 -->
                  <img src="../../static/yichang.png" style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;">
                  <!-- 标题 -->
                  <h3 style="margin:30px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">今日异常日志数量</font>
                  </h3>
                  <!-- 数据 -->
                   <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #d81e06;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;">0</font>
                  </h3>
                  <!-- 截止时间 -->
                  <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">统计截止：</font>
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">2019-08-29 10:10:32</font>
                  </h3>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <!-- 图表统计分析 -->
          <div style="width: 100%;height: auto;margin-top: 10px;">
            <el-row :gutter="12">
              <el-col :span="12">
                <!-- 最近一周的官方服务使用量 -->
                <el-card shadow="hover" style="height: auto;margin-bottom: 10px;">
                  <!-- 标题 -->
                  <h3 style="margin:0px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">最近一周的官方服务使用量</font>
                  </h3>
                  <div id="servicelineusage" style="width: 100%;height: 400px;"></div>
                </el-card>
              </el-col>
              <el-col :span="12">
                <!-- 最近一周用户数量变化 -->
                <el-card shadow="hover" style="height: auto;margin-bottom: 10px;">
                  <!-- 标题 -->
                  <h3 style="margin:0px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">最近一周用户数量变化</font>
                  </h3>
                  <div id="usersnumlinesticsusage" style="width: 100%;height: 400px;"></div>
                </el-card>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="12">
                <!-- 最近一周第三方服务上线申请、上线数量统计 -->
                <el-card shadow="hover" style="height: auto;margin-bottom: 10px;">
                  <!-- 标题 -->
                  <h3 style="margin:0px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">最近一周第三方服务上线申请、上线数量统计</font>
                  </h3>
                  <div id="thirdpartyservices" style="width: 100%;height: 400px;"></div>
                </el-card>
              </el-col>
              <el-col :span="12">
                <!-- 最近一周官方服务异常服务统计 -->
                <el-card shadow="hover" style="height: auto;margin-bottom: 10px;">
                  <!-- 标题 -->
                  <h3 style="margin:0px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">最近一周官方服务异常服务统计</font>
                  </h3>
                  <div id="serviceexceptions" style="width: 100%;height: 400px;"></div>
                </el-card>
              </el-col>
            </el-row>
            <div style="width: 100%;height: 300px;margin-bottom: 10px;">
            <el-row :gutter="12">
              <!-- 挂载服务器数量 #7dc5eb-->
              <el-col :span="8">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                  <!-- 图片 -->
                  <img src="../../static/fuwuqi.png" style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;">
                  <!-- 标题 -->
                  <h3 style="margin:30px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">挂载服务器数量</font>
                  </h3>
                  <!-- 数据 -->
                   <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #7dc5eb;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;">12,951</font>
                  </h3>
                  <!-- 截止时间 -->
                  <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">统计截止：</font>
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">2019-08-29 10:10:32</font>
                  </h3>
                </el-card>
              </el-col>
               <!-- 官方在线服务数量 -->
              <el-col :span="8">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                  <!-- 图片 -->
                  <img src="../../static/yunfuwu.png" style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;">
                  <!-- 标题 -->
                  <h3 style="margin:30px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">官方在线服务数量</font>
                  </h3>
                  <!-- 数据 -->
                   <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #e8989a;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;">89,986</font>
                  </h3>
                  <!-- 截止时间 -->
                  <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">统计截止：</font>
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">2019-08-29 10:10:32</font>
                  </h3>
                </el-card>
              </el-col>
              <!-- 第三方在线服务数量 -->
              <el-col :span="8">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                   <!-- 图片 -->
                  <img src="../../static/disanfangbangding.png" style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;">
                  <!-- 标题 -->
                  <h3 style="margin:30px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">第三方在线服务数量</font>
                  </h3>
                  <!-- 数据 -->
                   <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #7cba59;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;">1,329</font>
                  </h3>
                  <!-- 截止时间 -->
                  <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">统计截止：</font>
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">2019-08-29 10:10:32</font>
                  </h3>
                </el-card>
              </el-col>
              <!-- 注册用户数 -->
              <!-- <el-col :span="6">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                  <img src="../../static/yichang.png" style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;">
                  <h3 style="margin:30px 0px 0px 0px;">
                    <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">注册用户数</font>
                  </h3>
           
                   <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #d81e06;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;">0</font>
                  </h3>
            
                  <h3 style="margin:20px 0px 0px 0px;">
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">统计截止：</font>
                    <font style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">2019-08-29 10:10:32</font>
                  </h3>
                </el-card>
              </el-col> -->
            </el-row>
          </div>
            <!-- 官方服务使用趋势图（所有服务数量总和） -->
            <el-card shadow="hover" style="height: auto;margin-bottom: 10px;">
              <!-- 标题 -->
              <h3 style="margin:0px 0px 0px 0px;">
                <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">官方服务使用趋势图（所有服务数量总和）</font>
              </h3>
              <div id="servicesallusage" style="width: 100%;height: 600px;"></div>
            </el-card>
            <!-- 官方服务使用量统计 -->
            <el-card shadow="hover" style="height: auto;">
              <!-- 标题 -->
              <h3 style="margin:0px 0px 0px 0px;">
                <font style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;">官方服务使用量统计</font>
              </h3>
              <div id="servicestatisticsusage" style="width: 100%;height: 600px;"></div>
            </el-card>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //最近一周服务使用折线图
      servicelineChart:'',
      servicelineoption:'',
      //用户数量变化统计
      usersnumlineChart:'',
      usersnumlineoption:'',
      //最近一周第三方服务上线申请、上线数量统计
      thirdpartyservicesChart:'',
      thirdpartyservicesoption:'',
      //最近一周官方服务异常服务统计
      serviceexceptionsChart:'',
      serviceexceptionsoption:'',
      //官方服务使用趋势图（所有服务数量总和）
      servicesallChart:'',
      servicesalloption:'',
      //服务总量统计
      servicestatisticsChart:'',
      servicestatisticsoption:'',
      
      }
  },
  methods: {  

    },
  created(){
    //页面加载时执行
    
  },
  mounted(){
    //页面加载后执行
    var echarts = require('echarts');
    // 基于准备好的dom，初始化echarts实例
    //最近一周使用趋势
    this.servicelineChart = echarts.init(document.getElementById('servicelineusage'));
    this.servicelineoption = 
            {
              // title: {
              //     text: '堆叠区域图'
              // },
              tooltip : {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'cross',
                      label: {
                          backgroundColor: '#6a7985'
                      }
                  }
              },
              legend: {
                  data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
              },
              // toolbox: {
              //     feature: {
              //         saveAsImage: {}
              //     }
              // },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis : [
                  {
                      type : 'category',
                      boundaryGap : false,
                      data : ['周一','周二','周三','周四','周五','周六','周日']
                  }
              ],
              yAxis : [
                  {
                      type : 'value'
                  }
              ],
              series : [
                  {
                      name:'邮件营销',
                      type:'line',
                      stack: '总量',
                      areaStyle: {},
                      data:[120, 132, 101, 134, 90, 230, 210]
                  },
                  {
                      name:'联盟广告',
                      type:'line',
                      stack: '总量',
                      areaStyle: {},
                      data:[220, 182, 191, 234, 290, 330, 310]
                  },
                  {
                      name:'视频广告',
                      type:'line',
                      stack: '总量',
                      areaStyle: {},
                      data:[150, 232, 201, 154, 190, 330, 410]
                  },
                  {
                      name:'直接访问',
                      type:'line',
                      stack: '总量',
                      areaStyle: {normal: {}},
                      data:[320, 332, 301, 334, 390, 330, 320]
                  },
                  {
                      name:'搜索引擎',
                      type:'line',
                      stack: '总量',
                      label: {
                          normal: {
                              show: true,
                              position: 'top'
                          }
                      },
                      areaStyle: {normal: {}},
                      data:[820, 932, 901, 934, 1290, 1330, 1320]
                  }
              ]
          };
    this.servicelineChart.setOption(this.servicelineoption);
    //用户数量变化
    this.usersnumlineChart = echarts.init(document.getElementById('usersnumlinesticsusage'));
    this.usersnumlineoption = 
            {
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data:['用户数量']
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
                  data: ['周一','周二','周三','周四','周五','周六','周日']
              },
              yAxis: {
                  type: 'value'
              },
              series: [
                  {
                      name:'用户数量',
                      type:'line',
                      stack: '总量',
                      data:[120, 122, 132, 134, 134, 230, 231]
                  },
              ]
          };
    this.usersnumlineChart.setOption(this.usersnumlineoption);

    //最近一周第三方服务上线申请、上线数量统计
    this.thirdpartyservicesChart = echarts.init(document.getElementById('thirdpartyservices'));
    this.thirdpartyservicesoption = 
          {
              tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              legend: {
                  data: ['上线申请', '上线成功']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis:  {
                  type: 'value'
              },
              yAxis: {
                  type: 'category',
                  data: ['周一','周二','周三','周四','周五','周六','周日']
              },
              series: [
                  {
                      name: '上线申请',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          normal: {
                              show: true,
                              position: 'insideRight'
                          }
                      },
                      data: [320, 302, 301, 334, 390, 330, 320]
                  },
                  {
                      name: '上线成功',
                      type: 'bar',
                      stack: '总量',
                      label: {
                          normal: {
                              show: true,
                              position: 'insideRight'
                          }
                      },
                      data: [120, 132, 101, 134, 90, 230, 210]
                  },
                  
              ]
          };
    this.thirdpartyservicesChart.setOption(this.thirdpartyservicesoption);


    //最近一周官方服务异常服务统计
    this.serviceexceptionsChart = echarts.init(document.getElementById('serviceexceptions'));
    this.serviceexceptionsoption = 
          {
              tooltip: {
                  trigger: 'axis'
              },
              legend: {
                  data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
                  data: ['周一','周二','周三','周四','周五','周六','周日']
              },
              yAxis: {
                  type: 'value'
              },
              series: [
                  {
                      name:'邮件营销',
                      type:'line',
                      stack: '总量',
                      data:[120, 132, 101, 134, 90, 230, 210]
                  },
                  {
                      name:'联盟广告',
                      type:'line',
                      stack: '总量',
                      data:[220, 182, 191, 234, 290, 330, 310]
                  },
                  {
                      name:'视频广告',
                      type:'line',
                      stack: '总量',
                      data:[150, 232, 201, 154, 190, 330, 410]
                  },
                  {
                      name:'直接访问',
                      type:'line',
                      stack: '总量',
                      data:[320, 332, 301, 334, 390, 330, 320]
                  },
                  {
                      name:'搜索引擎',
                      type:'line',
                      stack: '总量',
                      data:[820, 932, 901, 934, 1290, 1330, 1320]
                  }
              ]
          };
    this.serviceexceptionsChart.setOption(this.serviceexceptionsoption);
    //官方服务使用趋势图（所有服务数量总和）
    var data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];

    var dateList = data.map(function (item) {
      return item[0];
    });
    var valueList = data.map(function (item) {
      return item[1];
    });
    this.servicesallChart = echarts.init(document.getElementById('servicesallusage'));
    this.servicesalloption = 
          {
              // Make gradient line here
             
              tooltip: {
                  trigger: 'axis'
              },
              xAxis: [{
                  data: dateList
              }],
              yAxis: [{
                  splitLine: {show: false}
              }],
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              series: [{
                  type: 'line',
                  showSymbol: false,
                  data: valueList
              }]
          };
    this.servicesallChart.setOption(this.servicesalloption);


    //使用量统计
    this.servicstatisticseChart = echarts.init(document.getElementById('servicestatisticsusage'));
    this.servicestatisticsoption = 
          {
              // title: {
              //     text: '世界人口总量',
              //     subtext: '数据来自网络'
              // },
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  }
              },
              legend: {
                  data: ['服务使用次数']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: {
                  type: 'value',
                  boundaryGap: [0, 0.01]
              },
              yAxis: {
                  type: 'category',
                  data: ['IMGTI-4','IMGTI-3','IMGTI-2','IMGTI-1','BBTI-1','优化算法工具包']
              },
              series: [
                  {
                      name: '服务使用次数',
                      type: 'bar',
                      data: [18203, 23489, 29034, 104970, 131744, 630230]
                  },
                 
              ]
          };
        //初始化图样
      this.servicstatisticseChart.setOption(this.servicestatisticsoption);
      //



    
  }
}
</script>
<style>

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->