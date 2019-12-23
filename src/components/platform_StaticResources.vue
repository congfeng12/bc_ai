<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
      <!-- 地址栏显示区域&按钮 -->
      <el-card style="position: absolute;top: 20px;width: 100%;height: 65px;margin-bottom: 50px;">
        <h3 style="position: absolute;top: 0px;">
          <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">资源位置:{{resourcespath}}</font>
        </h3>
        <el-button type="primary" style="float: right;margin-top: -7px;"><i class="el-icon-upload"></i>&nbsp上传文件</el-button>
        <el-button v-if="'/Users/congfeng/Downloads' !== resourcespath" style="float: right;margin-top: -7px;margin-right: 5px;"><i class="el-icon-back"></i>&nbsp返回上级</el-button>
      </el-card>
      <el-card style="position: absolute;top: 100px;width: 100%;height: auto;margin-bottom: 50px;">
        <!-- 静态资源列表 -->
        <el-row :gutter="12">
          <el-col :span="3" v-for="(resource , index) in Resources" :key="index" style="margin-bottom: 10px;">
            <el-card :body-style="{padding: '5px'}" shadow="hover" style="background-color: #F8F8F8;position: relative;">
                <!-- 类型图片 -->
                <img v-if="'jpeg' === resource.suffix || 'png' === resource.suffix || 'jpg' === resource.suffix" src="../../static/img.png" style="height: 69.48px;">
                <img v-else-if="'null' === resource.suffix" src="../../static/directory.png" style="height: 69.48px;">
                <img v-else-if="'war' === resource.suffix" src="../../static/code.png" style="width: 60px;height: 69.48px;margin-left: 4px;">
                <img v-else-if="'pdf' === resource.suffix" src="../../static/pdf.png" style="height: 69.48px;">
                <img v-else-if="'txt' === resource.suffix" src="../../static/txt.png" style="height: 69.48px;">
                <img v-else-if="'zip' === resource.suffix || 'rar' === resource.suffix" src="../../static/zip.png" style="height: 69.48px;">
                <img v-else src="../../static/file.png" style="height: 69.48px;">
               <div>
                 <div style="width: 100px;overflow: hidden; text-overflow: ellipsis;white-space: nowrap; display: block;">
                  <h3 style="padding: 0px;margin: 0px;">
                    <font style="color: #000000;font-size: 0.6em;letter-spacing: 0.1em;font-weight: bold;">{{resource.filename}}</font>
                  </h3>
                 </div>
               </div>
               <el-button @click="resourceinfo(resource)" icon="el-icon-arrow-down" type="info" style="position: absolute;top: 2px;right: 2px;padding: 2px;"></el-button>
            </el-card>
            <!-- 弹出框 -->
          </el-col>
        </el-row>
        <!-- 页脚 -->
         <el-dialog title="文件&文件夹详情" :visible.sync="dialogTableVisible">
              <!-- 文件相关介绍 -->
              <h3 style="padding: 0px;margin: 0px;">
                <font style="color: #606266;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">文件名：{{resourcedata.filename}}</font>
              </h3>
              <h3 style="padding: 0px;margin: 0px;">
                <font style="color: #606266;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">文件类型：{{resourcedata.filetype}}</font>
              </h3>
              <h3 style="padding: 0px;margin: 0px;">
                <font style="color: #606266;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">文件路径：{{resourcedata.filepath}}</font>
              </h3>
              <h3 style="padding: 0px;margin: 0px;">
                <font style="color: #606266;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">文件大小：{{resourcedata.filesize}}</font>
              </h3>
              <h3 style="padding: 0px;margin: 0px;">
                <font style="color: #606266;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">文件创建时间：{{resourcedata.createtime}}</font>
              </h3>
              <h3 style="padding: 0px;margin: 0px;">
                <font style="color: #606266;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">文件修改时间：{{resourcedata.modifytime}}</font>
              </h3>
              <el-divider></el-divider>
              <!-- 按钮组 -->
              <el-row>
                <!-- 查看文件夹内文件信息 -->
                <el-button v-if="'null' === resourcedata.suffix" type="primary"><i class="el-icon-s-unfold"></i>&nbsp查看文件夹内文件信息</el-button>
                <!-- 访问文件夹 -->
                <el-button v-if="'null' === resourcedata.suffix" type="primary"><i class="el-icon-s-data"></i>&nbsp访问文件夹</el-button>
                <!-- 移动文件到指定目录 - 文件夹不可显示 -->
                <el-button v-if="'null' !== resourcedata.suffix" type="primary"><i class="el-icon-upload"></i>&nbsp移动文件到指定目录</el-button>
                <!-- 下载文件到本地 -->
                <el-button v-if="'null' !== resourcedata.suffix" type="primary"><i class="el-icon-download"></i>&nbsp下载文件</el-button>
                <!-- 删除文件 - 文件夹不可显示 -->
                <el-button v-if="'null' !== resourcedata.suffix" type="danger"><i class="el-icon-delete"></i>&nbsp删除文件</el-button>
              </el-row>
            </el-dialog>
      </el-card>

    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      resourcespath:'/Users/congfeng/Downloads',
      dialogTableVisible: false,
      resourcedata:[],
      //静态资源列表
      Resources: [
        {
          filename:'报销.jpeg',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/报销.jpeg',
          filesize:'194.66K',
          suffix:'jpeg',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'游戏素材',
          filetype:'Directory',
          filepath:'/Users/congfeng/Downloads/游戏素材',
          filesize:'24.11M',
          suffix:'null',
          createtime:'2019-01-15 16:51:39',
          modifytime:'2019-09-23 14:35:21'
        },
        {
          filename:'hello.war',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/hello.war',
          filesize:'28.16M',
          suffix:'war',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'demo.pdf',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/demo.pdf',
          filesize:'194.66K',
          suffix:'pdf',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'游戏素材',
          filetype:'Directory',
          filepath:'/Users/congfeng/Downloads/游戏素材',
          filesize:'24.11M',
          suffix:'null',
          createtime:'2019-01-15 16:51:39',
          modifytime:'2019-09-23 14:35:21'
        },
        {
          filename:'hello.txt',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/hello.txt',
          filesize:'28.16M',
          suffix:'txt',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'报销.jpeg',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/报销.jpeg',
          filesize:'194.66K',
          suffix:'jpeg',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'游戏素材',
          filetype:'Directory',
          filepath:'/Users/congfeng/Downloads/游戏素材',
          filesize:'24.11M',
          suffix:'null',
          createtime:'2019-01-15 16:51:39',
          modifytime:'2019-09-23 14:35:21'
        },
        {
          filename:'Overlord纯简体版ePub合集.rar',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/Overlord纯简体版ePub合集.rar',
          filesize:'63.14M',
          suffix:'rar',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'报销.jpeg',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/报销.jpeg',
          filesize:'194.66K',
          suffix:'jpeg',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'游戏素材',
          filetype:'Directory',
          filepath:'/Users/congfeng/Downloads/游戏素材',
          filesize:'24.11M',
          suffix:'null',
          createtime:'2019-01-15 16:51:39',
          modifytime:'2019-09-23 14:35:21'
        },
        {
          filename:'hello.war',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/hello.war',
          filesize:'28.16M',
          suffix:'war',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'报销.jpeg',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/报销.jpeg',
          filesize:'194.66K',
          suffix:'jpeg',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'报销.jpeg',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/报销.jpeg',
          filesize:'194.66K',
          suffix:'jpeg',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'游戏素材',
          filetype:'Directory',
          filepath:'/Users/congfeng/Downloads/游戏素材',
          filesize:'24.11M',
          suffix:'null',
          createtime:'2019-01-15 16:51:39',
          modifytime:'2019-09-23 14:35:21'
        },
        {
          filename:'hello.war',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/hello.war',
          filesize:'28.16M',
          suffix:'war',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
        {
          filename:'报销.jpeg',
          filetype:'File',
          filepath:'/Users/congfeng/Downloads/报销.jpeg',
          filesize:'194.66K',
          suffix:'jpeg',
          createtime:'2019-06-17 09:52:03',
          modifytime:'2019-11-10 20:20:31'
        },
      ],
    }
  },
  methods: {
   resourceinfo(data){
        this.dialogTableVisible = true;
        this.resourcedata = data;
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
<!-- Add "scoped" attribute to limit CSS to this component only -->