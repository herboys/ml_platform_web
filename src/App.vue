<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
    export default {
        name: "APP",
        data(){
            return{
                username:"",
                userPassword:"",
                captcha:"",
                captchainput:"",
            }
        },
        mounted() {
            // getlogin().then(res=>{
            //     console.log(res)
            //     this.captcha='data:image/png;base64, '+res.captcha
            // })
        },
        methods:{
        },
        created() {
          var style = localStorage.getItem("style");
          if(style){
            $("#style").attr("href",style); //实现将主题保存在内存中刷新浏览器不改变
          }
        }
    }
</script>
<style lang="scss">
</style>
