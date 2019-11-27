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

                        <swiper-slide  class="swiper-no-swiping">

                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <div class="echarts">
                                        <!-- <predictedChart></predictedChart> -->
                                    </div>
                                    <div class="pageNumber">
                                        <span></span>
                                        <span class="on"></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄2/li>
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

                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <div class="echarts">
                                        <!-- <predictedChart></predictedChart> -->
                                    </div>
                                    <div class="pageNumber">
                                        <span></span>
                                        <span class="on"></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄3</li>
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

                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <div class="echarts">
                                        <!-- <predictedChart></predictedChart> -->
                                    </div>
                                    <div class="pageNumber">
                                        <span></span>
                                        <span class="on"></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄4</li>
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

                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <div class="echarts">
                                        <!-- <predictedChart></predictedChart> -->
                                    </div>
                                    <div class="pageNumber">
                                        <span></span>
                                        <span class="on"></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄5</li>
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

                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <div class="echarts">
                                        <!-- <predictedChart></predictedChart> -->
                                    </div>
                                    <div class="pageNumber">
                                        <span></span>
                                        <span class="on"></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄6</li>
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

                        <swiper-slide  class="swiper-no-swiping">
                            <div class="swiperItem">
                                <div class="swiper-top">
                                    <div class="echarts">
                                        <!-- <predictedChart></predictedChart> -->
                                    </div>
                                    <div class="pageNumber">
                                        <span></span>
                                        <span class="on"></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div class="swiper-rect"></div>
                                <div class="swiper-ul">
                                    <ul>
                                        <li>年龄6</li>
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
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
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
                    spaceBetween: 16,
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
