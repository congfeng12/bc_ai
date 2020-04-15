<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;" >
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
            <el-option label="不限制" value="all"></el-option>
            <el-option label="正常类型" value="normal"></el-option>
            <el-option label="异常类型" value="exception"></el-option>
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
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd">

            </el-date-picker>
          </div>
          <!-- <el-button style="position: absolute;right: 20px;" type="primary" size="mini"round plain>添加时间轴</el-button> -->
          <el-button style="position: absolute;right: 20px;" type="primary" size="mini" round @click="selectByCriteria">搜索</el-button>
          <el-button style="position: absolute;right: 20px;top: 60px;" type="success" size="mini" @click="getOperationLogToExcel" round plain>导出EXCEL</el-button>
          <!-- <el-button style="position: absolute;right: 120px;top: 60px;" type="info" size="mini" round plain>将3月之前的日志存为文件</el-button>
          <el-button style="position: absolute;right: 300px;top: 60px;" type="info" size="mini" round plain>读取文件日志</el-button> -->
          <!-- 循环列表 -->
          <div style="padding-left: 0px;margin:80px 0px 0px 0px;">
            <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
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
                prop="msg"
                label="日志信息详情">
              </el-table-column>
            </el-table>
          </div>
          <!-- 分页按钮 -->
          <el-pagination :page-size="num" :pager-count="11"  @current-change="handleCurrentChange" layout="prev, pager, next ,total" :total="total" style="width: 535px;margin: 0 auto 0;margin-top: 50px;margin-bottom: 20px;"></el-pagination>
       </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logstype:'all',
      search:'',
      timeaxisdate:null,
      v_timeaxisdate:'',
      type:'',
      tableData:[],
      page:1,
      num:20,
      total:0,
      responsedata:null,
      }
  },
  methods: {  
     selectByCriteria() {
        var that = this;
        if (null != this.timeaxisdate) {
          this.v_timeaxisdate = this.timeaxisdate[0]+','+this.timeaxisdate[1];
        }else{
          this.v_timeaxisdate = null;
        }
        //请求公告信息
         this.$Axios.post(this.$Global.Back_End_Service+this.$Global.selectByCriteria,this.$qs.stringify({
          search:this.search,
          timeaxisdate:this.v_timeaxisdate,
          logstype:this.logstype,
          page:this.page,
          num:this.num,
        }),
        {
          headers: {
            'token': localStorage.getItem('token'),
          }
        })
        .then(function(res){
          that.responsedata = res;
          if (res.data.RTCODE == 'success') {
            //时间
            if (null != res.data.RTDATA.data) {
              that.tableData = [];
              that.total = res.data.RTDATA.total;
              if (0 < res.data.RTDATA.total && 0 == res.data.RTDATA.data.length) {
                that.page = 1;
                that.selectByCriteria();
              }
              for (var i = 0; i < res.data.RTDATA.data.length; ++i) {
                var c_tableData = new Object();
                c_tableData.serialNumber = res.data.RTDATA.data[i].serialnumber;
                c_tableData.date = res.data.RTDATA.data[i].createtime;
                c_tableData.operator = res.data.RTDATA.data[i].operator;
                c_tableData.logstype = res.data.RTDATA.data[i].logstype;
                c_tableData.msg = res.data.RTDATA.data[i].content;
                that.tableData.push(c_tableData);
              }
            }
          }else{
            //异常结果显示
            that.$Global.error_Message(that,res.data.RTMSG + res.data.RTDATA);
          }
        })
        .catch(function(err){
          that.$Global.error_Message(that,err+'');
        });
    },
    //导出excel
    getOperationLogToExcel(){
      var that = this;
      this.$Axios.post(this.$Global.Back_End_Service+this.$Global.getOperationLogToExcel,this.$qs.stringify({
          search:this.search,
          timeaxisdate:this.v_timeaxisdate,
          logstype:this.logstype,
          num:this.total,
        }),
        {
          headers: {
            'token': localStorage.getItem('token'),
          },
          responseType: "blob"
        })
         .then(function (res) {
          const blob = new Blob(
          [res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
                    const aEle = document.createElement('a');     // 创建a标签
                    const href = window.URL.createObjectURL(blob);       // 创建下载的链接
                    aEle.href = href;
                    aEle.download = 'All_OperationLog_'+Math.floor(Math.random()*10000000 + 1)+'.xlsx';  // 下载后文件名
                    document.body.appendChild(aEle);
                    aEle.click();     // 点击下载
                    document.body.removeChild(aEle); // 下载完成移除元素
                    window.URL.revokeObjectURL(href) // 释放掉blob对象
      })
       .catch(function(err){
          that.$Global.error_Message(that,err+'');
        });
    },
      handleCurrentChange(val){
      this.page = val;
      this.selectByCriteria();
    },
    tableRowClassName({row, rowIndex}){
        if ('exception' == this.responsedata.data.RTDATA.data[rowIndex].logstype) {
          return 'warning-row';
        }
    } 
    },
  created(){
    //页面加载时执行
    
  },
  mounted(){
    //页面加载后执行
    this.selectByCriteria();
  }
}
</script>
<style>
   .el-table .warning-row {
    background: #FF9696;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->