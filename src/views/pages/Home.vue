<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <!--<div id="myChart" :style="{width: '300px', height: '300px'}"></div>-->
    </div>
</template>
<script>
    import  Header from  '@/views/components/header'
    export default {
        name: "Home",
        data () {
            return {
                msg: 'Welcome to Your Vue.js Apprr'
            }
        },
        components:{Header},
        mounted(){
            //this.drawLine();
            // this.$router.push({path:'/project'})
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        }
    }
</script>

<style scoped>

</style>
