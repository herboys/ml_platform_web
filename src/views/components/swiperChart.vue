<template>
    <chart :initOptions="initOptions" :options="options"></chart>
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts.vue'

  export default {
    name:"chart",
    data (){
      return{
        initOptions:{
            renderer:"svg"
        }
      }
    },
    props:['options'],
    computed:{
        options:function(){
        }
    },
    components:{
      chart:ECharts
    }
  }
</script>

<style scoped>
    .echarts{
        width: 100%;
    }
</style>
