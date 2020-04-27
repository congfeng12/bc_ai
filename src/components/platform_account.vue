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
        <!-- 用户状态 -->
        <h3 style="position: absolute;top: 40px;left: 20px;">
          <font
            style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;"
          >用户状态:</font>
        </h3>
        <el-select
          v-model="accounttype"
          placeholder="请选择活动区域"
          style="position: absolute;top: 60px;left: 100px;width: 150px;"
          size="mini"
        >
          <el-option label="不限制" value="all"></el-option>
          <el-option label="正常" value="normal"></el-option>
          <el-option label="锁定" value="lock"></el-option>
          <el-option label="删除" value="del"></el-option>
          <el-option label="异常状态" value="abnormal"></el-option>
        </el-select>
        <!-- 日期范围 -->
        <h3 style="position: absolute;top: 0px;left: 550px;">
          <font
            style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;"
          >日期范围:</font>
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
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
        <!-- <el-button style="position: absolute;right: 20px;" type="primary" size="mini"round plain>添加时间轴</el-button> -->
        <el-button
          style="position: absolute;right: 20px;"
          type="primary"
          size="mini"
          @click="selectUsers"
          round
        >搜索</el-button>
        <!-- 循环列表 -->
        <div style="padding-left: 0px;margin:80px 0px 0px 0px;">
          <el-table :data="accounts" stripe style="width: 100%">
            <el-table-column type="selection" width="30"></el-table-column>
            <el-table-column type="expand">
              <template slot-scope="detailed">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="用户类型">
                    <el-tag v-if="'member' === detailed.row.type" type="success" size="mini">平台会员</el-tag>
                    <el-tag v-else-if="'admin' === detailed.row.type" size="mini">平台管理员</el-tag>
                    <el-tag
                      v-else-if="'superadmin' === detailed.row.type"
                      type="warning"
                      size="mini"
                    >超级管理员</el-tag>
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
                    <el-tag v-if="'0' !== detailed.row.permissions[0]" type="info" size="mini">资源管理</el-tag>
                    <el-tag v-if="'0' !== detailed.row.permissions[1]" type="info" size="mini">用户管理</el-tag>
                    <el-tag v-if="'0' !== detailed.row.permissions[2]" type="info" size="mini">日志&信息</el-tag>
                    <el-tag v-if="'0' !== detailed.row.permissions[3]" type="info" size="mini">服务资源中心</el-tag>
                    <el-tag v-if="'0' !== detailed.row.permissions[4]" type="info" size="mini">个人操作日志</el-tag>
                  </el-form-item>
                  <el-form-item label="功能列表">
                    <el-button size="mini" type="warning" plain>初始化密码</el-button>
                    <el-button size="mini" type="primary" plain>提升至管理员</el-button>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="用户ID" width="150" prop="id"></el-table-column>
            <el-table-column label="用户昵称" width="200" prop="username"></el-table-column>
            <el-table-column label="用户状态" width="110" prop="state">
              <template slot-scope="props">
                <el-tag v-if="'normal' === props.row.state" type="success" size="mini">正常</el-tag>
                <el-tag v-else-if="'lock' === props.row.state" type="warning" size="mini">锁定</el-tag>
                <el-tag v-else-if="'del' === props.row.state" type="danger" size="mini">删除</el-tag>
                <el-tag v-else type="danger" size="mini">异常状态</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="最后登录地点" width="230" prop="place"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <!-- 按钮组 -->
                <el-button
                  style="margin-left: 2px;"
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)"
                  plain
                >编辑</el-button>
                <el-button
                  style="margin-left: 2px;"
                  size="mini"
                  type="warning"
                  @click="handleEdit(scope.$index, scope.row)"
                  plain
                >锁定</el-button>
                <el-button
                  style="margin-left: 2px;"
                  size="mini"
                  type="success"
                  @click="handleEdit(scope.$index, scope.row)"
                  plain
                >解锁</el-button>
                <el-button
                  style="margin-left: 2px;"
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  plain
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
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
      accounttype: "all",
      search: "",
      timeaxisdate: null,
      v_timeaxisdate: "",
      searchlogs: "",
      //静态资源列表
      accounts: [],
      page: 1,
      num: 20,
      total: 0
    };
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
      const property = column["property"];
      return row[property] === value;
    },
    //@click="dialogTableVisible = true"
    viewlog(row) {
      this.personallogs = row.logs;
      this.dialogTableVisible = true;
    },
    selectUsers() {
      //设置必要参数
      var that = this;
      if (null != this.timeaxisdate) {
        this.v_timeaxisdate = this.timeaxisdate[0] + "," + this.timeaxisdate[1];
      } else {
        this.v_timeaxisdate = null;
      }
      //请求登录用户信息
      this.$Axios
        .post(
          this.$Global.Back_End_Service + this.$Global.selectUsers,
          this.$qs.stringify({
            content: this.search,
            timeaxisdate: this.v_timeaxisdate,
            usertype: "member",
            useraffairs: this.accounttype,
            page: this.page,
            num: this.num
          }),
          {
            headers: {
              token: localStorage.getItem("token")
            }
          }
        )
        .then(function(res) {
          if (res.data.RTCODE == "success") {
            if (null != res.data.RTDATA.data) {
              that.accounts = [];
              that.total = res.data.RTDATA.total;
              if (
                0 < res.data.RTDATA.total &&
                0 == res.data.RTDATA.data.length
              ) {
                that.page = 1;
                that.selectUsers();
              }
              console.log(res.data.RTDATA.data);
              for (var i = 0; i < res.data.RTDATA.data.length; ++i) {
                var c_tableData = new Object();
                c_tableData.id = res.data.RTDATA.data[i].id;
                c_tableData.username = res.data.RTDATA.data[i].petname;
                c_tableData.type = res.data.RTDATA.data[i].usertype;
                c_tableData.state = res.data.RTDATA.data[i].useraffairs;
                c_tableData.createtime = res.data.RTDATA.data[i].createtime;
                c_tableData.email = res.data.RTDATA.data[i].useremail;
                c_tableData.phonenumber =
                  res.data.RTDATA.data[i].telephonenumber;
                c_tableData.name = res.data.RTDATA.data[i].name;
                c_tableData.idcard = res.data.RTDATA.data[i].idcard;
                c_tableData.place = res.data.RTDATA.data[i].useraddress;
                c_tableData.money = res.data.RTDATA.data[i].userbalance;
                c_tableData.permissions = res.data.RTDATA.data[
                  i
                ].permissions.split(",");
                that.accounts.push(c_tableData);
              }
            }
          } else {
            //异常结果显示
            that.$Global.error_Message(that, res.data.RTMSG + res.data.RTDATA);
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
    this.selectUsers();
  }
};
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