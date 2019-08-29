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
          <!-- 日期范围 -->
           <h3 style="position: absolute;top: 40px;left: 20px;">
              <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">日期范围:</font>
           </h3>
           <div class="block" style="position: absolute;top: 60px;left: 100px;">
           <!--  <span class="demonstration">默认</span> -->
            <el-date-picker
              v-model="reportdate"
              size="mini"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <el-button style="position: absolute;right: 20px;" type="primary" size="mini"round plain>添加职位</el-button>
          <el-button style="position: absolute;left: 500px;" type="primary" size="mini" round>搜索</el-button>
          <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:80px 0px 0px 0px;">
                <li v-for="resource in Resources" style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%;overflow: hidden;clear: both;position: relative;">
                  <div style="height: 145px;">
                  <!-- <div style="width: 194px;margin:0px;padding: 20px 0px 20px 0px;float: left;" >
                    <el-card body-style="padding:7px;margin:0px;border:0px;" style="width: 194px;min-height: 130px;" shadow="hover">
                      <img :src="resource.noticesimgurl" style="width: 180px;" ref="noticeIMG">
                    </el-card>
                  </div> -->
                    <!-- 职位名称 -->
                     <div style="width: auto;height: auto;position: absolute;top: 5px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">职位标题:</font>
                        <font style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.title}}</font>
                      </h3>
                     </div>
                    <!-- 职位地区 -->
                    <div style="width: auto;height: auto;position: absolute;top: 5px;left: 400px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">入职地区:</font>
                        <font style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.place}}</font>
                      </h3>
                     </div>
                    <!-- 职位简介 -->
                    <div style="width: auto;height: auto;position: absolute;top: 35px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">职位简介:</font>
                        <div style="width: 800px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap; display: block;position: absolute;left: 100px;top: 19px;">
                          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.msg}}</font>
                        </div>
                      </h3>
                    </div>
                    <!-- 职位创建人 -->
                    <div style="width: auto;height: auto;position: absolute;top: 65px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">职位创建人:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.creatuser}}</font>
                      </h3>
                    </div>
                   <!-- 职位创建时间 -->
                   <div style="width: auto;height: auto;position: absolute;top: 65px;left: 400px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">职位创建时间:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.creatdate}}</font>
                      </h3>
                    </div>
                    <!-- 职位需求人数 -->
                     <div style="width: auto;height: auto;position: absolute;top: 95px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">职位需求人数:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.amount}} 人</font>
                      </h3>
                    </div>
                    <!-- 按钮组 -->
                    <div style="width: auto;height: auto;position: absolute;top: 30px;right:0px;">
                       <el-button type="primary" size="mini" plain>编辑职位</el-button>
                    </div>
                    <div style="width: auto;height: auto;position: absolute;top: 60px;right:0px;">
                       <el-button type="danger" size="mini" plain>删除职位</el-button>
                    </div>
                  </div>
                </li>
          </ol>
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
      pagetype:'',
      search:'',
      reportdate:'',
      //静态资源列表
      Resources: [
        { 
          //职位编号
          id:'W200-20190827-001',
          //职位标题
          title:'JAVA工程师',
          //职位地区
          place:'不限制地区',
          //职位类型
          type:'技术人员',
          //职位简介
          msg:'主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新',
          //职位创建人
          creatuser:'CMAPLE',
          //职位创建时间
          creatdate:'2019-08-28',
          //职位需求人数
          amount:'5',
        },
        { 
          //职位编号
          id:'W200-20190827-001',
          //职位标题
          title:'JAVA工程师',
          //职位地区
          place:'不限制地区',
          //职位类型
          type:'技术人员',
          //职位简介
          msg:'主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新',
          //职位创建人
          creatuser:'CMAPLE',
          //职位创建时间
          creatdate:'2019-08-28',
          //职位需求人数
          amount:'5',
        },
        { 
          //职位编号
          id:'W200-20190827-001',
          //职位标题
          title:'JAVA工程师',
          //职位地区
          place:'不限制地区',
          //职位类型
          type:'技术人员',
          //职位简介
          msg:'主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新',
          //职位创建人
          creatuser:'CMAPLE',
          //职位创建时间
          creatdate:'2019-08-28',
          //职位需求人数
          amount:'5',
        },
        { 
          //职位编号
          id:'W200-20190827-001',
          //职位标题
          title:'JAVA工程师',
          //职位地区
          place:'不限制地区',
          //职位类型
          type:'技术人员',
          //职位简介
          msg:'主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新',
          //职位创建人
          creatuser:'CMAPLE',
          //职位创建时间
          creatdate:'2019-08-28',
          //职位需求人数
          amount:'5',
        },
        { 
          //职位编号
          id:'W200-20190827-001',
          //职位标题
          title:'JAVA工程师',
          //职位地区
          place:'不限制地区',
          //职位类型
          type:'技术人员',
          //职位简介
          msg:'主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新主要负责进行后台模块的更新',
          //职位创建人
          creatuser:'CMAPLE',
          //职位创建时间
          creatdate:'2019-08-28',
          //职位需求人数
          amount:'5',
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