<template>
  <div id="app" :style="{height:pageheight+'px'}">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      pageheight:'',
    }
  },
  
    methods:{
    getPageHeight(){
      //this.pageheight = document.documentElement.scrollHeight;
      this.pageheight = window.innerHeight;
      // console.log("1"+this.pageheight)
      // console.log("2"+document.documentElement.scrollHeight)
      // console.log("3"+window.innerHeight)

    }
  },
 created(){
    // window.addEventListener('resize', this.getPageHeight());
  },
  destroyed(){
    // window.removeEventListener('resize', this.getPageHeight())
  },
  mounted(){
    window.onresize = () =>{
      return(()=>{
        this.getPageHeight()
      }
        )()
      }
        this.getPageHeight()
    }
  
  }

</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
