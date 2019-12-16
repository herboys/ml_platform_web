<template>
    <chart ref="echarts" class="echarts" :autoresize="autoresize" :initOptions="initOptions" :options="options"></chart>
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
                // console.log(this.values,'2222');
                return this.values

            }
        },
        mounted(){
            var that=this;
            window.onresize=function(){
                that.$refs.echarts.chart.resize();
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
        height: 156px;
    }
</style>
