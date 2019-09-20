<template>
  <div style="width: 100%;height: 100%;background-color: #F2F6FC;">
    <div style="width: 1150px;height: 100%;margin: 0 auto 0;position: relative;">
       <!-- 显示栏 -->
       <el-card style="position: absolute;top: 20px;width: 100%;height: auto;margin-bottom: 50px;">
           <!-- 位置 -->
         <h3 style="position: absolute;top: 0px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">资源位置:</font>
         </h3>
          <el-select v-model="pageselect" filterable clearable placeholder="请选择" style="position: absolute;left: 100px;" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
          </el-select>
         <!-- 类型 -->
          <h3 style="position: absolute;top: 0px;left: 340px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">类型:</font>
          </h3>
          <el-select v-model="pagetype" placeholder="请选择活动区域" style="position: absolute;left: 385px;" size="mini">
            <el-option label="不限制" value=""></el-option>
            <el-option label="图片" value="img"></el-option>
            <el-option label="域名" value="domainname"></el-option>
          </el-select>
         <!-- 全局搜索 -->
          <h3 style="position: absolute;top: 0px;left: 620px;">
            <font style="color: #C0C4CC;font-size: 0.8em;letter-spacing: 0.1em;font-weight: bold;">全文搜索:</font>
          </h3>
          <el-input
            placeholder="请输入内容"
            v-model="search"
            clearable
            style="width: 200px;position: absolute;left: 700px;" 
            size="mini">
          </el-input>
          <el-button style="position: absolute;right: 20px;" type="primary" size="mini"round plain>添加资源</el-button>
          <el-button style="position: absolute;right: 180px;" type="primary" size="mini" round>搜索</el-button>
          <!-- 循环列表 -->
          <ol style="padding-left: 0px;margin:60px 0px 0px 0px;">
                <li v-for="resource in Resources" style="list-style-type: none;border-top:1px solid #DCDFE6;padding: 10px 0px 10px 0px;width: 100%;overflow: hidden;clear: both;position: relative;">
                  <!-- 图片 -->
                  <div v-if="resource.imgtype">
                  <div style="width: 194px;margin:0px;padding: 20px 0px 20px 0px;float: left;" >
                    <el-card body-style="padding:7px;margin:0px;border:0px;" style="width: 194px;" shadow="always">
                      <el-image style="width: 180px;min-height: 100px;" :src="resource.imgurl" :preview-src-list="resource.bigimgurl" ></el-image>
                    </el-card>
                  </div>
                    <!-- 图片实际大小 -->
                     <div style="width: auto;height: auto;position: absolute;top: 5px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">图片实际大小:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.imgrealsize}}</font>
                      </h3>
                     </div>
                    <!-- 图片所在网页所需大小 -->
                    <div style="width: auto;height: auto;position: absolute;top: 5px;left: 550px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">图片所在网页所需大小:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.imgrelativesize}}</font>
                      </h3>
                    </div>
                    <!-- 图片绝对路径 -->
                    <div style="width: auto;height: auto;position: absolute;top: 35px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">图片绝对路径:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.imgrealpath}}</font>
                      </h3>
                    </div>
                    <!-- 图片引用路径 -->
                    <div style="width: auto;height: auto;position: absolute;top: 65px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">图片引用路径:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.imgrelativepath}}</font>
                      </h3>
                    </div>
                    <!-- 图片所在页面位置 -->
                    <div style="width: auto;height: auto;position: absolute;top: 95px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">图片所在页面位置:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.inpagepath}}</font>
                      </h3>
                    </div>
                    <!-- 图片名称 -->
                    <div style="width: auto;height: auto;position: absolute;top: 95px;left: 550px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">图片名称:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.imgname}}</font>
                      </h3>
                    </div>
                    <!-- 按钮组 -->
                    <div style="width: auto;height: auto;position: absolute;top: 30px;right:0px;">
                       <el-button type="primary" size="mini" plain>编辑图片</el-button>
                    </div>
                    <div style="width: auto;height: auto;position: absolute;top: 60px;right:0px;">
                       <el-button type="danger" size="mini" plain>删除图片</el-button>
                    </div>
                  </div>
                  <!-- 域名资源 -->
                  <div v-if="!resource.imgtype">
                     <div style="width: 194px;min-height: 60px;margin:0px;padding: 20px 0px 20px 0px;float: left;" >
                       
                     </div>
                    <!-- 域名 -->
                     <div style="width: auto;height: auto;position: absolute;top: 20px;left: 230px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">域名:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.domainname}}</font>
                      </h3>
                     </div>
                     <!-- 域名 -->
                     <div style="width: auto;height: auto;position: absolute;top: 20px;left: 550px;">
                      <h3>
                        <font style="color: #C0C4CC;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">域名所在位置:</font>
                        <font style="color: #606266;font-size: 0.7em;letter-spacing: 0.1em;font-weight: bold;">{{resource.inpagepath}}</font>
                      </h3>
                     </div>
                     <!-- 按钮组 -->
                    <div style="width: auto;height: auto;position: absolute;top: 30px;right:0px;">
                       <el-button type="primary" size="mini" plain>编辑域名</el-button>
                    </div>
                      <div style="width: auto;height: auto;position: absolute;top: 60px;right:0px;">
                       <el-button type="danger" size="mini" plain>删除域名</el-button>
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
      pageselect:'',
      pagetype:'',
      search:'',
      options: [
        {
          value: '',
          label: '不限制'
        }, 
        {
          value: '选项1',
          label: '官网主页'
        }, {
          value: '选项2',
          label: '关于页面'
        }, {
          value: '选项3',
          label: '进展页面'
        }, {
          value: '选项4',
          label: '资源页面'
        }, {
          value: '选项5',
          label: '宪章页面'
        }],
      //静态资源列表
      Resources: [
        {
          imgtype:true,
          imgurl:require('../../static/about2.jpg'),
          //数组
          bigimgurl: [require('../../static/about2.jpg')],
          imgrealsize:'638 × 848',
          imgrelativesize:'180 × 239',
          imgrealpath:'www/server/apache-tomcat-default/webapps/ROOT/static', 
          imgrelativepath:'require('+'../../static/about2.jpg'+')',
          inpagepath:'关于页面 - 团队合影',
          imgname:'about2.jpg',
          domainname:'',
        },
        {
          imgtype:false,
          imgurl:'',
          //数组
          bigimgurl: [],
          imgrealsize:'',
          imgrelativesize:'',
          imgrealpath:'', 
          imgrelativepath:'',
          inpagepath:'官网主页 - LOGO',
          imgname:'',
          domainname:'/',
        },
        {
          imgtype:true,
          imgurl:require('../../static/notistest2.jpg'),
          //数组
          bigimgurl: [require('../../static/notistest2.jpg')],
          imgrealsize:'638 × 848',
          imgrelativesize:'180 × 239',
          imgrealpath:'www/server/apache-tomcat-default/webapps/ROOT/static', 
          imgrelativepath:'require('+'../../static/notistest2.jpg'+')',
          inpagepath:'公告页面 - 公告',
          imgname:'notistest2.jpg',
          domainname:'',
        },
        {
          imgtype:false,
          imgurl:'',
          //数组
          bigimgurl: [],
          imgrealsize:'',
          imgrelativesize:'',
          imgrealpath:'', 
          imgrelativepath:'',
          inpagepath:'官网主页 - 关于页面',
          imgname:'',
          domainname:'/about',
        },
        {
          imgtype:false,
          imgurl:'',
          //数组
          bigimgurl: [],
          imgrealsize:'',
          imgrelativesize:'',
          imgrealpath:'', 
          imgrelativepath:'',
          inpagepath:'官网主页 - 进展页面',
          imgname:'',
          domainname:'/progress',
        },
        {
          imgtype:false,
          imgurl:'',
          //数组
          bigimgurl: [],
          imgrealsize:'',
          imgrelativesize:'',
          imgrealpath:'', 
          imgrelativepath:'',
          inpagepath:'官网主页 - 资源页面',
          imgname:'',
          domainname:'/resources',
        },
        {
          imgtype:false,
          imgurl:'',
          //数组
          bigimgurl: [],
          imgrealsize:'',
          imgrelativesize:'',
          imgrealpath:'', 
          imgrelativepath:'',
          inpagepath:'官网主页 - 公告页面',
          imgname:'',
          domainname:'/notices',
        },
        {
          imgtype:false,
          imgurl:'',
          //数组
          bigimgurl: [],
          imgrealsize:'',
          imgrelativesize:'',
          imgrealpath:'', 
          imgrelativepath:'',
          inpagepath:'官网主页 - 加入页面',
          imgname:'',
          domainname:'/join',
        },
        {
          imgtype:false,
          imgurl:'',
          //数组
          bigimgurl: [],
          imgrealsize:'',
          imgrelativesize:'',
          imgrealpath:'', 
          imgrelativepath:'',
          inpagepath:'官网主页 - 宪章页面',
          imgname:'',
          domainname:'/charter',
        },
        {
          imgtype:false,
          imgurl:'',
          //数组
          bigimgurl: [],
          imgrealsize:'',
          imgrelativesize:'',
          imgrealpath:'', 
          imgrelativepath:'',
          inpagepath:'官网主页 - 声明页面',
          imgname:'',
          domainname:'/state',
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