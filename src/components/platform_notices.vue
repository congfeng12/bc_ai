<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
      <!-- 显示栏 -->
      <el-card style="position: absolute;top: 20px;width: 100%;height: auto;margin-bottom: 50px;">
        <!-- 全局搜索 -->
        <h3 style="position: absolute;top: 0px;left: 460px;">
          <font
            style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;"
          >全文搜索:</font>
        </h3>
        <el-input
          placeholder="请输入内容"
          v-model="search"
          clearable
          style="width: 400px;position: absolute;left: 540px;"
          size="mini"
        ></el-input>
        <!-- 日期范围 -->
        <h3 style="position: absolute;top: 0px;left: 20px;">
          <font
            style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;"
          >日期范围:</font>
        </h3>
        <div class="block" style="position: absolute;top: 20px;left: 100px;">
          <!--  <span class="demonstration">默认</span> -->
          <el-date-picker
            v-model="timeaxisdate"
            size="mini"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
        <el-button
          style="position: absolute;right: 20px;"
          type="primary"
          size="mini"
          round
          plain
        >添加公告</el-button>
        <el-button
          style="position: absolute;left: 950px;"
          type="primary"
          size="mini"
          @click="selectByCriteria"
          round
        >搜索</el-button>
        <!-- 循环列表 -->
        <ol style="padding-left: 0px;margin:80px 0px 0px 0px;">
          <li
            v-for="resource in Resources"
            style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%;overflow: hidden;clear: both;position: relative;"
          >
            <div style="height: 125px;">
              <!-- 调查报告标题 -->
              <div style="width: auto;height: auto;position: absolute;top: 5px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;"
                  >公告标题:</font>
                  <font
                    style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;"
                  >{{resource.title}}</font>
                </h3>
              </div>
              <!-- 调查报告编号 -->
              <div style="width: auto;height: auto;position: absolute;top: 5px;left: 550px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;"
                  >公告编号:</font>
                  <font
                    style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;"
                  >{{resource.announcementid}}</font>
                </h3>
              </div>
              <!-- 公告内容 -->
              <div style="width: auto;height: auto;position: absolute;top: 35px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >公告内容:</font>
                  <div
                    style="width: 800px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap; display: block;position: absolute;left: 80px;top: 19px;"
                  >
                    <font
                      style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                    >{{resource.msg}}</font>
                  </div>
                </h3>
              </div>
              <!-- 调查报告上传人 -->
              <div style="width: auto;height: auto;position: absolute;top: 65px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >公告上传人:</font>
                  <font
                    style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{resource.author}}</font>
                </h3>
              </div>
              <!-- 调查报告上传时间 -->
              <div style="width: auto;height: auto;position: absolute;top: 65px;left: 300px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >公告上时间:</font>
                  <font
                    style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{resource.createtime}}</font>
                </h3>
              </div>
              <!-- 按钮组 -->
              <div style="width: auto;height: auto;position: absolute;top: 30px;right:0px;">
                <el-button type="primary" size="mini" plain>编辑公告</el-button>
              </div>
              <div style="width: auto;height: auto;position: absolute;top: 60px;right:0px;">
                <el-button type="danger" size="mini" plain>删除公告</el-button>
              </div>
            </div>
          </li>
        </ol>
        <!-- 分页按钮 -->
        <el-pagination
          :page-size="num"
          :pager-count="11"
          @current-change="handleCurrentChange"
          layout="prev, pager, next ,total"
          :total="total"
          style="width: 535px;margin: 0 auto 0;margin-top: 50px;margin-bottom: 20px;"
        ></el-pagination>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      timeaxisdate: null,
      page: 1,
      num: 20,
      total: 0,
      //静态资源列表
      Resources: []
    };
  },
  methods: {
    //获取最新的公告信息
    selectByCriteria() {
      //设置必要参数
      var that = this;
      if (null != this.timeaxisdate) {
        this.v_timeaxisdate = this.timeaxisdate[0] + "," + this.timeaxisdate[1];
      } else {
        this.v_timeaxisdate = null;
      }
      //初始化参数
      that.Notices = [];
      that.total = 0;
      //请求公告信息
      this.$Axios
        .post(
          this.$Global.Back_End_Service + this.$Global.selectNotices,
          this.$qs.stringify({
            page: this.page,
            num: 20,
            search: this.search,
            timeaxisdate: this.v_timeaxisdate
          }),
          {
            headers: {
              token: localStorage.getItem("token")
            }
          }
        )
        .then(function(res) {
          if (res.data.RTCODE == "success") {
            that.Resources = [];
            that.total = res.data.RTDATA.total;
            if (0 < res.data.RTDATA.total && 0 == res.data.RTDATA.data.length) {
              that.page = 1;
              that.selectByCriteria();
            }
            //处理公告信息
            for (var i = 0; i < res.data.RTDATA.data.length; ++i) {
              var c_Notices = new Object();
              c_Notices.announcementid = res.data.RTDATA.data[i].announcementid;
              c_Notices.author = res.data.RTDATA.data[i].author;
              c_Notices.createtime = res.data.RTDATA.data[i].createtime;
              c_Notices.title = res.data.RTDATA.data[i].title;
              c_Notices.synopsis = res.data.RTDATA.data[i].synopsis;
              c_Notices.msg = res.data.RTDATA.data[i].content;
              c_Notices.createtime = res.data.RTDATA.data[i].createtime;
              that.Resources.push(c_Notices);
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
      this.Notices = that.Notices;
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
<!-- Add "scoped" attribute to limit CSS to this component only -->