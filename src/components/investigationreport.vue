<template>
  <div style="height: 100%">
    <iframe :src="`/static/pdfjs/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`" height="100%" width="100%"></iframe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id:1,
      pageheight:'',
      //请求流文件的地址
      pdfUrl:'',
      //请求调查报告的编号
      reportid:null,
    }
  },
  methods: {
    },
  created(){
    //页面加载时执行
    //获取域名的上的id值并请求
    this.pdfUrl = this.$Global.Back_End_Service + this.$Global.getRequestById + this.$route.query.id;
  },
  mounted(){
    //页面加载后执行
  }
}
</script>
