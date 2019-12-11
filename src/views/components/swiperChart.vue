<template>
    <chart ref="echarts" :autoresize="autoresize" class="echarts" :initOptions="initOptions" :options="options"></chart>
</template>

<script>
    import ECharts from 'vue-echarts/components/ECharts.vue'

    export default {
        name:"chart01",
        data (){
            return{
                initOptions:{
                    // renderer:"svg"
                },
                autoresize:true
            }
        },
        props:['values','color'],
        computed:{
            theme:function(){
                return this.$store.state.theme
            },
            options:function(){
                return this.values;
            }
        },
        mounted(){
            
        },
        components:{
            chart:ECharts
        }
    }
</script>

<style scoped>
    .echarts{
        width: 100%;
        height: 156px;
    }
</style>
