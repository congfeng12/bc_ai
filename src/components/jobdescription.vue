<template>
  <div style="width: 100%;height: 100%;height: 100%;">
    
      <!-- 页头标题 -->
      <div style="clear: both;background-color: #F2F6FC">
        <div style="width: 760px;margin: 0 auto 0;">
          <div style="padding: 30px 0px 0px 0px;position: relative;">
            <img src="../../static/logo_black.png" style="width: 55px;">
            <h3 style="margin: 0px 0px 0px 0px;position: absolute;bottom: 5px;left: 70px;">
              <font style="font-weight: normal;font-size: 1.8em;letter-spacing: 0.1em;">蜂巢系统</font>
            </h3>
          </div>
          <!-- 工作标题&按钮 -->
          <div style="width: 100%;margin: 30px 0px 0px 0px;position: relative;">
            <h3 style="margin: 0px 0px 0px 0px;">
              <font style="font-weight: normal;font-size: 2em;letter-spacing: 0.1em;">{{title}}</font>
            </h3>
            <el-button type="primary" style="position: absolute;right: 0px;top: 8px;letter-spacing: 0.1em;" @click="applyJob()">申请这份工作</el-button>
            <!-- 地点&类型 -->
             <h3 style="margin: 50px 0px 0px 0px;">
              <el-link style="font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;" type="primary">{{createuser}}</el-link>
            </h3>
            <h3 style="margin: 0px 0px 0px 0px;">
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;">{{createdate}}</font>
            </h3>
            <h3 style="margin: 10px 0px 0px 0px;">
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;">{{place}}</font>
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;">&nbsp&nbsp{{type}}</font>
              <el-tooltip class="item" effect="dark" content="贡献者-网站的普通参与者，不具备网站管理权限；研究员-网站的核心参与人员，具备相应的网站管理权限；" placement="top">
                <el-link style="font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;" :underline="false" type="primary">&nbsp&nbsp{{nature}}</el-link>
              </el-tooltip>
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;margin-left: 5px;">需求
                <font style="color: #67C23A">{{need}}</font>
              人</font>
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;margin-left: 5px;">目前
                <font style="color: #F56C6C">{{application}}</font>
              人申请</font>
            </h3>
            <div style="height: 10px;"></div>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div style="clear: both;width: 100%;height: auto;margin: 40px 0px 0px 0px;">
        <div style="width: 760px;margin: 0 auto 0;">
          <h3 style="margin: 0px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">我们正在寻找更多志同道合的伙伴，一起完善蜂巢系统，一起开发有趣、高效、具有对社会正面影响的应用或者服务
            </font>
          </h3>
          <!-- 动态内容 -->
          <ol style="margin:0px 0px 0px 0px;padding: 0px;">
            <li v-for="req in content" style="list-style-type: none;padding: 30px 0px 20px 0px;width: 100%;">
              <h3 style="margin: 20px 0px 0px 0px;">
                <font style="color: #303133;font-weight: bolder;font-size: 1.1em;letter-spacing: 0.1em;">{{req.title}}</font>
              </h3>
              <ol style="margin:20px 0px 0px 0px;padding: 0px 0px 0px 0px;">
                <li v-for="con in req.conditions" style="list-style-type: none;padding: 2px 0px 2px 0px;width: 100%;">
                  <h3 style="margin: 0px 0px 0px 0px;">
                    <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">{{con.condition}}</font>
                  </h3>
                </li>
              </ol>
            </li>
          </ol>
          <!-- 页尾 -->
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #303133;font-weight: bolder;font-size: 1.1em;letter-spacing: 0.1em;">关于蜂巢系统</font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们正在创建一个资源丰富的开源服务网站。我们相信，一个高度创造性的团队合作，最好的结果是不合理的
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们正在寻找志同道合的伙伴，我们所有的工作都是在工作时间之余进行，所以不会占用很多时间。我们没有时间的限制，也没有绩效考核，所以你只需要参与进来即可。
            </font>
          </h3>
        </div>
      </div>
      <!-- 按钮 -->
      <div style="clear: both;width: 100%;text-align: center;margin: 80px 0px 100px 0px;">
        <el-button type="primary" style="letter-spacing: 0.1em;" @click="applyJob()">申请这份工作</el-button>
      </div>
      <!-- 页尾 -->
      <div style="width: 100%;clear: both;margin: 0px 0px 0px 0px;text-align: center;padding: 50px 0px 20px 0px;background-color: #F2F6FC">
        <el-link type="primary" :href="HomePageUrl">蜂巢系统主页</el-link>
        <!-- 合作 -->
        <div style="width: 100%;margin-bottom: 50px;">
          <h3 style="margin: 10px 0px 0px 0px;">
            <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.7em;letter-spacing: 0.1em;">
              {{Run_Time_Range}} {{Domain_Name}}
            </font>
          </h3>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        //标题
        title:'',
        //地区
        place:'',
        //职位类型
        type:'',
        //岗位性质
        nature:'',
        //岗位内容
        content:[],
        //岗位发布人员
        createuser:'',
        //岗位发布日期
        createdate:'',
        //岗位需求人数
        need:'',
        //岗位申报人数
        application:'',
        //跳转到主页
        HomePageUrl:'',
        //运行时间
        Run_Time_Range:'',
        //域名
        Domain_Name:'',
    }
  },
  methods: {
    //获取岗位详细信息
    getWorkById(){
      //设置必要参数
        var that = this;
        //请求里程碑信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getWorkById,this.$qs.stringify({
           id:this.$route.query.id,
        }))
        .then(function(res){
          if (res.data.RTCODE == 'success') {
            //处理里程碑信息
            that.title = res.data.RTDATA.title;
            that.place = res.data.RTDATA.place;
            that.type = res.data.RTDATA.type;
            that.nature = res.data.RTDATA.nature;
            var a_num = res.data.RTDATA.content.split("&");
            for (var i = 0; i < a_num.length; ++i) {
              var c_content = new Object();
              var b_num = a_num[i].split("|");
              c_content.title = b_num[0];
              c_content.conditions = [];
              for (var k = 1; k < b_num.length; ++k) {
                var c_condition = new Object();
                c_condition.condition = b_num[k];
                c_content.conditions.push(c_condition);
              }
              that.content.push(c_content);
            }
            that.createuser = res.data.RTDATA.createuser;
            var c_creatdate = res.data.RTDATA.createtime.split("-");
            that.createdate = c_creatdate[0]+'年'+c_creatdate[1]+'月'+c_creatdate[2]+'日';
            that.need = res.data.RTDATA.need;
            that.application = res.data.RTDATA.application;
           
          }else{
            //异常结果显示
            that.$Global.error_Message(that,res.data.RTMSG);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err+'');
        });
    },
    //跳转到申请页面
    applyJob(){
      this.$router.push('/sendresume?id='+this.$route.query.id);
    }
  },
  created(){
    //页面加载时执行
    this.Run_Time_Range = this.$Global.Run_Time_Range;
    this.Domain_Name = this.$Global.Domain_Name;
    this.HomePageUrl = this.$Global.HomePageUrl;
    this.getWorkById();
  },
  mounted(){
    //页面加载后执行
    
  }
}
</script>
