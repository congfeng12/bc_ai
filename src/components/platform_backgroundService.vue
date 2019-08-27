<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
       <!-- 显示栏 -->
       <el-card style="position: absolute;top: 20px;width: 100%;height: auto;margin-bottom: 50px;">
         <!-- 位置 -->
         <h3 style="position: absolute;top: 0px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">服务状态:</font>
         </h3>
          <el-select v-model="serviceselect" filterable clearable placeholder="请选择" style="position: absolute;left: 100px;width: 120px;" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
          </el-select>
         <!-- 类型 -->
          <h3 style="position: absolute;top: 0px;left: 250px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">服务类型:</font>
          </h3>
          <el-select v-model="servicetype" placeholder="请选择活动区域" style="position: absolute;left: 330px;width: 130px;" size="mini">
            <el-option label="不限制" value=""></el-option>
            <el-option label="官方资源" value="img"></el-option>
            <el-option label="第三方资源" value="domainname"></el-option>
          </el-select>
          <!-- 语言类型 -->
          <h3 style="position: absolute;top: 0px;left: 490px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">语言类型:</font>
          </h3>
          <el-select v-model="servicelan" placeholder="请选择活动区域" style="position: absolute;left: 570px;width: 130px;" size="mini">
            <el-option label="不限制" value=""></el-option>
            <el-option label="JAVA" value="1"></el-option>
            <el-option label="PHP" value="2"></el-option>
            <el-option label="PYRTHON" value="3"></el-option>
            <el-option label="Node.js" value="4"></el-option>
          </el-select>
         <!-- 全局搜索 -->
          <h3 style="position: absolute;top: 0px;left: 720px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">全文搜索:</font>
          </h3>
          <el-input
            placeholder="请输入内容"
            v-model="servicesearch"
            clearable
            style="width: 150px;position: absolute;left: 800px;" 
            size="mini">
          </el-input>
          <el-button style="position: absolute;right: 85px;" type="primary" size="mini"round plain>添加服务</el-button>
          <el-button style="position: absolute;right: 20px;" type="primary" size="mini" round>搜索</el-button>
          <!-- 循环列表 -->
          <div style="clear: both;margin-top: 40px;">
            <!-- 资源 -->
            <div v-for="(resource,index) in Resources" style="width: 100%;height: 300px;clear: both;position: relative;">
              <el-divider v-if="index !== 0 "></el-divider>
              <!-- 资源名称 -->
              <div style="width: auto;height: auto;position: absolute;top: 10px;left: 20px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">服务名称:</font>
                  <font style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.servicename}}</font>
                </h3>
              </div>
              <!-- 资源编号 -->
              <div style="width: auto;height: auto;position: absolute;top: 10px;left: 320px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">服务编号:</font>
                  <font style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.serviceid}}</font>
                </h3>
              </div>
              <!-- 资源简介 -->
              <div style="width: auto;height: auto;position: absolute;top: 50px;left: 20px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">服务简介:</font>
                    <div style="width: 700px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap; display: block;position: absolute;left: 70px;top: 19px;">
                      <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.synopsis}}</font>
                    </div>
                    <el-popover
                        placement="top"
                        title="简介"
                        width="400"
                        trigger="click"
                        :content="resource.synopsis"
                        style="position: absolute;right: -790px;top: 16px;">
                       <el-button slot="reference" plain size="mini" type="info" style="padding: 2px;">显示全部简介</el-button>
                    </el-popover>
                </h3>
              </div>
              <!-- 资源版本 -->
              <div style="width: auto;height: auto;position: absolute;top: 80px;left: 20px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">服务版本:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.version}}</font>
                </h3>
              </div>
              <!-- 资源存放路径 -->
              <div style="width: auto;height: auto;position: absolute;top: 80px;left: 320px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">服务存放路径:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.path}}</font>
                </h3>
              </div>
              <!-- 服务接口地址 -->
              <div style="width: auto;height: auto;position: absolute;top: 110px;left: 20px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">接口地址:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.serviceroute}}</font>
                </h3>
              </div>
              <!-- 服务包大小 -->
              <div style="width: auto;height: auto;position: absolute;top: 110px;left: 420px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">服务大小:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.size}}</font>
                </h3>
              </div>
              <!-- 资源类型 -->
              <div style="width: auto;height: auto;position: absolute;top: 110px;left: 600px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">服务语言类型:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">
                    <el-tag type="warning" size="small" v-if="resource.type ==='JAVA'">JAVA</el-tag>
                    <el-tag size="small" v-else-if="resource.type === 'PYRTHON'">PYRTHON</el-tag>
                    <el-tag type="info" size="small" v-else-if="resource.type === 'PHP'">PHP</el-tag>
                    <el-tag type="success" size="small" v-else-if="resource.type === 'Node.js'">Node.js</el-tag>
                    <el-tag type="danger" size="small" v-else>未知类型</el-tag>
                  </font>
                </h3>
              </div>
              <!-- 接收数据类型 -->
              <div style="width: auto;height: auto;position: absolute;top: 140px;left: 20px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">接收数据类型:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.receivetype}}</font>
                </h3>
              </div>
              <!-- 资源作者 -->
               <div style="width: auto;height: auto;position: absolute;top: 170px;left: 20px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">服务作者:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.author}}</font>
                </h3>
              </div>
              <!-- 上传人员名称 -->
              <div style="width: auto;height: auto;position: absolute;top: 170px;left: 270px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">上传人员:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.upusername}}</font>
                </h3>
              </div>
              <!-- 上传时间 -->
              <div style="width: auto;height: auto;position: absolute;top: 170px;left: 470px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">上传时间:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.createdate}}</font>
                </h3>
              </div>
              <!-- 资源所在服务器 -->
              <div style="width: auto;height: auto;position: absolute;top: 170px;left: 670px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">服务所在服务器:</font>
                  <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.servicepath}}</font>
                </h3>
              </div>
              <!-- 资源状态 -->
              <div style="width: auto;height: auto;position: absolute;top: 200px;left: 20px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">服务状态:</font>
                   <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">
                    <el-tag type="success" size="small" v-if="resource.servicestate === 'run'">正常</el-tag>
                    <el-tag type="warning" size="small" v-else-if="resource.servicestate ==='lock'">锁定</el-tag>
                    <el-tag type="danger" size="small" v-else>异常状态</el-tag>
                  </font>
                </h3>
              </div>
              <!-- 是否为官方资源 -->
               <div style="width: auto;height: auto;position: absolute;top: 200px;left: 270px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">服务类型:</font>
                   <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">
                    <el-tag size="small" v-if="resource.officialservice === true">官方资源</el-tag>
                    <el-tag type="warning" size="small" v-else-if="resource.officialservice === false">第三方资源</el-tag>
                    <el-tag type="danger" size="small" v-else>未知资源类型</el-tag>
                  </font>
                </h3>
              </div>
              <!-- 附件列表 -->
              <div style="width: auto;height: auto;position: absolute;top: 230px;left: 20px;">
                <h3>
                  <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bolder;">附件列表:</font>
                   <font :key="index" v-for="(file,index) in resource.annexe" style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;margin-right: 5px;">
                    <el-tag type="info" size="small">{{file.name}}</el-tag>
                  </font>
                </h3>
              </div>
              <!-- 按钮组 -->
              <!-- 版本历史 -->
              <div style="width: auto;height: auto;position: absolute;top: 40px;right:0px;">
                <el-button type="info" size="small" @click="dialogTableVisible = true" plain>版本历史</el-button>
              </div>
              <!-- 锁定服务 -->
              <div style="width: auto;height: auto;position: absolute;top: 75px;right:0px;">
                <el-button type="warning" size="small" plain>锁定服务</el-button>
              </div>
              <!-- 解锁服务 -->
              <div style="width: auto;height: auto;position: absolute;top: 110px;right:0px;">
                <el-button type="success" size="small" plain>解锁服务</el-button>
              </div>
              <!-- 编辑服务 -->
              <div style="width: auto;height: auto;position: absolute;top: 145px;right:0px;">
                <el-button type="primary" size="small" plain>编辑服务</el-button>
              </div>
              <!-- 删除服务 -->
              <div style="width: auto;height: auto;position: absolute;top: 180px;right:0px;">
                <el-button type="danger" size="small" plain>删除服务</el-button>
              </div>
              <!-- 版本历史表格 -->
              <el-dialog title="版本记录" :visible.sync="dialogTableVisible">
                <el-table 
                  :data="resource.historical"
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
          <!-- 分页按钮 -->
          <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" style="width: 535px;margin: 0 auto 0;margin-top: 50px;margin-bottom: 20px;"></el-pagination>
       </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serviceselect:'',
      servicetype:'',
      servicelan:'',
      servicesearch:'',
      dialogTableVisible:false,
      options: [
        {
          value: '',
          label: '不限制'
        }, 
        {
          value: '选项1',
          label: '正常'
        }, {
          value: '选项2',
          label: '锁定'
        }, {
          value: '选项3',
          label: '异常状态'
        },
        ],
      //静态资源列表
      Resources: [
        {
          //资源名称
          servicename:'ByteAi',
          //资源编号
          serviceid:'R100-001',
          //资源简介
          synopsis:'OpenAI的使命是确保人工智能（AGI-我们所说的高度自治系统，在最具经济价值的工作中胜过人类-使全人类受益。我们将尝试直接建立安全和有益的AGI，但如果我们的工作帮助其他人实现这一结果，我们也将考虑我们的使命。',
          //资源版本
          version:'V01.00.01-TR',
          //资源存放路径
          path:'www/server/apache-tomcat-default/webapps',
          //资源历史
          historical:[
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
          //资源地址
          serviceroute:'/officialservice/byteai',
          //资源大小
          size:'42M',
          //资源类型
          type:'JAVA',
          //接收数据类型
          receivetype:'JSON',
          //资源作者
          author:'CMAPLE',
          //上传时间
          createdate:'2019-08-12',
          //上传人员名称
          upusername:'CMAPLE',
          //资源所在服务器
          servicepath:'S100-001',
          //服务状态
          servicestate:'run',
          //是否为官方资源
          officialservice:true,
          //资源附件列表
          annexe:[
            {
              name:'使用手册.pdf',
              type:'pdf',
              path:'',
              size:'',
            },
            {
              name:'byteai.war',
              type:'war',
              path:'',
              size:'',
            },
          ],
        },
        {
          //资源名称
          servicename:'ByteAi',
          //资源编号
          serviceid:'R100-001',
          //资源简介
          synopsis:'OpenAI的使命是确保人工智能（AGI-我们所说的高度自治系统，在最具经济价值的工作中胜过人类-使全人类受益。我们将尝试直接建立安全和有益的AGI，但如果我们的工作帮助其他人实现这一结果，我们也将考虑我们的使命。',
          //资源版本
          version:'V01.00.01-TR',
          //资源存放路径
          path:'www/server/apache-tomcat-default/webapps',
          //资源历史
          historical:[
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
          //资源地址
          serviceroute:'/officialservice/byteai',
          //资源大小
          size:'42M',
          //资源类型
          type:'JAVA',
          //接收数据类型
          receivetype:'JSON',
          //资源作者
          author:'CMAPLE',
          //上传时间
          createdate:'2019-08-12',
          //上传人员名称
          upusername:'CMAPLE',
          //资源所在服务器
          servicepath:'S100-001',
          //服务状态
          servicestate:'run',
          //是否为官方资源
          officialservice:true,
          //资源附件列表
          annexe:[
            {
              name:'使用手册.pdf',
              type:'pdf',
              path:'',
              size:'',
            },
            {
              name:'byteai.war',
              type:'war',
              path:'',
              size:'',
            },
          ],
        },
        {
          //资源名称
          servicename:'ByteAi',
          //资源编号
          serviceid:'R100-001',
          //资源简介
          synopsis:'OpenAI的使命是确保人工智能（AGI-我们所说的高度自治系统，在最具经济价值的工作中胜过人类-使全人类受益。我们将尝试直接建立安全和有益的AGI，但如果我们的工作帮助其他人实现这一结果，我们也将考虑我们的使命。',
          //资源版本
          version:'V01.00.01-TR',
          //资源存放路径
          path:'www/server/apache-tomcat-default/webapps',
          //资源历史
          historical:[
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
          //资源地址
          serviceroute:'/officialservice/byteai',
          //资源大小
          size:'42M',
          //资源类型
          type:'JAVA',
          //接收数据类型
          receivetype:'JSON',
          //资源作者
          author:'CMAPLE',
          //上传时间
          createdate:'2019-08-12',
          //上传人员名称
          upusername:'CMAPLE',
          //资源所在服务器
          servicepath:'S100-001',
          //服务状态
          servicestate:'run',
          //是否为官方资源
          officialservice:true,
          //资源附件列表
          annexe:[
            {
              name:'使用手册.pdf',
              type:'pdf',
              path:'',
              size:'',
            },
            {
              name:'byteai.war',
              type:'war',
              path:'',
              size:'',
            },
          ],
        },
        
      ],
    }
  },
  methods: {
   
    },
  created(){
    //页面加载时执行
    
  },
  mounted(){
    //页面加载后执行
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->