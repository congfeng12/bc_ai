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
                <img
                  src="../../static/guanwangfangwen.png"
                  style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;"
                />
                <!-- 标题 -->
                <h3 style="margin:30px 0px 0px 0px;">
                  <font
                    style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;"
                  >今日官网访问量</font>
                </h3>
                <!-- 数据 -->
                <h3 style="margin:20px 0px 0px 0px;">
                  <font
                    style="color: #1296db;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;"
                  >{{ home_count }}</font>
                </h3>
                <!-- 截止时间 -->
                <h3 style="margin:20px 0px 0px 0px;">
                  <font
                    style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                  >统计截止：</font>
                  <font
                    style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{ time }}</font>
                </h3>
              </el-card>
            </el-col>
            <!-- 今日平台访问量 -->
            <el-col :span="6">
              <el-card shadow="hover" style="height: 300px;text-align: center;">
                <!-- 图片 -->
                <img
                  src="../../static/pingtaifangwen.png"
                  style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;"
                />
                <!-- 标题 -->
                <h3 style="margin:30px 0px 0px 0px;">
                  <font
                    style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;"
                  >今日平台访问量</font>
                </h3>
                <!-- 数据 -->
                <h3 style="margin:20px 0px 0px 0px;">
                  <font
                    style="color: #ea9518;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;"
                  >{{ plat_count }}</font>
                </h3>
                <!-- 截止时间 -->
                <h3 style="margin:20px 0px 0px 0px;">
                  <font
                    style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                  >统计截止：</font>
                  <font
                    style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{ time }}</font>
                </h3>
              </el-card>
            </el-col>
            <!-- 今日用户注册量 -->
            <el-col :span="6">
              <el-card shadow="hover" style="height: 300px;text-align: center;">
                <!-- 图片 -->
                <img
                  src="../../static/zhuce.png"
                  style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;"
                />
                <!-- 标题 -->
                <h3 style="margin:30px 0px 0px 0px;">
                  <font
                    style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;"
                  >注册用户总数量</font>
                </h3>
                <!-- 数据 -->
                <h3 style="margin:20px 0px 0px 0px;">
                  <font
                    style="color: #2aa515;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;"
                  >{{ user_count }}</font>
                </h3>
                <!-- 截止时间 -->
                <h3 style="margin:20px 0px 0px 0px;">
                  <font
                    style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                  >统计截止：</font>
                  <font
                    style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{ time }}</font>
                </h3>
              </el-card>
            </el-col>
            <!-- 今日异常日志数量 -->
            <el-col :span="6">
              <el-card shadow="hover" style="height: 300px;text-align: center;">
                <!-- 图片 -->
                <img
                  src="../../static/yichang.png"
                  style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;"
                />
                <!-- 标题 -->
                <h3 style="margin:30px 0px 0px 0px;">
                  <font
                    style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;"
                  >今日异常日志数量</font>
                </h3>
                <!-- 数据 -->
                <h3 style="margin:20px 0px 0px 0px;">
                  <font
                    style="color: #d81e06;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;"
                  >{{ log_count }}</font>
                </h3>
                <!-- 截止时间 -->
                <h3 style="margin:20px 0px 0px 0px;">
                  <font
                    style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                  >统计截止：</font>
                  <font
                    style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{ time }}</font>
                </h3>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <!-- 图表统计分析 -->
        <div style="width: 100%;height: auto;margin-top: 10px;">
          <!-- 最近一周用户数量变化 -->
          <el-card shadow="hover" style="height: auto;margin-bottom: 10px;">
            <!-- 标题 -->
            <h3 style="margin:0px 0px 0px 0px;">
              <font
                style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;"
              >最近一周用户注册变化</font>
            </h3>
            <div id="usersnumlinesticsusage" style="width: 100%;height: 400px;"></div>
          </el-card>

          <div style="width: 100%;height: 300px;margin-bottom: 10px;">
            <!-- 官方服务在线数量 -->
            <el-card shadow="hover" style="height: 300px;text-align: center;">
              <!-- 图片 -->
              <img
                src="../../static/yunfuwu.png"
                style="width: 60px;padding: 0px;margin:10px 0px 0px 0px;"
              />
              <!-- 标题 -->
              <h3 style="margin:30px 0px 0px 0px;">
                <font
                  style="color: #909399;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bold;"
                >官方在线服务数量</font>
              </h3>
              <!-- 数据 -->
              <h3 style="margin:20px 0px 0px 0px;">
                <font
                  style="color: #e8989a;font-size: 1.4em;letter-spacing: 0.2em;font-weight: bolder;"
                >{{ bs_count }}</font>
              </h3>
              <!-- 截止时间 -->
              <h3 style="margin:20px 0px 0px 0px;">
                <font
                  style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                >统计截止：</font>
                <font
                  style="color: #C0C4CC;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;"
                >{{ time }}</font>
              </h3>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //用户数量变化统计
      usersnum: [],
      usersnumlineChart: "",
      usersnumlineoption: {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["用户数量"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "用户数量",
            type: "line",
            stack: "总量",
            data: []
          }
        ]
      },
      log_count: 0,
      user_b_date: [],
      user_b_count: [],
      bs_count: 0,
      home_count: 0,
      user_count: 0,
      plat_count: 0,
      time: ""
    };
  },
  methods: {
    //获取统计信息
    selectCountHomePage() {
      //设置必要参数
      var that = this;
      if (null != this.timeaxisdate) {
        this.v_timeaxisdate = this.timeaxisdate[0] + "," + this.timeaxisdate[1];
      } else {
        this.v_timeaxisdate = null;
      }
      //请求登录用户信息
      this.$Axios
        .post(
          this.$Global.Back_End_Service + this.$Global.selectCountHomePage,
          {},
          {
            headers: {
              token: localStorage.getItem("token")
            }
          }
        )
        .then(function(res) {
          if (res.data.RTCODE == "success") {
            that.log_count = res.data.RTDATA.log_count;
            that.bs_count = res.data.RTDATA.bs_count;
            that.home_count = res.data.RTDATA.home_count;
            that.user_count = res.data.RTDATA.user_count;
            that.plat_count = res.data.RTDATA.plat_count;
            that.time = res.data.RTDATA.time;
            that.user_b_date = res.data.RTDATA.user_b_date;
            that.user_b_count = res.data.RTDATA.user_b_count;
            that.refreshData();
          } else {
            //异常结果显示
            that.$Global.error_Message(that, res.data.RTMSG + res.data.RTDATA);
          }
        })
        .catch(function(err) {
          that.$Global.error_Message(that, err + "");
        });
    },
    refreshData() {
      var option = this.usersnumlineChart.getOption();
      option.xAxis[0].data = this.user_b_date;
      option.series[0].data = this.user_b_count;
      this.usersnumlineChart.setOption(option);
    }
  },
  created() {
    //页面加载时执行
    
  },
  mounted() {
    this.selectCountHomePage();
    //页面加载后执行
    var echarts = require("echarts");
    // 基于准备好的dom，初始化echarts实例
    //用户数量变化
    this.usersnumlineChart = echarts.init(
      document.getElementById("usersnumlinesticsusage")
    );
    this.usersnumlineChart.setOption(this.usersnumlineoption);
  }
};
</script>
<style>
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->