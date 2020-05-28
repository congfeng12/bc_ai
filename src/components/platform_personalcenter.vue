<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
      <!-- 官方资源 -->
      <div style="position: absolute;top: 10px;width: 100%;height: auto;margin-bottom: 20px;">
        <!--  -->
        <div style="width: 100%;height: 300px;">
          <el-row :gutter="12">
            <!--  -->
            <el-col :span="6" style="margin-top: 10px;" v-for="data in tableData" :key="data.index">
              <el-card shadow="hover" style="height: 300px;text-align: center;">
                <!-- 服务名称 -->
                <h3 style="margin:0px 0px 0px 0px;">
                  <font
                    style="color: #303133;font-size: 1.5em;letter-spacing: 0.1em;font-weight: bolder;"
                  >{{data.title}}</font>
                </h3>
                <!-- 服务编号 -->
                <h3 style="margin:0px;height: 20px;">
                  <font
                    style="color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;"
                  >编号:</font>
                  <font
                    style="color: #909399;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{data.serviceid}}</font>
                </h3>
                <!-- 版本号 -->
                <h3 style="margin:0px;height: 20px;">
                  <font
                    style="color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;"
                  >版本号:</font>
                  <font
                    style="color: #909399;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{data.version}}</font>
                </h3>
                <!-- 服务所在服务器 -->
                <h3 style="margin:0px;height: 20px;">
                  <font
                    style="color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;"
                  >服务所在服务器:</font>
                  <font
                    style="color: #909399;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{data.servicepath}}</font>
                </h3>
                <!-- 服务状态 -->
                <div style="margin: 10px 0px 0px 0px;">
                  <el-tag
                    type="success"
                    size="small"
                    style="width: 160px;"
                    v-if="data.servicestate === 'run'"
                  >正&nbsp常</el-tag>
                  <el-tag
                    type="danger"
                    size="small"
                    style="width: 160px;"
                    v-else-if="data.servicestate ==='abnormal'"
                  >异&nbsp常</el-tag>
                  <el-tag
                    type="warning"
                    size="small"
                    style="width: 160px;"
                    v-else-if="data.servicestate ==='lock'"
                  >锁&nbsp定</el-tag>
                  <el-tag type="info" size="small" style="width: 160px;" v-else>未知类型</el-tag>
                </div>
                <!-- 服务简介 -->
                <el-button
                  size="mini"
                  style="margin: 10px 0px 0px 0px;width: 160px;"
                  @click="open(data.title,data.synopsis)"
                  plain
                >点击显示简介</el-button>
                <el-divider></el-divider>
                <!-- 按钮组 -->
                <el-row>
                  <el-button type="primary" style="width: 175px;" size="mini" plain>编辑服务</el-button>
                </el-row>
                <el-row style="margin: 10px 0px 0px 0px;">
                  <el-button type="info" size="mini" @click="log(data.serviceid)" plain>版本历史</el-button>
                  <el-button type="warning" size="mini" plain>报错反馈</el-button>
                </el-row>
              </el-card>
            </el-col>
            <el-col :span="6" style="margin-top: 10px;">
              <a href="javascript:void(0);" style="text-decoration : none;" title="" @click="test()">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                <img src="../../static/upbs.png" style="width:80px;padding-top: 30px;" alt="">
                <p style="margin-top: 50px;font-size: 1.2em;font-weight: bolder;color: #909399;">上传新的服务</p>
              </el-card>
              </a>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 版本历史表格 -->
      <el-dialog title="版本记录" :visible.sync="dialogTableVisible">
        <el-table :data="servicelogs" max-height="550" stripe>
          <el-table-column property="version" label="版本号" width="120"></el-table-column>
          <el-table-column property="updatetime" label="修改日期" width="170"></el-table-column>
          <el-table-column property="operator" label="修改人" width="150"></el-table-column>
          <el-table-column property="content" label="修改内容"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //日志信息
      servicelogs: [],
      //日志显示标记
      dialogTableVisible: false,
      //服务列表
      tableData: []
    };
  },
  methods: {
    //获取服务信息
    selectByCriteria() {
      //设置必要参数
      var that = this;
      //请求服务信息
      this.$Axios.post(
          this.$Global.Back_End_Service + this.$Global.selectBackgroundService,{}
          ,{
            headers: {
              token: localStorage.getItem("token")
            }
          }
        )
        .then(function(res) {
          if (res.data.RTCODE == "success") {
            that.tableData = [];
            that.total = res.data.RTDATA.total;
            //处理服务信息
            for (var i = 0; i < res.data.RTDATA.length; ++i) {
              var c_Data = new Object();
              c_Data.id = res.data.RTDATA[i].id;
              c_Data.title = res.data.RTDATA[i].name;
              c_Data.serviceid = res.data.RTDATA[i].serviceid;
              c_Data.version = res.data.RTDATA[i].version;
              c_Data.servicepath = res.data.RTDATA[i].serverid;
              c_Data.servicestate = res.data.RTDATA[i].servicestate;
              c_Data.synopsis = res.data.RTDATA[i].synopsis;
              c_Data.synopsis = res.data.RTDATA[i].synopsis;
              that.tableData.push(c_Data);
            }
            that.total = res.data.RTDATA.total;
          } else {
            //异常结果显示
            that.$Global.error_Message(that, res.data.RTMSG);
          }
        })
        .catch(function(err) {
          that.$Global.error_Message(that, err + "");
        });
    },
    open(title, synopsis) {
      this.$alert(synopsis, title, {
        confirmButtonText: "关闭"
      });
    },
    log(in_id) {
      this.dialogTableVisible = true;
      this.select(in_id);
    },
    test(){
      this.$Global.success_notify(this,"标题","内容",1000);
    },
    select(in_id){
      //设置必要参数
      var that = this;
      //请求公告信息
      this.$Axios
        .post(
          this.$Global.Back_End_Service + this.$Global.selectServiceVersionLog,
          this.$qs.stringify({
            "serviceid": in_id,
          }),
          {
            headers: {
              token: localStorage.getItem("token")
            }
          }
        )
        .then(function(res) {
          if (res.data.RTCODE == "success") {
            console.log(res.data.RTDATA);
            //处理公告信息
            that.servicelogs = res.data.RTDATA;
          } else {
            //异常结果显示
            that.$Global.error_Message(that, res.data.RTMSG);
          }
        })
        .catch(function(err) {
          that.$Global.error_Message(that, err + "");
        });
    }
  },
  created() {
    //页面加载时执行
  },
  mounted() {
    //页面加载后执行
    this.selectByCriteria();
  }
};
</script>
<style>
.el-divider--horizontal {
  margin: 10px 0 !important;
}
</style>