<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
      <!-- 显示栏 -->
      <el-card style="position: absolute;top: 20px;width: 100%;height: auto;margin-bottom: 50px;">
        <!-- 全局搜索 -->
        <h3 style="position: absolute;top: 0px;left: 20px;">
          <font
            style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;"
          >全文搜索:</font>
        </h3>
        <el-input
          placeholder="请输入内容"
          v-model="search"
          clearable
          style="width: 400px;position: absolute;left: 100px;"
          size="mini"
        ></el-input>
        <!-- 日期范围 -->
        <h3 style="position: absolute;top: 40px;left: 20px;">
          <font
            style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;"
          >日期范围:</font>
        </h3>
        <div class="block" style="position: absolute;top: 60px;left: 100px;">
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
        >添加里程碑</el-button>
        <el-button style="position: absolute;left: 500px;" type="primary" size="mini" round>搜索</el-button>
        <!-- 循环列表 -->
        <ol style="padding-left: 0px;margin:80px 0px 0px 0px;">
          <li
            v-for="(resource,index) in Resources"
            style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%;overflow: hidden;clear: both;position: relative;"
            :key="index"
          >
            <div>
              <div style="width: 194px;margin:0px;padding: 20px 0px 20px 0px;float: left;">
                <el-card
                  body-style="padding:7px;margin:0px;border:0px;"
                  style="width: 194px;min-height: 130px;"
                  shadow="hover"
                >
                  <!-- <el-image style="width: 180px;min-height: 100px;" :src="resource.imgurl" :preview-src-list="resource.bigimgurl" ></el-image> -->
                  <img :src="resource.imgurl" style="width: 180px;" ref="noticeIMG" />
                </el-card>
              </div>
              <!-- 里程碑标题 -->
              <div style="width: auto;height: auto;position: absolute;top: 5px;left: 230px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;"
                  >里程碑标题:</font>
                  <font
                    style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;"
                  >{{resource.noticestitle}}</font>
                </h3>
              </div>
              <!-- 里程碑简介 -->
              <div style="width: auto;height: auto;position: absolute;top: 35px;left: 230px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >里程碑简介:</font>
                  <div
                    style="width: 650px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap; display: block;position: absolute;left: 85px;top: 19px;"
                  >
                    <font
                      style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                    >{{resource.noticessynopsis}}</font>
                  </div>
                </h3>
              </div>
              <!-- 里程碑作者 -->
              <div style="width: auto;height: auto;position: absolute;top: 65px;left: 230px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >里程碑作者:</font>
                  <font
                    style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{resource.noticeauthor}}</font>
                </h3>
              </div>
              <!-- 里程碑创建时间 -->
              <div style="width: auto;height: auto;position: absolute;top: 65px;left: 530px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >里程碑创建时间:</font>
                  <font
                    style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{resource.creatdate}}</font>
                </h3>
              </div>
              <!-- 阅读时间 -->
              <div style="width: auto;height: auto;position: absolute;top: 35px;left: 530px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >阅读时间:</font>
                  <font
                    style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{resource.readtime}}分钟</font>
                </h3>
              </div>
              <!-- 里程碑文件 -->
              <div style="width: auto;height: auto;position: absolute;top: 95px;left: 230px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >里程碑文件:</font>
                  <font
                    style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{resource.noticefiletitle}}</font>
                </h3>
              </div>
              <!-- 里程碑文件路径 -->
              <div style="width: auto;height: auto;position: absolute;top: 95px;left: 530px;">
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >里程碑文件路径:</font>
                  <font
                    style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{resource.noticefileurl}}</font>
                </h3>
              </div>
              <!-- 图片路径 -->
              <div
                style="width: 800px;height: auto;position: absolute;top: 125px;left: 230px;overflow: hidden; text-overflow: ellipsis;"
              >
                <h3>
                  <font
                    style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >图片路径:</font>
                  <font
                    style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;"
                  >{{resource.imgrelativepath}}</font>
                </h3>
              </div>
              <!-- 按钮组 -->
              <div style="width: auto;height: auto;position: absolute;top: 30px;right:0px;">
                <el-button type="primary" size="mini" plain>编辑里程碑</el-button>
              </div>
              <div style="width: auto;height: auto;position: absolute;top: 60px;right:0px;">
                <el-button type="danger" size="mini" plain>删除里程碑</el-button>
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
      pagetype: "",
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
    //获取里程碑信息
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
          this.$Global.Back_End_Service + this.$Global.selecttMilestonep,
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
            console.log(res.data.RTDATA.data);
            //处理公告信息
            for (var i = 0; i < res.data.RTDATA.data.length; ++i) {
              var c_Notices = new Object();
              c_Notices.imgurl = res.data.RTDATA.data[i].imgurl;
              c_Notices.imgrelativepath = res.data.RTDATA.data[i].imgurl;
              c_Notices.noticestitle = res.data.RTDATA.data[i].title;
              c_Notices.noticessynopsis = res.data.RTDATA.data[i].synopsis;
              c_Notices.noticeauthor = res.data.RTDATA.data[i].author;
              c_Notices.readtime = res.data.RTDATA.data[i].readtime;
              c_Notices.noticefiletitle = res.data.RTDATA.data[i].filename;
              c_Notices.noticefileurl = res.data.RTDATA.data[i].filepath;
              c_Notices.creatdate = res.data.RTDATA.data[i].createtime;
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
    },
    handleCurrentChange() {}
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