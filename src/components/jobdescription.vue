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
            <el-button type="primary" style="position: absolute;right: 0px;top: 8px;letter-spacing: 0.1em;" @click="application()">申请这份工作</el-button>
            <!-- 地点&类型 -->
            <h3 style="margin: 10px 0px 0px 0px;">
              <font style="color: #C0C4CC;font-weight: bolder;font-size: 0.6em;letter-spacing: 0.1em;">{{place}}&nbsp&nbsp{{type}}&nbsp&nbsp{{ask}}</font>
            </h3>
            <div style="height: 30px;"></div>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div style="clear: both;width: 100%;height: auto;margin: 40px 0px 0px 0px;">
        <div style="width: 760px;margin: 0 auto 0;">
          <h3 style="margin: 0px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">我们正在寻找安全负责人来领导整个组织的安全工程。在这个独特的角色中，您将为您的团队设定愿景和方向，并将其与OpenAI的更大任务联系起来。
            </font>
          </h3>
          <!-- 动态内容 -->
          <ol style="margin:0px 0px 0px 0px;padding: 0px;">
            <li v-for="req in requirement" style="list-style-type: none;padding: 30px 0px 20px 0px;width: 100%;">
              <h3 style="margin: 20px 0px 0px 0px;">
                <font style="color: #606266;font-weight: bolder;font-size: 0.9em;letter-spacing: 0.1em;">{{req.title}}</font>
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
            <font style="color: #606266;font-weight: bolder;font-size: 0.8em;letter-spacing: 0.1em;">关于OpenAI</font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们正在建立安全的人工智能（AGI），并确保它为人类带来良好的结果。我们相信，一个高度创造性的团队合作，最好的结果是不合理的
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              我们是公司的平等机会雇主和价值多元化。我们不会基于种族，宗教，肤色，国籍，性别，性取向，年龄，婚姻状况，退伍军人身份或残疾状况进行歧视。
            </font>
          </h3>
          <h3 style="margin: 20px 0px 0px 0px;">
            <font style="color: #606266;font-weight: bolder;font-size: 0.8em;letter-spacing: 0.1em;">
              优点
            </font>
          </h3>
          <h3 style="margin: 2px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              无限时间休息（我们鼓励每年4周以上）
            </font>
          </h3>
          <h3 style="margin: 2px 0px 0px 0px;">
            <font style="color: #606266;font-weight: normal;font-size: 0.8em;letter-spacing: 0.1em;">
              灵活的工作时间
            </font>
          </h3>
        </div>
      </div>
      <!-- 按钮 -->
      <div style="clear: both;width: 100%;text-align: center;margin: 150px 0px 150px 0px;">
        <el-button type="primary" style="letter-spacing: 0.1em;" @click="application()">申请这份工作</el-button>
      </div>
      <!-- 页尾 -->
      <div style="width: 100%;clear: both;margin: 0px 0px 0px 0px;text-align: center;padding: 50px 0px 20px 0px;background-color: #F2F6FC">
        <el-link type="primary">蜂巢系统主页</el-link>
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
        title:'JAVA工程师',
        //地区
        place:'不限制地区',
        //职位类型
        type:'技术人员',
        //职位要求
        ask:'无需在职',
        //要求
        requirement:[
          {
            //标题
            title:'你会',
            //内容
            conditions:[
              {
                condition:'在推动内部安全计划方面发挥领导作用'
              },
              {
                condition:'构建并传播安全策略和最佳实践'
              },
              {
                condition:'为不断的研究需求提供安全指导'
              },
              {
                condition:'与我们的研究团队直接合作，以提高我们系统的安全性'
              },
              {
                condition:'领导我们内部安全策略的合规性审计'
              },
              {
                condition:'负责聘请世界级的安全团队'
              },
            ]
          },
          {
            //标题
            title:'如果你有这个角色，你可能适合这个角色',
            //内容
            conditions:[
              {
                condition:'在快节奏的环境中拥有8年以上的安全经验和3年以上的领导和管理团队'
              },
              {
                condition:'了解企业系统和服务的攻击面'
              },
              {
                condition:'为小型或中型组织定义威胁模型的经验'
              },
              {
                condition:'通过与多个业务利益相关者一起规划和执行大型安全项目，取得了成功'
              },
              {
                condition:'卓越的解决问题，战略思考以及与跨职能团队的协作'
              },
              {
                condition:'防御国家级演员的经验是一个加分'
              },
            ]
          }

        ],
        //运行时间
        Run_Time_Range:'',
        //域名
        Domain_Name:'',
    }
  },
  methods: {
    application(){
      this.$router.push('/sendresume');
    }
  },
  created(){
    //页面加载时执行
    this.Run_Time_Range = this.$Global.Run_Time_Range;
    this.Domain_Name = this.$Global.Domain_Name;
  },
  mounted(){
    //页面加载后执行
    
  }
}
</script>
