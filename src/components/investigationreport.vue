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
      //需要流文件
      pdfUrl:"http://localhost:8081/Report/getRequestById?id=1",
    }
  },
  methods: {  
      getpdf(){
        // console.log(new Date());
        //console.log(this.timeaxisdate);
        
      }, 
      // dataFormat(time){
      //   return `${time.getFullYear()}-${time.getMonth() + 1 >= 10 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)}-${time.getDate() >= 10 ? time.getDate() : '0' + time.getDate()}
      //           ${time.getHours() >= 10 ? time.getHours() : '0' + time.getHours()} : ${time.getMinutes()>=10?time.getMinutes():'0'+time.getMinutes()} : ${time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()}`;
      //        }
    },
  created(){
    //页面加载时执行
     
  },
  mounted(){
    //页面加载后执行
   // console.log(this.timeaxisdate);
   //      this.$Axios.post('http://localhost:8081/Report/getRequestById?id=1',{
   //        'id':this.id,
   //      })
   //      .then(function(res){
   //        this.pdfUrl = res;
   //        console.log(2222222);
   //      })
   //      .catch(function(err){
   //        console.log(err);
   //      });
  }
}
</script>
