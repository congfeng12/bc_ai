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
          <!-- 用户状态 -->
          <h3 style="position: absolute;top: 40px;left: 20px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">用户状态:</font>
          </h3>
          <el-select v-model="accounttype" placeholder="请选择活动区域" style="position: absolute;top: 60px;left: 100px;width: 150px;" size="mini">
            <el-option label="不限制" value="n/s"></el-option>
            <el-option label="正常" value="normal"></el-option>
            <el-option label="锁定" value="lock"></el-option>
            <el-option label="删除" value="del"></el-option>
            <el-option label="异常状态" value="abnormal"></el-option>
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
          <el-button style="position: absolute;right: 20px;" type="primary" size="mini" round>搜索</el-button>
          <!-- 循环列表 -->
          <div style="padding-left: 0px;margin:80px 0px 0px 0px;">
            <el-table
              :data="accounts"
              stripe
              style="width: 100%">
            <el-table-column
              type="selection"
              width="30">
            </el-table-column>
            <el-table-column type="expand">
              <template slot-scope="detailed">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="用户类型">
                    <el-tag v-if="'member' === detailed.row.type" type="success" size="mini">平台会员</el-tag>
                    <el-tag v-else-if="'admin' === detailed.row.type" size="mini">平台管理员</el-tag>
                    <el-tag v-else-if="'superadmin' === detailed.row.type" type="warning" size="mini">超级管理员</el-tag>
                    <el-tag v-else type="danger" size="mini">错误类型</el-tag>
                  </el-form-item>
                  <el-form-item label="注册时间">
                    <span>{{ detailed.row.createtime }}</span>
                  </el-form-item>
                  <el-form-item label="电子邮箱">
                    <span>{{ detailed.row.email }}</span>
                  </el-form-item>
                  <el-form-item label="电话号码">
                  <span>{{ detailed.row.phonenumber }}</span>
                  </el-form-item>
                  <el-form-item label="姓名">
                    <span>{{ detailed.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="身份证号码">
                    <span>{{ detailed.row.idcard }}</span>
                  </el-form-item>
                  <el-form-item label="余额">
                    <span>¥ {{ detailed.row.money }}</span>
                  </el-form-item>
                  <el-form-item label="发送消息">
                   <el-button size="mini" type="primary" plain>发送短信</el-button>
                   <el-button size="mini" type="success" plain>发送邮件</el-button>
                  </el-form-item>
                  <el-form-item label="权限列表">
                    <el-tag v-for="(power,index) in detailed.row.powers" :key="index" type="info" size="mini" style="margin-right: 5px;">{{power.val}}</el-tag>
                  </el-form-item>
                  <el-form-item label="功能列表">
                    <el-button size="mini" type="warning" plain>初始化密码</el-button>
                    <el-button size="mini" type="primary" plain>提升至管理员</el-button>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="用户ID"
              width="150"
              prop="id">
            </el-table-column>
            <el-table-column
              label="用户昵称"
              width="200"
              prop="username">
            </el-table-column>
            <el-table-column
              label="用户状态"
              width="110"
              prop="state">
              <template slot-scope="props">
                <el-tag v-if="'normal' === props.row.state" type="success" size="mini">正常</el-tag>
                <el-tag v-else-if="'lock' === props.row.state" type="warning" size="mini">锁定</el-tag>
                <el-tag v-else-if="'del' === props.row.state" type="danger" size="mini">删除</el-tag>
                <el-tag v-else type="danger" size="mini">异常状态</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="最后登录地点"
               width="230"
              prop="place">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <!-- 按钮组 -->
                <el-button size="mini" type="info" @click="viewlog(scope.row)" plain>日志</el-button>
                <el-button style="margin-left: 2px;" size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)" plain>编辑</el-button>
                <el-button style="margin-left: 2px;" size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)" plain>锁定</el-button>
                <el-button style="margin-left: 2px;" size="mini" type="success" @click="handleEdit(scope.$index, scope.row)" plain>解锁</el-button>
                <el-button style="margin-left: 2px;" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" plain>删除</el-button>
                 <!-- 版本历史表格 -->
              <el-dialog title="日志" :visible.sync="dialogTableVisible" >
                <el-table 
                  :data="personallogs.filter(data => !searchlogs || data.msg.toLowerCase().includes(searchlogs.toLowerCase()))"
                  max-height="550"
                  >
                  <el-table-column 
                    property="time" 
                    label="操作日期" 
                    width="200"
                    :filters="accountlogstime"
                    :filter-method="filterHandler"
                  ></el-table-column>
                  <el-table-column property="name" label="操作人员" width="160"></el-table-column>
                  <el-table-column property="msg" label="操作内容">
                    <template slot="header" slot-scope="scope">
                      <el-input
                        v-model="searchlogs"
                        size="mini"
                        placeholder="输入关键字搜索日志详情"/>
                      </template>
                  </el-table-column>
                </el-table>
              </el-dialog>
              </template>
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
      accounttype:'',
      search:'',
      timeaxisdate:'',
      dialogTableVisible:false,
      searchlogs:'',
      personallogs:[],
      accountlogstime:
        [
          {text: '2019-08-12 09:23:17', value: '2019-08-12 09:23:17'}, 
          {text: '2019-08-12 09:23:18', value: '2019-08-12 09:23:18'}, 
        ],
      //静态资源列表
      accounts: [
         {
          //用户id
          id:'1001001',
          //用户名
          username:'功夫大师',
          //用户类型
          type:'member',
          //用户状态
          state:'normal',
          //用户注册时间
          createtime:'2019-08-21',
          //电子邮箱
          email:'zhangsanfeng@163.com',
          //电话
          phonenumber:'18769089659',
          //姓名
          name:'张三丰',
          //身份证
          idcard:'331003199304281874',
          //余额
          money:'99.99',
          //最后登录地点
          place:'内蒙古自治区 兴安盟',
          //账户日志
          logs:[
            {
              time: '2019-08-12 09:23:17',
              name: 'CMAPLE',
              msg:'在 内蒙古自治区 兴安盟 的 00:0e:c6:b6:85:8c 终端上注册会员'
            },
            {
              time: '2019-08-12 09:23:18',
              name: 'CMAPLE',
              msg:'在 内蒙古自治区 兴安盟 的 00:0e:c6:b6:85:8c 终端上修改密码'
            },
          ],
          //权限目录
          powers:[
            {
              key:'1',
              val:'个人资源中心',
            },
            {
              key:'2',
              val:'个人操作日志',
            },
          ],
        }, 
        {
          //用户id
          id:'1001002',
          //用户名
          username:'老曹',
          //用户类型
          type:'member',
          //用户状态
          state:'lock',
          //用户注册时间
          createtime:'2019-08-20',
          //电子邮箱
          email:'laocao@163.com',
          //电话
          phonenumber:'18369021659',
          //姓名
          name:'曹玉旻',
          //身份证
          idcard:'130421199304139591',
          //余额
          money:'100',
          //最后登录地点
          place:'浙江省 杭州市',
          //账户日志
          logs:[
            {
              time: '2019-08-12 09:23:17',
              name: 'CMAPLE',
              msg:'在 浙江省 杭州市 的 00:0e:c6:b6:85:8c 终端上注册会员'
            },
            {
              time: '2019-08-12 09:23:18',
              name: 'CMAPLE',
              msg:'在 浙江省 杭州市 的 00:0e:c6:b6:85:8c 终端上修改密码'
            },
          ],
          //权限目录
          powers:[
            {
              key:'1',
              val:'个人资源中心',
            },
            {
              key:'2',
              val:'个人操作日志',
            },
          ],
        }, 
        
        

        ],
    }
  },
  methods: {  
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      //@click="dialogTableVisible = true"
      viewlog(row){
        this.personallogs = row.logs;
        this.dialogTableVisible = true
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->