<template>
    <div class="wrapbody">
        <section id="main">

            <div class="breadpage">
                <span class="light_bread"><a href="">可视化</a></span>
                <span class="dark_bread"> > </span>
                <span class="dark_bread"><a href="">medicine1</a></span>
            </div>

            <div class="echart-box clearfix">
                <div class="echart-item fl">
                    <span class="title"><i></i>直方图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" :values="echartsBarOption"></swiper-chart>
                    </div>
                </div>
                <div class="echart-item fl">
                    <span class="title"><i></i>箱型图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" :values="echartsBoxplotOption"></swiper-chart>
                    </div>
                </div>
                <div class="echart-item fl">
                    <span class="title"><i></i>热力图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" ></swiper-chart>
                    </div>
                </div>
                


                <div class="echart-item fl">
                    <span class="title"><i></i>雷达图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" :values="echartsRadarOption"></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>关系图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" ></swiper-chart>
                    </div>
                </div>

                
                <div class="echart-item fl">
                    <span class="title"><i></i>平行坐标图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" ></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>散点图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" ></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>漏斗图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart echartsFunnel" :values="echartsFunnelOption"></swiper-chart>
                    </div>
                </div>

                <div class="echart-item fl">
                    <span class="title"><i></i>分布地图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" ></swiper-chart>
                    </div>
                </div>
                
                <div class="echart-item fl">
                    <span class="title"><i></i>折线图</span>
                    <div class="echart-content" @click="dialogSetOption()">
                        <swiper-chart class="echart" :values="echartsLinelOption"></swiper-chart>
                    </div>
                </div>
            </div>



        </section>



    <!-- 直方图参数设置弹框  -->
        <div class="alert-box" id="alert-box-setOption">
            <div class="title text-c">
                直方图参数设置
                <span @click="closeDialog" class="close iconfont icon-cross-fill"></span>
            </div>
            <div class="content alert-box-content">
                <p>x轴（可多选）</p>
                <input type="text">
                <p>Y轴</p>
                <input type="text">

                <div class="btn-wrap">
                    <button @click="closeDialog" class="btn btnksh">进行可视化</button>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import swiperChart from '../components/swiperChart'
    export default  {
        data(){
            return {
                echartsBarOption:{
                        color: ['#3398DB'],
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            },
                            left:'20',
                            top:"10",
                            icon:"circle",
                            
                        },
                        grid: {
                            left: '0%',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['1', '2', '3', '4', '5', '6', '7'],
                                show:false,
                            }
                        ],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            splitArea : {show : false},//去除网格区域
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            }
                        }],
                        series : [
                            {
                                type:'bar',
                                barWidth: '50%',
                                data:[100, 52, 200, 334, 390, 330, 220]
                            }
                        ]
                },
                echartsBoxplotOption:{
                        color: ['#3398DB'],
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            },
                            left:'20',
                            top:"10",
                            icon:"circle",
                            
                        },
                        grid: {
                            left: '0%',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['1', '2', '3', '4', '5', '6', '7'],
                                show:false,
                            }
                        ],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            splitArea : {show : false},//去除网格区域
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            }
                        }],
                        series : [
                            {
                                type:'boxplot',
                                itemStyle:{
                                    borderColor:"#353F7D",
                                    color:"#72EEA8"
                                },
                                data:[
                                    [5, 15, 94, 94, 115],
                                    [1, 10, 64, 64, 95],
                                    [10, 20, 54, 54, 75],
                                    [3, 10, 74, 74, 95],
                                    [6, 15, 88, 88, 105],
                                    [1, 10, 64, 64, 95],
                                    [10, 20, 54, 54, 75]
                                ]
                            }
                        ]
                },
                echartsRadarOption:{
                        color: ['#29BAFD','#7BF7A0'],
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            },
                            left:'20',
                            top:"10",
                            icon:"circle",
                            data:['雷达图']
                        },
                        grid: {
                            left: '0%',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['0201', '0308', '0323', '0330', '0408', '0418', '0528'],
                                show:false,
                            }
                        ],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            splitArea : {show : false},//去除网格区域
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            }
                        }],
                        radar: {
                            indicator: [
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000},
                            { name: '', max: 52000}
                            ]
                        },
                        series: [{
                            type: 'radar',
                            areaStyle: {},
                            data : [
                                {
                                    value : [32000, 10000, 28000, 35000, 50000, 10000, 28000, 35000, 50000, 19000],
                                },
                                {
                                    value : [5000, 14000, 28000, 31000, 42000, 14000, 28000, 31000, 42000, 21000],
                                }
                            ]
                        }]
                },
                echartsFunnelOption:{
                        color: ['#365cb3','#4f8df2','#69a3f3','#84b6f2','#49689a'],
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            },
                            left:'20',
                            top:"10",
                            icon:"circle",
                            
                        },
                        grid: {
                            left: '0%',
                            right: '5%',
                            bottom: '0%',
                            top:'15%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['1', '2', '3', '4', '5', '6', '7'],
                                show:false,
                            }
                        ],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            splitArea : {show : false},//去除网格区域
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    type:"dotted",
                                    color:"#353F7D"
                                }
                            }
                        }],

                        series: [
                            {
                                type:'funnel',
                                left: '0%',
                                top: 60,
                                bottom: 60,
                                width: '100%',
                                min: 0,
                                max: 100,
                                minSize: '0%',
                                maxSize: '100%',
                                sort: 'descending',
                                gap: 2,
                                label: {
                                    show: true,
                                    position: 'inside'
                                },
                                labelLine: {
                                    length: 10,
                                    lineStyle: {
                                        width: 1,
                                        type: 'solid'
                                    }
                                },
                                itemStyle: {
                                    borderColor: '#fff',
                                    borderWidth: 1
                                },
                                data: [
                                    {value: 60},
                                    {value: 40},
                                    {value: 20},
                                    {value: 80},
                                    {value: 100}
                                ]
                            }
                        ]
                },
                echartsLinelOption:{
                    color: ['#3398DB','#00FF90'],
                    legend:{
                        textStyle:{
                            color:"#FFF"
                        },
                        left:'20',
                        top:"10",
                        icon:"circle",
                        
                    },
                    grid: {
                        left: '0%',
                        right: '5%',
                        bottom: '0%',
                        top:'15%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['1', '2', '3', '4', '5', '6', '7'],
                            show:false,
                        }
                    ],
                    yAxis: [{
                        type: 'value',
                        splitNumber: 5,
                        splitArea : {show : false},//去除网格区域
                        splitLine: {
                            show: true,
                            lineStyle:{
                                type:"dotted",
                                color:"#353F7D"
                            }
                        }
                    }],
                    series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                    },{
                        data: [520, 232, 401, 634, 990, 330, 1020],
                        type: 'line',
                    }]
                }


            }
        },
        components:{swiperChart},
        mounted(){
          
            
        },

        methods:{
            dialogSetOption(id){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['510px', 1000], //宽高
                    content: $('#alert-box-setOption'),
                });
            },
            closeDialog(){
                layer.closeAll();
            },
        }
    }
</script>
<style scoped>
    .echart-item{
        width: 33.33%;
        margin-bottom: 21px;
        position: relative;
    }
    .echart-item .title{
        position: absolute;
        top: 10px;
        left: 20px;
        color: #fff;
        font-size: 14px;
    }
    .echart-item .title i{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #6CEC4D;
        float: left;
        margin-right: 5px;
        margin-top: 4px;
    }
    .echart-item .echart-content{
        height: 245px;
        background-color: #1E214E;
        margin-right: 21px;
        border:1px solid rgba(80,91,161,1);
        border-radius:2px;
    }
    .echart-item .echart-content .echart{
        height: 100%;
    }
    .echart-item .echart-content .echartsFunnel{
        width: 50%;
        margin: 0 auto;
    }
</style>