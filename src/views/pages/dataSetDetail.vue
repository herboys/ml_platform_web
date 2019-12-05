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
                    <span class="s1 fl">字段名称：</span>
                    <input type="text" v-model="searchKey" class="fl input input1" style="width:410px;" placeholder="请输入搜索字段名称"/>
                    <a class="search-btn" @click="toSearch">查询<i class="icon"></i></a>
                    <span class="fr t t2" @click="toLook">查看具体数据</span>
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
                        <swiper-slide  class="swiper-no-swiping" v-for="(item,index) in dataList" :key="index">
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
                                        <li class="p" @click="toggleShow(item)">{{item.type}} <i class="icon"></i>
                                            <!-- <select name="" id="" v-model="item.type">
                                                <option :value="name.type" v-for="name in optionlist" >{{name.text}}</option>
                                            </select> -->
                                            <ul class="s" v-show="item.isShowtype">
                                                <li v-for="name in optionlist" @click="updateColumns(item,name)">{{name.text}}</li>
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
            <div class="alert-box" id="alert-box-lookData">
                <div class="title text-c">
                    <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
                </div>
                <div class="content alert-box-content">
                    <div class="table">
                        <table class="keshihua-table shujuji-table" id="tableContent">
                            <thead>
                                <tr>
                                    <th>姓名</th>
                                    <th>性别</th>
                                    <th>年龄</th>
                                    <th>收缩压</th>
                                    <th>血糖值</th>
                                    <th>吸烟年限</th>
                                    <th>酗酒年限</th>
                                    <th>是否患慢性病</th>
                                </tr>
                            </thead>
                            <tbody v-for="(item,index) in 10" :key="index">
                                <tr class="evenTr"  >
                                    <!-- <td><span class="pull-icon down" :class="item.isShow?'up':'down'"></span></td> -->
                                    <td  ><span class="dblclick">徐</span> </td>
                                    <td>男</td>
                                    <td class="notStart">12</td>
                                    <td>-</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>否</td>
                                </tr>
                        

                                
                                <tr class="sonTr" v-show="item.isShow">
                                    <td></td>
                                    <td>medcine</td>
                                    <td>42kb</td>
                                    <td class="pause">暂停中</td>
                                    <td>决策树</td>
                                    <td class="handle">

                                        <a class="assessmenticon">评估</a>
                                        <a class="trainicon">训练</a>
                                        <a class="engineeringicon">特征工程</a>
                                        <a class="explainicon">解释</a>
                                        <a class="moreicon" style="visibility: hidden;">占位</a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="ui-page-sort">
                        <div class="right-tool">
                            <span class="span-setting">
                                    每页条数
                                    <select class="select-text" v-model="pageSize">
                                        <option v-for="(item,index) in options" :key="index" :value="item.value"> {{item.value}}</option>
                                    </select>
                                </span>

                            <span class="span-number">
                                        转到
                                    <input class="input-text" type="text" v-model="page" />
                                    <a class="go-btn" href="javascript:void(0);" @click="goPage()">GO</a>
                                </span>

                            <span class="span-tool">
                                    <a class="page-a" href="javascript:void(0);" @click="page = 1,getSpecificData()">首页</a>
                                    <a class="page-a" href="javascript:void(0);" @click="nextPage">下一页</a>
                                    <a class="page-a" href="javascript:void(0);" @click="page = maxPage,getSpecificData()">末页</a>
                                </span>
                        </div>
                    </div>
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
                        text:'字符串'
                    },
                    {
                        text:'数值'
                    },
                    {
                        text:'时间'
                    },
                ],
                searchKey:'',
                originalData:[],
                page:1,
                pageSize:5,
                maxPage:null,
                options:[
                    {value:5},
                    {value:10},
                    {value:20},
                ],
                specificData:[]
 

            }
        },
        filters:{
            filterType(val){
                if(val == 'object') return '离散型'
                else return '连续型'
            }
        },
        
        computed: {

        },
        components:{inputTimePick,swiperChart},
        mounted(){

        },
        watch:{
            searchKey(val){
                if(val){
                    // this.dataList= this.dataList.filter((value)=>{  //过滤数组元素
                    //     return value.fildeName.includes(val); //如果包含字符返回true
                    // });
                } else {
                    this.dataList = this.originalData
                }
            }
        },
        methods:{
            toSearch(){
                if(!this.searchKey){
                    this.$message('搜索列名称不能为空')
                } else {
                    this.dataList= this.dataList.filter((value)=>{  //过滤数组元素
                        return value.fildeName.includes(this.searchKey); //如果包含字符返回true
                    });
                }
            },
            toggleShow(item){
                item.isShowtype = !item.isShowtype
                console.log(item)
                // this.updateColumns(item)
            },
            toLook(){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['1000px', '650px'], //宽高
                    content: $('#alert-box-lookData'),
                });
                this.getSpecificData()
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
                    that.originalData = that.dataList
                    console.log(that.dataList)
                    
                    
                })
            },
            nextPage(){
                if(this.page == this.maxPage){
                    this.$message('当前是最后一页');
                } else {
                    this.page++
                    this.getDatasource()
                }
            },
            goPage(){
                // 页面go判断
                if(this.page >this.maxPage){
                    this.$message('当前数据一共'+this.maxPage +'页');
                    return
                } else {
                    this.getDatasource()
                }
            },
            closeDialog(){
                layer.closeAll();
            },
            updateColumns(item,name){
                // 更新各列数据类型
                const that = this
                let obj = {}
                obj[item.fildeName] = name.text
                let paramData={
                    columnMap: obj,
                    taId: 24
                }
                let url=`${ReqUrl.updateColumns}`
                if(item.type != name.type){
                    item.type = name.type
                    axios({
                        url: url,
                        method: 'post',
                        data: paramData
                    })
                    .then(res=>{
                    
                        console.log(res)
                        this.getData()
                    })
                }
                
                
            },
            getSpecificData(){
                const that = this
                let paramData={
                    taId:24,
                    page:this.page,
                    size:this.pageSize
                }
                let url=`${ReqUrl.getSpecificData}`
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
                            that.specificData.push(obj)
                        })
                    }
                    that.specificData.map((item,index)=>{
                        if(dataArry && dataArry.index[0]){
                            dataArry.index.forEach((key,keyindex)=>{
                                item[key] = dataArry.data[keyindex][index]
                            })
                        }
                        
                    })
                    console.log(that.specificData)
                    
                    
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
