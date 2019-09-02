<template>
  <div style="background-color: #F2F6FC;height: 100%">
    <iframe :src=' "./static/pdfjs/web/viewer.html?file=" + "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf" ' height="100%" width="100%"></iframe>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pageheight:'',
      //需要流文件
      pdfUrl:'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf',
    }
  },
  
  mounted(){
    //页面加载后执行this.pageheight = (document.documentElement.scrollHeight) + 'px';
    
  }
}
</script>
