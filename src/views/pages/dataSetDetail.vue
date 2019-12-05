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
                    <input type="text" class="fl input input1" style="width:410px;" placeholder="请输入数据集名称"/>
                    <a class="search-btn">查询<i class="icon"></i></a>
                    <span class="fr t t2" @click="toLink">查看具体数据</span>
                </div>

                <div class="swiperList">
                    <ul class="ul-zd">
                        <li>字段名</li>
                        <li>字段类型</li>
                        <li>行数</li>
                        <li>缺失行数</li>
                        <li>平均值</li>
                        <li>最小值</li>
                        <li>最大值</li>
                        <li>标准差</li>
                        <li>唯一值</li>
                    </ul>
                    <swiper :options="swiperOption" class="swiper-wrap-new" ref="SwiperWrap">
                        <!-- slides -->
                        <swiper-slide  class="swiper-no-swiping" v-for="(item,index) in dataList" :key="item.fildeName">
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
                                        <li>{{item.fildeName}}</li>
                                        <li class="p" @click="toggleShow(item)">{{item.type | filterType}} <i class="icon"></i>
                                            <!-- <select name="" id="" v-model="item.type">
                                                <option :value="name.type" v-for="name in optionlist" >{{name.text}}</option>
                                            </select> -->
                                            <ul class="s" v-show="item.isShowtype">
                                                <li v-for="name in optionlist" @click="item.type = name.type">{{name.text}}</li>
                                                <!-- <li>连续型</li> -->
                                            </ul>
                                        </li>
                                        <li>{{item.count}}</li>
                                        <li>{{item.miss_column}}</li>
                                        <li>r</li>
                                        <li>{{item.min}}</li>
                                        <li>{{item.max}}</li>
                                        <li>{{item.std}}</li>
                                        <li>{{item.unique}}</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>

                        <!-- slides -->
                        <!-- <swiper-slide  class="swiper-no-swiping">
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
                        </swiper-slide> -->

                        <!-- slides -->
                        <!-- <swiper-slide  class="swiper-no-swiping">
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
                        </swiper-slide> -->
                        <!-- slides -->
                        <!-- <swiper-slide  class="swiper-no-swiping">
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
                        </swiper-slide> -->

                        <!-- slides -->
                        <!-- <swiper-slide  class="swiper-no-swiping">
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
                        </swiper-slide> -->


                        <!-- slides -->
                        <!-- <swiper-slide  class="swiper-no-swiping">
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
                        </swiper-slide> -->

                        <!-- slides -->
                        <!-- <swiper-slide  class="swiper-no-swiping">
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
                        </swiper-slide> -->
                        
                        
                    </swiper>

                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </div>

            </div>
        </section>

    </div>
</template>

<script>
    import * as ReqUrl from '../../api/reqUrl'
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
                                //name:"name",
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
                },
                taId:null,
                dataList:[],
                optionlist:[
                    {
                        type:'object',
                        text:'字符串'
                    },
                    {
                        type:'int64',
                        text:'数值'
                    },
                    {
                        type:'float64',
                        text:'数值'
                    },
                ]

            }
        },
        filters:{
            filterType(val){
                if(val == 'object') return '离散型'
                else return '连续型'
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
            toggleShow(item){
                item.isShowtype = !item.isShowtype
                console.log(item)
                // this.updateColumns(item)
            },
            toLink(){
                this.$router.push({path:'/specialData',query:{taId:this.taId}})
            },
            getData(){
                const that = this
                let paramData={
                    taId:24
                }
                let url=`${ReqUrl.taskDetail}`
                axios({
                    url: url,
                    method: 'get',
                    params: paramData
                })
                .then(res=>{
                    const dataArry= res.data
                    console.log(dataArry)
                    if(dataArry && dataArry.columns[0]){
                        dataArry.columns.forEach((item,index)=>{
                            var obj = {}
                            obj.fildeName = item
                            obj.isShowtype = false
                            that.dataList.push(obj)
                        })
                    }
                    that.dataList.map((item,index)=>{
                        if(dataArry && dataArry.index[0]){
                            dataArry.index.forEach((key,keyindex)=>{
                                item[key] = dataArry.data[keyindex][index]
                            })
                        }
                        
                    })
                    console.log(that.dataList)
                    
                    
                    
                    console.log(that.dataList)
                    
                    
                })
            },
            updateColumns(){
                // 更新各列数据类型
                const that = this
                let paramData={
                    columnMap: {},
                    taId: 0
                }
                let url=`${ReqUrl.updateColumns}`
                axios({
                    url: url,
                    method: 'post',
                    params: paramData
                })
                .then(res=>{
                 
                    
                })
            }
        },
        created(){
            this.taId = this.$route.query.taId
            this.getData()

        }
    }
</script>
<style>

</style>
