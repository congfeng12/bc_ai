<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
       <!-- 显示栏 -->
       <el-card style="position: absolute;top: 20px;width: 100%;height: auto;margin-bottom: 50px;">
         <!-- 全局搜索 -->
          <h3 style="position: absolute;top: 0px;left: 20px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">全文搜索:</font>
          </h3>
          <el-input
            placeholder="请输入内容"
            v-model="search"
            clearable
            style="width: 400px;position: absolute;left: 100px;" 
            size="mini">
          </el-input>
          <!-- 日志类型 -->
          <h3 style="position: absolute;top: 40px;left: 20px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">日志类型:</font>
          </h3>
          <el-select v-model="logstype" placeholder="请选择活动区域" style="position: absolute;top: 60px;left: 100px;width: 150px;" size="mini">
            <el-option label="不限制" value=""></el-option>
            <el-option label="正常类型" value="1"></el-option>
            <el-option label="异常类型" value="2"></el-option>
          </el-select>
          <!-- 操作类型 -->
          <h3 style="position: absolute;top: 40px;left: 320px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">操作类型:</font>
          </h3>
          <el-select v-model="type" placeholder="请选择活动区域" style="position: absolute;top: 60px;left: 400px;width: 150px;" size="mini">
            <el-option label="不限制" value=""></el-option>
            <el-option label="账号操作类型" value="1"></el-option>
            <el-option label="资源操作类型" value="2"></el-option>
            <el-option label="日志操作类型" value="3"></el-option>
          </el-select>
          <!-- 日期范围 -->
           <h3 style="position: absolute;top: 0px;left: 550px;">
              <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">日期范围:</font>
           </h3>
           <div class="block" style="position: absolute;top: 20px;left: 630px;">
           <!--  <span class="demonstration">默认</span> -->
            <el-date-picker
              v-model="timeaxisdate"
              size="mini"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <!-- <el-button style="position: absolute;right: 20px;" type="primary" size="mini"round plain>添加时间轴</el-button> -->
          <el-button style="position: absolute;right: 20px;" type="primary" size="mini" round>搜索</el-button>
          <el-button style="position: absolute;right: 20px;top: 60px;" type="success" size="mini" round plain>导出EXCEL</el-button>
          <!-- <el-button style="position: absolute;right: 120px;top: 60px;" type="info" size="mini" round plain>将3月之前的日志存为文件</el-button>
          <el-button style="position: absolute;right: 300px;top: 60px;" type="info" size="mini" round plain>读取文件日志</el-button> -->
          <!-- 循环列表 -->
          <div style="padding-left: 0px;margin:80px 0px 0px 0px;">
            <el-table
                :data="tableData"
                style="width: 100%"
                >
              <el-table-column
                prop="serialNumber"
                label="流水号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="date"
                label="操作日期"
                width="110">
              </el-table-column>
              <el-table-column
                prop="operator"
                label="操作人"
                width="120">
              </el-table-column>
              <el-table-column
                prop="logstype"
                label="日志类型"
                width="100">
                  <template slot-scope="types">
                    <el-tag v-if="'normal' === types.row.logstype" type="success" size="mini">正常类型</el-tag>
                    <el-tag v-else type="danger" size="mini">异常类型</el-tag>
                  </template>
              </el-table-column>
              <el-table-column
                prop="operatetype"
                label="操作类型"
                width="110">
                  <template slot-scope="types">
                    <el-tag v-if="'accounttype' === types.row.operatetype" type="primary" size="mini">账号操作类型</el-tag>
                    <el-tag v-else-if="'resourcestype' === types.row.operatetype" type="info" size="mini">资源操作类型</el-tag>
                    <el-tag v-else type="warning" size="mini">日志操作类型</el-tag>
                  </template>
              </el-table-column>
              <el-table-column
                prop="msg"
                label="日志信息详情">
              </el-table-column>
            </el-table>
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
      logstype:'',
      search:'',
      timeaxisdate:'',
      type:'',
      tableData: [
          {
            //流水号
            serialNumber:'POL20190821-0001',
            //操作日期
            date:'2019-08-21',
            //操作人
            operator:'xiaogao',
            //日志类型-正常类型、异常类型
            logstype:'normal',
            //操作类型-账号操作类型、资源操作类型、日志&信息操作类型
            operatetype:'accounttype',
            //日志信息详情
            msg:'在 浙江省 杭州市 的 00:0e:c6:b6:85:8c 终端上 注册账号',
          },
          {
            //流水号
            serialNumber:'POL20190821-0002',
            //操作日期
            date:'2019-08-21',
            //操作人
            operator:'xiaogao',
            //日志类型-正常类型、异常类型
            logstype:'normal',
            //操作类型-账号操作类型、资源操作类型、日志&信息操作类型
            operatetype:'accounttype',
            //日志信息详情
            msg:'在 浙江省 杭州市 的 00:0e:c6:b6:85:8c 终端上 修改密码',
          },
          {
            //流水号
            serialNumber:'POL20190821-0003',
            //操作日期
            date:'2019-08-21',
            //操作人
            operator:'CMAPLE',
            //日志类型-正常类型、异常类型
            logstype:'normal',
            //操作类型-账号操作类型、资源操作类型、日志&信息操作类型
            operatetype:'accounttype',
            //日志信息详情
            msg:'在 浙江省 杭州市 的 00:0e:c6:b6:85:8c 终端上 被 CMAPLE 提升为管理员',
          },
          {
            //流水号
            serialNumber:'POL20190821-0003',
            //操作日期
            date:'2019-08-21',
            //操作人
            operator:'xiaogao',
            //日志类型-正常类型、异常类型
            logstype:'danger',
            //操作类型-账号操作类型、资源操作类型、日志&信息操作类型
            operatetype:'resourcestype',
            //日志信息详情
            msg:'在 浙江省 杭州市 的 00:0e:c6:b6:85:8c 终端上 使用编号为 BS100-001 的 ByteAi 服务发生异常',
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
<style>

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->