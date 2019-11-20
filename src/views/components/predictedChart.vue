<template>
    <chart class="echarts-line" :initOptions="initOptions" :options="options"></chart>
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts.vue'

  export default {
    name:"chart01",
    data (){
      return{
        initOptions:{
            renderer:"svg"
        }
      }
    },
    props:['values','color'],
    computed:{
        theme:function(){
            return this.$store.state.theme
        },
        options:function(){
            var data=this.values;
            var chooseTheme=themeConfig[this.theme];

            console.log(data);
            console.log(chooseTheme);

            function newArrFn(data, key) {
                var arr = [];
                var len = data.length;
                for (var i = 0; i < len; i++) {
                    arr.push(data[i][key])
                }
                return arr;
            }
            var xAxisData = newArrFn(data.axis01, "name");
            var serverData1 = newArrFn(data.axis01, "val");
            var serverData2 = formatterVal(data.axis02, xAxisData);
            function formatterVal(data01, data02) {
                var name = data01[0].name;
                var indexAaxis = 0;
                var arr = [];
                for (var i = 0; i < data02.length; i++) {
                    if (name == data02[i]) {
                        indexAaxis = i;
                    }
                };

                for (var i = 0; i < data01.length; i++) {
                    arr.push([indexAaxis + i, data01[i].val])
                }
                return arr;
            }
            var option = {
                title: {
                    show: false,
                    text: ''
                },
                tooltip: {
                    trigger: 'axis',
                },
                color: ['#359bef', '#ff6e54'],
                legend: {
                    textStyle: {
                        color: chooseTheme.chart.textColor,
                        fontSize: 14
                    },
                    itemHeight: 14,
                    itemWidth: 14,
                    left: '20%',
                    top: "top",
                    data: [{
                        name: '实际值',
                        icon: 'rect',
                    }, {
                        name: '预测值',
                        icon: 'rect',
                    }]

                },
                grid: {
                    top: 40,
                    left: '0%',
                    right: '2%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    axisTick: false,
                    splitLine: false,
                    axisLine: {
                        lineStyle: {
                            color: "#7a7a7a"
                        }
                    },
                    axisLabel: {
                        color: chooseTheme.chart.axisLabelColor
                    },
                    data: xAxisData
                }],
                yAxis: [{
                    type: 'value',
                    axisTick: false,
                    splitLine: false,
                    axisLine: {
                        lineStyle: {
                            color: "#7a7a7a"
                        }
                    },
                    axisLabel: {
                        color: chooseTheme.chart.axisLabelColor
                    },
                }],
                series: [{
                    name: '实际值',
                    symbol: 'emptyCircle',
                    itemStyle: {
                        // normal: {
                        //     color: "#000",
                        //     borderColor: '#f58f23',
                        //     borderWidth: 1,
                        // }
                    },
                    type: 'line',
                    lineStyle: {
                        color: '#3799f0' //改变折线颜色
                    },
                    data: serverData1
                }, {
                    name: '预测值',
                    symbol: 'emptyCircle',
                    itemStyle: {
                        // normal: {
                        //     color: "#000",
                        //     borderColor: '#f58f23',
                        //     borderWidth: 1,
                        // }
                    },
                    type: 'line',
                    lineStyle: {
                        color: '#ff7737' //改变折线颜色
                    },
                    data: serverData2
                }]
            };
            return option
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
