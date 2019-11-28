<template>
    <div class="wrapbody">




        <section id="main">


            <div class="breadpage">
                <span class="light_bread"><a href="">数据集</a></span>
                <span class="dark_bread"> > </span>
                <span class="dark_bread"><a href="">数据集详情</a></span>
            </div>

            <div class="keshihua-main shujuji-main swiper-wrap">

                <div class="search-wrap clearfix">
                    <span class="fl t"><i></i>共64条数据</span>
                    <span class="s1 fl">数据集名称：</span>
                    <input type="text" class="fl input input1" placeholder="请输入数据集名称"/>
                    <a class="search-btn">查询<i class="icon"></i></a>
                    <span class="fr t">查看具体数据</span>
                </div>

                <div class="swiperList">

                    <swiper :options="swiperOption" class="swiper-wrap-new" ref="SwiperWrap">
                        <!-- slides -->
                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <swiper v-if="swiperInit" :options="swiperOptionEchart" class="swiper-echarts" ref="swiperEchart01">
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <div class="swiper-pagination" slot="pagination"></div>
                                    </swiper>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄1</li>
                                        <li class="p">连续型 <i class="icon"></i>
                                            <ul class="s">
                                                <li>离散型</li>
                                                <li>连续型</li>
                                            </ul>
                                        </li>
                                        <li>332332</li>
                                        <li>0</li>
                                        <li>45</li>
                                        <li>9</li>
                                        <li>97</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>

                        <!-- slides -->
                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <swiper v-if="swiperInit" :options="swiperOptionEchart" class="swiper-echarts" ref="swiperEchart02">
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <div class="swiper-pagination" slot="pagination"></div>
                                    </swiper>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄1</li>
                                        <li class="p">连续型 <i class="icon"></i>
                                            <ul class="s">
                                                <li>离散型</li>
                                                <li>连续型</li>
                                            </ul>
                                        </li>
                                        <li>332332</li>
                                        <li>0</li>
                                        <li>45</li>
                                        <li>9</li>
                                        <li>97</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>

                        <!-- slides -->
                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <swiper v-if="swiperInit" :options="swiperOptionEchart" class="swiper-echarts" ref="swiperEchart03">
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <div class="swiper-pagination" slot="pagination"></div>
                                    </swiper>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄1</li>
                                        <li class="p">连续型 <i class="icon"></i>
                                            <ul class="s">
                                                <li>离散型</li>
                                                <li>连续型</li>
                                            </ul>
                                        </li>
                                        <li>332332</li>
                                        <li>0</li>
                                        <li>45</li>
                                        <li>9</li>
                                        <li>97</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>
                        <!-- slides -->
                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <swiper v-if="swiperInit" :options="swiperOptionEchart" class="swiper-echarts" ref="swiperEchart04">
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <div class="swiper-pagination" slot="pagination"></div>
                                    </swiper>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄1</li>
                                        <li class="p">连续型 <i class="icon"></i>
                                            <ul class="s">
                                                <li>离散型</li>
                                                <li>连续型</li>
                                            </ul>
                                        </li>
                                        <li>332332</li>
                                        <li>0</li>
                                        <li>45</li>
                                        <li>9</li>
                                        <li>97</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>

                        <!-- slides -->
                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <swiper v-if="swiperInit" :options="swiperOptionEchart" class="swiper-echarts" ref="swiperEchart05">
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOptionTreemap"></swiper-chart>
                                        </swiper-slide>
                                        <div class="swiper-pagination" slot="pagination"></div>
                                    </swiper>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄1</li>
                                        <li class="p">连续型 <i class="icon"></i>
                                            <ul class="s">
                                                <li>离散型</li>
                                                <li>连续型</li>
                                            </ul>
                                        </li>
                                        <li>332332</li>
                                        <li>0</li>
                                        <li>45</li>
                                        <li>9</li>
                                        <li>97</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>


                        <!-- slides -->
                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <swiper v-if="swiperInit" :options="swiperOptionEchart" class="swiper-echarts" ref="swiperEchart06">
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <div class="swiper-pagination" slot="pagination"></div>
                                    </swiper>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄1</li>
                                        <li class="p">连续型 <i class="icon"></i>
                                            <ul class="s">
                                                <li>离散型</li>
                                                <li>连续型</li>
                                            </ul>
                                        </li>
                                        <li>332332</li>
                                        <li>0</li>
                                        <li>45</li>
                                        <li>9</li>
                                        <li>97</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>

                        <!-- slides -->
                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <swiper v-if="swiperInit" :options="swiperOptionEchart" class="swiper-echarts" ref="swiperEchart07">
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <swiper-slide>
                                            <swiper-chart :values="echartsOption"></swiper-chart>
                                        </swiper-slide>
                                        <div class="swiper-pagination" slot="pagination"></div>
                                    </swiper>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄1</li>
                                        <li class="p">连续型 <i class="icon"></i>
                                            <ul class="s">
                                                <li>离散型</li>
                                                <li>连续型</li>
                                            </ul>
                                        </li>
                                        <li>332332</li>
                                        <li>0</li>
                                        <li>45</li>
                                        <li>9</li>
                                        <li>97</li>
                                        <li>2</li>
                                        <li>12</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>
                        
                        
                    </swiper>

                    <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                </div>

            </div>
        </section>

    </div>
</template>

<script>
    import swiperChart from '../components/swiperChart'
    import inputTimePick from '../components/inputTimePick'
    export default  {
        data(){
            return {
                swiperInit:false,
                swiperOption: {
                    slidesPerView: 6,
                    spaceBetween: 14,
                    on: {
                        init: ()=>{
                            this.swiperInit=true;
                            //this.$refs.swiperEchart01.swiper.init();
                        }
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                swiperOptionEchart: {
                   // init: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable:true
                    }
                },
                echartsOption:{
                        color: ['#3398DB'],
                        tooltip : {
                            trigger: 'axis',
                            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        legend:{
                            name:"name",
                            textStyle:{
                                color:"#FFF"
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '8%',
                            bottom: '6%',
                            top:'12%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                data : ['0201', '0308', '0323', '0330', '0408', '0418', '0528'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLabel: {
                                    color: '#fff',
                                    fontSize:10
                                },
                                axisTick: {
                                    show: false,
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: "#708ec1"
                                    }
                                },
                            }
                        ],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            axisLabel: {
                                color: '#fff',
                                fontSize:10
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: false,
                            },
                            splitLine: {
                                show: false
                            }
                        }],
                        series : [
                            {
                                name:"name",
                                type:'bar',
                                barWidth: '50%',
                                data:[10, 52, 200, 334, 390, 330, 220]
                            }
                        ]
                },
                echartsOptionTreemap:{
                    color: ["#287ae9", "#0f8b91", "#876acc"],
                    width:'80%',
                    height:'80%',
                    tooltip: {},
                    series: [{
                        type: 'treemap',
                        roam: false, //是否开启拖拽漫游（移动和缩放）
                        nodeClick: false, //点击节点后的行为,false无反应
                        upperLabel: false,
                        breadcrumb: {
                            show: false
                        },
                        data: [{
                            name: 'male',            // First tree
                            value: 65
                        }, {
                            name: 'male',            // Second tree
                            value: 20
                        },{
                            name: 'male',            // Second tree
                            value: 15
                        }]
                    }]
                }

            }
        },
        computed: {
            // swiper() {
            //     return this.$refs.SwiperWrap.swiper
            // },

        },
        components:{inputTimePick,swiperChart},
        mounted(){

        },
        watch:{

        },
        methods:{
        },
        created(){

        }
    }
</script>
<style>

</style>
