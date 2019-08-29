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
              v-model="milestonedate"
              size="mini"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <el-button style="position: absolute;right: 20px;" type="primary" size="mini"round plain>添加里程碑</el-button>
          <el-button style="position: absolute;left: 500px;" type="primary" size="mini" round>搜索</el-button>
          <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:80px 0px 0px 0px;">
                <li v-for="resource in Resources" style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%;overflow: hidden;clear: both;position: relative;">
                  <div>
                  <div style="width: 194px;margin:0px;padding: 20px 0px 20px 0px;float: left;" >
                    <el-card body-style="padding:7px;margin:0px;border:0px;" style="width: 194px;min-height: 130px;" shadow="hover">
                      <!-- <el-image style="width: 180px;min-height: 100px;" :src="resource.imgurl" :preview-src-list="resource.bigimgurl" ></el-image> -->
                      <img :src="resource.noticesimgurl" style="width: 180px;" ref="noticeIMG">
                    </el-card>
                  </div>
                    <!-- 里程碑标题 -->
                     <div style="width: auto;height: auto;position: absolute;top: 5px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">里程碑标题:</font>
                        <font style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.noticestitle}}</font>
                      </h3>
                     </div>
                    <!-- 里程碑编号 -->
                    <div style="width: auto;height: auto;position: absolute;top: 5px;left: 680px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">里程碑编号:</font>
                        <font style="color: #000000;font-size: 0.9em;letter-spacing: 0.1em;font-weight: bolder;">{{resource.noticesid}}</font>
                      </h3>
                    </div>
                    <!-- 里程碑简介 -->
                    <div style="width: auto;height: auto;position: absolute;top: 35px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">里程碑简介:</font>
                        <div style="width: 650px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap; display: block;position: absolute;left: 85px;top: 19px;">
                          <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.noticessynopsis}}</font>
                        </div>
                      </h3>
                    </div>
                    <!-- 里程碑作者 -->
                    <div style="width: auto;height: auto;position: absolute;top: 65px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">里程碑作者:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.noticeauthor}}</font>
                      </h3>
                    </div>
                    <!-- 里程碑创建时间 -->
                    <div style="width: auto;height: auto;position: absolute;top: 65px;left: 430px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">里程碑创建时间:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.creatdate}}</font>
                      </h3>
                    </div>
                    <!-- 阅读时间 -->
                    <div style="width: auto;height: auto;position: absolute;top: 65px;left: 730px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">阅读时间:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.readtime}}</font>
                      </h3>
                    </div>
                    <!-- 里程碑文件 -->
                    <div style="width: auto;height: auto;position: absolute;top: 95px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">里程碑文件:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.noticefiletitle}}</font>
                      </h3>
                    </div>
                    <!-- 里程碑文件路径 -->
                    <div style="width: auto;height: auto;position: absolute;top: 95px;left: 530px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">里程碑文件路径:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.noticefileurl}}</font>
                      </h3>
                    </div>
                    <!-- 里程碑名称 -->
                    <div style="width: auto;height: auto;position: absolute;top: 125px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">图片名称:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.noticesimgtitle}}</font>
                      </h3>
                    </div>
                    <!-- 图片路径 -->
                    <div style="width: auto;height: auto;position: absolute;top: 125px;left: 530px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">图片路径:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.imgrelativepath}}</font>
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
      milestonedate:'',
      //静态资源列表
      Resources: [
        { 
          //图片文件
          noticesimgtitle:'notistest2.jpg',
          //公告图片路径
          noticesimgurl:require('../../static/notistest2.jpg'),
          //公告图片饮用路径
          imgrelativepath:'require('+'../../static/notistest2.jpg'+')',
          //公告名称
          noticestitle:'为什么负责人工智能开发需要安全合作',
          //公告编号
          noticesid:'M001-201908-001',
          //公告简介
          noticessynopsis:'我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          //公告创建人
          noticeauthor:'CMAPLE',
          //公告创建时间
          creatdate:'2019-07-21',
          //阅读时间
          readtime:'16分钟',
          //公告文件名称
          noticefiletitle:'M001-20190821-001.txt',
          //公告文件路径
          noticefileurl:'/milestone/20190821/',
        },
        { 
          //图片文件
          noticesimgtitle:'notistest2.jpg',
          //公告图片路径
          noticesimgurl:require('../../static/notistest2.jpg'),
          //公告图片饮用路径
          imgrelativepath:'require('+'../../static/notistest2.jpg'+')',
          //公告名称
          noticestitle:'为什么负责人工智能开发需要安全合作',
          //公告编号
          noticesid:'M001-201908-001',
          //公告简介
          noticessynopsis:'我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          //公告创建人
          noticeauthor:'CMAPLE',
          //公告创建时间
          creatdate:'2019-07-21',
          //阅读时间
          readtime:'16分钟',
          //公告文件名称
          noticefiletitle:'M001-20190821-001.txt',
          //公告文件路径
          noticefileurl:'/milestone/20190821/',
        },
        { 
          //图片文件
          noticesimgtitle:'notistest2.jpg',
          //公告图片路径
          noticesimgurl:require('../../static/notistest2.jpg'),
          //公告图片饮用路径
          imgrelativepath:'require('+'../../static/notistest2.jpg'+')',
          //公告名称
          noticestitle:'为什么负责人工智能开发需要安全合作',
          //公告编号
          noticesid:'M001-201908-001',
          //公告简介
          noticessynopsis:'我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          //公告创建人
          noticeauthor:'CMAPLE',
          //公告创建时间
          creatdate:'2019-07-21',
          //阅读时间
          readtime:'16分钟',
          //公告文件名称
          noticefiletitle:'M001-20190821-001.txt',
          //公告文件路径
          noticefileurl:'/milestone/20190821/',
        },
        { 
          //图片文件
          noticesimgtitle:'notistest2.jpg',
          //公告图片路径
          noticesimgurl:require('../../static/notistest2.jpg'),
          //公告图片饮用路径
          imgrelativepath:'require('+'../../static/notistest2.jpg'+')',
          //公告名称
          noticestitle:'为什么负责人工智能开发需要安全合作',
          //公告编号
          noticesid:'M001-201908-001',
          //公告简介
          noticessynopsis:'我们训练了一个大规模的无监督语言模型，该模型生成连贯的文本段落，在许多语言建模基准上实现了最先进的表现，并执行基本的阅读理解，机器翻译，问答和总结。',
          //公告创建人
          noticeauthor:'CMAPLE',
          //公告创建时间
          creatdate:'2019-07-21',
          //阅读时间
          readtime:'16分钟',
          //公告文件名称
          noticefiletitle:'M001-20190821-001.txt',
          //公告文件路径
          noticefileurl:'/milestone/20190821/',
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