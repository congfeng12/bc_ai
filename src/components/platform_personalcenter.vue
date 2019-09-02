<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
      <!-- 官方资源 -->
      <div style="position: absolute;top: 10px;width: 100%;height: auto;margin-bottom: 20px;">
        <!--  -->
        <div style="width: 100%;height: 300px;">
            <el-row :gutter="12">
              <!--  -->
              <el-col :span="6" style="margin-top: 10px;" v-for="(data , index) in tableData" key="index">
                <el-card shadow="hover" style="height: 300px;text-align: center;">
                  <!-- 服务名称 -->
                  <h3 style="margin:0px 0px 0px 0px;">
                    <font style="color: #303133;font-size: 1.5em;letter-spacing: 0.1em;font-weight: bolder;">{{data.title}}</font>
                  </h3>
                  <!-- 服务编号 -->
                  <h3 style="margin:0px;height: 20px;">
                    <font style="color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;">编号:</font>
                    <font style="color: #909399;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;">{{data.serviceid}}</font>
                  </h3>
                  <!-- 版本号 -->
                  <h3 style="margin:0px;height: 20px;">
                    <font style="color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;">版本号:</font>
                    <font style="color: #909399;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;">{{data.version}}</font>
                  </h3>
                  <!-- 服务所在服务器 -->
                  <h3 style="margin:0px;height: 20px;">
                    <font style="color: #C0C4CC;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;">服务所在服务器:</font>
                    <font style="color: #909399;font-size: 0.4em;letter-spacing: 0.1em;font-weight: bold;">{{data.servicepath}}</font>
                  </h3>
                  <!-- 服务状态 -->
                  <div style="margin: 10px 0px 0px 0px;">
                    <el-tag type="success" size="small" style="width: 160px;" v-if="data.servicestate === 'run'">正&nbsp常</el-tag>
                    <el-tag type="danger" size="small" style="width: 160px;" v-else-if="data.servicestate ==='abnormal'">异&nbsp常</el-tag>
                    <el-tag type="warning" size="small" style="width: 160px;" v-else>未知类型</el-tag>
                  </div>
                  <!-- 服务简介 -->
                  <el-button size="mini" style="margin: 10px 0px 0px 0px;width: 160px;" @click="open(data.title,data.synopsis)" plain>点击显示简介</el-button> 
                  <el-divider></el-divider>
                  <!-- 按钮组 -->
                  <el-row>
                    <el-button type="primary" style="width: 175px;" size="mini" plain>在线使用</el-button>
                  </el-row>
                  <el-row style="margin: 10px 0px 0px 0px;">
                    <el-button type="info" size="mini" @click="log(data.historical)" plain>版本历史</el-button>
                    <el-button type="warning" size="mini" plain>报错反馈</el-button>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
       <!--  -->
       <!-- 版本历史表格 -->
        <el-dialog title="版本记录" :visible.sync="dialogTableVisible">
          <el-table 
            :data="servicelogs"
            max-height="550"
            stripe
            >
              <el-table-column property="version" label="版本号" width="150"></el-table-column>
              <el-table-column property="date" label="修改日期" width="150"></el-table-column>
              <el-table-column property="user" label="修改人" width="150"></el-table-column>
              <el-table-column property="msg" label="修改内容"></el-table-column>
            </el-table>
        </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        //日志信息
        servicelogs:[],
        //日志显示标记
        dialogTableVisible:false,
        //服务列表
        tableData: [
          {
            //服务标题
            title:'ByteAi',
            //服务编号
            serviceid:'BS100-001',
            //服务版本
            version:'V01.00.01-TR',
            //服务所在服务器
            servicepath:'S100-001',
            //服务状态
            servicestate:'run',
            //服务简介
            synopsis:'OpenAI的使命是确保人工智能（AGI-我们所说的高度自治系统，在最具经济价值的工作中胜过人类-使全人类受益。我们将尝试直接建立安全和有益的AGI，但如果我们的工作帮助其他人实现这一结果，我们也将考虑我们的使命。',
            //服务URL
            url:'',
            //日志
            historical:
            [
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
            ],
          },
          {
            //服务标题
            title:'ByteAi',
            //服务编号
            serviceid:'BS100-001',
            //服务版本
            version:'V01.00.01-TR',
            //服务所在服务器
            servicepath:'S100-001',
            //服务状态
            servicestate:'run',
            //服务简介
            synopsis:'OpenAI的使命是确保人工智能（AGI-我们所说的高度自治系统，在最具经济价值的工作中胜过人类-使全人类受益。我们将尝试直接建立安全和有益的AGI，但如果我们的工作帮助其他人实现这一结果，我们也将考虑我们的使命。',
            //服务URL
            url:'',
            //日志
            historical:
            [
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              
            ],
          },
          {
            //服务标题
            title:'ByteAi',
            //服务编号
            serviceid:'BS100-001',
            //服务版本
            version:'V01.00.01-TR',
            //服务所在服务器
            servicepath:'S100-001',
            //服务状态
            servicestate:'run',
            //服务简介
            synopsis:'OpenAI的使命是确保人工智能（AGI-我们所说的高度自治系统，在最具经济价值的工作中胜过人类-使全人类受益。我们将尝试直接建立安全和有益的AGI，但如果我们的工作帮助其他人实现这一结果，我们也将考虑我们的使命。',
            //服务URL
            url:'',
            //日志
            historical:
            [
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
            ],
          },
          {
            //服务标题
            title:'ByteAi',
            //服务编号
            serviceid:'BS100-001',
            //服务版本
            version:'V01.00.01-TR',
            //服务所在服务器
            servicepath:'S100-001',
            //服务状态
            servicestate:'run',
            //服务简介
            synopsis:'OpenAI的使命是确保人工智能（AGI-我们所说的高度自治系统，在最具经济价值的工作中胜过人类-使全人类受益。我们将尝试直接建立安全和有益的AGI，但如果我们的工作帮助其他人实现这一结果，我们也将考虑我们的使命。',
            //服务URL
            url:'',
            //日志
            historical:
            [
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
            ],
          },
          {
            //服务标题
            title:'ByteAi',
            //服务编号
            serviceid:'BS100-001',
            //服务版本
            version:'V01.00.01-TR',
            //服务所在服务器
            servicepath:'S100-001',
            //服务状态
            servicestate:'run',
            //服务简介
            synopsis:'OpenAI的使命是确保人工智能（AGI-我们所说的高度自治系统，在最具经济价值的工作中胜过人类-使全人类受益。我们将尝试直接建立安全和有益的AGI，但如果我们的工作帮助其他人实现这一结果，我们也将考虑我们的使命。',
            //服务URL
            url:'',
            //日志
            historical:
            [
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
              {
                version: 'V01.00.01-TR',
                date: '2019-08-12',
                user: 'CMAPLE',
                msg:'ByteAi 服务试运行版本上线'
              },
            ],
          },

      ]
      
      }
  },
  methods: {  
      open(title,synopsis) {
        this.$alert(synopsis, title, {
          confirmButtonText: '关闭',
        });
      },
      log(historical){
        this.dialogTableVisible = true;
        this.servicelogs = historical;
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
.el-divider--horizontal{
  margin: 10px 0 !important;
}
</style>