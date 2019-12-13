<template>
    <div class="wrapbody" v-loading="loading" element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.3)">
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
                                    <swiper v-if="swiperInit" :options="swiperOptionEchart" class="swiper-echarts" :ref="'swiperEchart0'+(index+1)">
                                        <swiper-slide >
                                            <!-- <swiper-chart :values="echartsOption"></swiper-chart> -->
                                            <div @click="toggleShowecharts(item)">
                                                <swiper-chart :values="item | filterEcharts" ref="charts" ></swiper-chart>
                                            </div>
                                            
                                        </swiper-slide>
                                        <div class="swiper-pagination" slot="pagination"></div>
                                    </swiper>
                                </div>

                                <!-- <div class="swiper-rect"></div> -->
                                <div class="swiper-ul">
                                    <ul>
                                        <li>{{item.column_name}}</li>
                                        <li class="p" @click="toggleShow(item,index)">{{item.type}} <i class="icon" v-show="item.trans =='can'"></i>
                                            <!-- <select name="" id="" v-model="item.type">
                                                <option :value="name.type" v-for="name in optionlist" >{{name.text}}</option>
                                            </select> -->
                                            <ul class="s" v-show="item.isShowtype && item.trans =='can'">
                                                <li v-for="name in item.optionlist" @click="updateColumns(item,name)">{{name.text}}</li>
                                                <!-- <li>连续型</li> -->
                                            </ul>
                                        </li>
                                        <li>{{item.count}}</li>
                                        <li>{{item.miss_column}}</li>
                                        <li>{{item.mean}}</li>
                                        <li>
                                            <span v-show="item.type == '数值'">{{item.min}}</span>
                                            <span v-show="item.type != '数值'">-</span>
                                        </li>
                                        <li>
                                            <span v-show="item.type == '数值'">{{item.max}}</span>
                                            <span v-show="item.type != '数值'">-</span>
                                        </li>
                                        <li>{{item.std}}</li>
                                        <li>{{item.unique}}</li>
                                    </ul>
                                </div>
                            </div>
                        </swiper-slide>
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
                                    <th v-for="item in specificListname">{{item}}</th>
                                    <!-- <th>性别</th>
                                    <th>年龄</th>
                                    <th>收缩压</th>
                                    <th>血糖值</th>
                                    <th>吸烟年限</th>
                                    <th>酗酒年限</th>
                                    <th>是否患慢性病</th> -->
                                </tr>
                            </thead>
                            <tbody >
                                <tr class="evenTr" v-for="(item,index) in specificData" :key="index">
                                  <td v-for="name in item.data">{{name}}</td>
                                </tr>




                            </tbody>
                        </table>
                    </div>
                    <div class="ui-page-sort">
                        <div class="right-tool">
                            <!-- <span class="span-setting">
                                    每页条数
                                    <select class="select-text" v-model="pageSize">
                                        <option v-for="(item,index) in options" :key="index" :value="item.value"> {{item.value}}</option>
                                    </select>
                                </span> -->

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
        <!-- 饼图弹框 -->
        <div class="alert-box alert-box-echartsBt" id="alert-box-echarts" >
            <div class="title text-c">
                {{echartsName}}
                <span @click="closeDialog" class="close iconfont icon-cross-fill"></span>
            </div>
            <div class="content alert-box-content">
                <div class="echart-content">
                    <swiper-chart :values="swiperTcoption" ref="charts" ></swiper-chart>
                </div>
                
            </div>
        </div>

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
                    spaceBetween: 10, 
                    slidesPerGroup: 6,
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
                            // splitNumber: 5,
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
                        text:'离散型'//离散型
                    },
                    {
                        text:'连续型' //连续型
                    },
                    {
                        text:'时间型' //时间型
                    },
                ],
                searchKey:'',
                originalData:[],
                page:1,
                pageSize:20,
                maxPage:null,
                options:[
                    {value:5},
                    {value:10},
                    {value:20},
                ],
                specificData:[],
                specificListname:[],
                total:null,
                loading:false,
                echartsName:'',
                swiperTcoption:{}

            }
        },
        filters:{
            filterType(val){
                if(val == 'object') return '离散型'
                else return '连续型'
            },
            filterEcharts(val){
                if(val){
                    let yData =  Object.values(val.bcs)
                    let xData =  Object.keys(val.bcs)
                    var data =[]
                    xData.forEach((item,index)=>{
                        var obj ={}
                        yData.forEach((value,yindex)=>{
                            if(index == yindex){
                                obj.value=value
                                obj.name = item
                                data.push(obj)
                            }
                        })
                    })
                    let echartsOption
                    if(val.type!='离散型'){
                        echartsOption=  {
                            color: ['#3398DB'],
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                },

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
                                    data : xData,
                                    axisTick: {
                                        // alignWithLabel: true
                                    },
                                    axisLabel: {
                                        show:false,
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
                                    // show: false,
                                    lineStyle: {
                                        color: "#708ec1"
                                    }
                                },
                                splitLine: {
                                    show: false
                                }
                            }],
                            series : [
                                {
                                    // name:"name",
                                    type:'bar',
                                    barWidth: '20',
                                    data:yData
                                }
                            ]
                        }
                    } else {
                        echartsOption = {
                            color: ["#287ae9", "#0f8b91", "#876acc"],
                            // width:'70%',
                            // height:'70%',
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} <br/>({d}%)"
                            },
                            grid: {
                                left: '10%',
                                top: '5%',
                                right: '10%',
                                bottom: '5%',
                            },
                            series: [
                                {
                                    name: val.column_name,
                                    type: 'pie',
                                    data: data,
                                    label:{
                                        show:false,
                                        formatter:function(e){
                                    　　　　 var newStr=" ";
                                            var start,end;
                                    　　　　var name_len=e.name.length;    　　　　　　　　　　　　   //每个内容名称的长度
                                    　　　　var max_name=4;    　　　　　　　　　　　　　　　　　　//每行最多显示的字数
                                    　　　　var new_row = Math.ceil(name_len / max_name); 　　　　// 最多能显示几行，向上取整比如2.1就是3行
                                    　　　　if(name_len>max_name){ 　　　　　　　　　　　　　　  //如果长度大于每行最多显示的字数
                                    　　　　　　for(var i=0;i<new_row;i++){ 　　　　　　　　　　　   //循环次数就是行数
                                    　　　　　　　　var old='';    　　　　　　　　　　　　　　　　    //每次截取的字符
                                    　　　　　　　　start=i*max_name;    　　　　　　　　　　     //截取的起点
                                    　　　　　　　　 end=start+max_name;    　　　　　　　　　  //截取的终点
                                    　　　　　　　　if(i==new_row-1){    　　　　　　　　　　　　   //最后一行就不换行了
                                        　　　　　　　　　　old=e.name.substring(start);
                                    　　　　　　　　}else{
                                        　　　　　　　　　　old=e.name.substring(start,end)+"\n";    
                                    　　　　　　　　 }
                                    　　　　　　　　　　 newStr+=old; //拼接字符串
                                    　　　　　　  }
                                    　　　   }else{                                          //如果小于每行最多显示的字数就返回原来的字符串
                                    　　　　　　newStr=e.name; 
                                    　　　  }
                                    　　　 return newStr;
                                    　　}  

                                    },
                                    fontSize:10,
                                }
                            ]
                        }
                    }

                    return echartsOption
                }
            },
            
        },

        computed: {

        },
        components:{inputTimePick,swiperChart},
        mounted(){
            this.getData()
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
                        return value.column_name.includes(this.searchKey); //如果包含字符返回true
                    });
                }
            },
            closeDialog(){
                layer.closeAll();
            },
            toggleShow(item,index){
                if(item.optionlist[0]) {
                    this.$set(
                        this.dataList,index,{
                            column_name: item.column_name,
                            count: item.count,
                            max:item.max,
                            mean: item.mean,
                            min: item.min,
                            miss_column: item.miss_column,
                            std: item.std,
                            type: item.type,
                            unique: item.unique,
                            bcs:item.bcs,
                            trans:item.trans,
                            optionlist:item.optionlist,
                            isShowtype: !item.isShowtype
                        }
                    )
                }else{


                    console.log(item)
                }

            },
            toLook(){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['1000px', '700px'], //宽高
                    content: $('#alert-box-lookData'),
                });
                this.getSpecificData()
            },
            getData(){

                const that = this
                that.loading = true
                let paramData={
                    taId:that.taId
                }
                let url=`${ReqUrl.taskDetail}`
                axios({
                    url: url,
                    method: 'get',
                    params: paramData
                })
                .then(res=>{
                    const dataArry= res.data
                    that.dataList = res.data
                    if(res.data !='无'){
                        that.dataList.map((item,index)=>{
                            item.isShowtype = false
                            item.optionlist =[]
                            if(item.type== '时间型' || item.trans !='can'){
                                item.optionlist=[
                                    {
                                        text:'离散型'//离散型
                                    }
                                ]
                            } else if(item.trans == 'can'){
                                item.optionlist=[
                                    {
                                        text:'离散型'//离散型
                                    },
                                    {
                                        text:'连续型' //连续型
                                    }
                                ]
                            }
                        })
                    }
                    
                    that.loading = false
                    that.originalData = that.dataList
                    console.log(that.dataList)

                    let len=that.dataList.length;
                    that.$nextTick(function(){
                        //console.log(this.$refs.c)
                        for(let i=0;i<len;i++){
                            if(that.swiperInit){
                                that.$refs['swiperEchart0'+(i+1)][0].swiper.update();
                            }
                        }
                    });

                })
            },
            nextPage(){
                if(this.page == this.maxPage){
                    this.$message('当前是最后一页');
                } else {
                    this.page++
                    this.getSpecificData()
                }
            },
            goPage(){
                // 页面go判断
                if(this.page >this.maxPage){
                    this.$message('当前数据一共'+this.maxPage +'页');
                    return
                } else {
                    this.getSpecificData()
                }
            },
            closeDialog(){
                layer.closeAll();
            },
            updateColumns(item,name){
                // 更新各列数据类型
                const that = this
                let obj = {}
                obj[item.column_name] = name.text
                let paramData={
                    columnMap: obj,
                    taId: that.taId
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
                    taId:that.taId,
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
                    that.specificData =[]
                    const dataArry= res.data
                    that.specificListname = dataArry.columns
                    dataArry.data.forEach(item=>{
                        var obj ={}
                        obj.data = item
                        that.specificData.push(obj)
                    })
                    // that.specificData.map((item,index)=>{
                    //     item.data = dataArry.data[index]
                    // })
                    that.total=res.data.count
                    that.maxPage =Math.ceil(that.total/that.pageSize)


                })
            },
            toggleShowecharts(item){
                
                if(item.type == '离散型'  ){
                    var itemData
                    if(item.fan !=''){
                        itemData = item.fan
                    } else {
                        itemData = item.bcs
                    }
                    let yData =  Object.values(itemData)
                    let xData =  Object.keys(itemData)
                    var data =[]
                    var center= ['50%', '50%'],radius= [0, '60%'],fontSize

                    xData.forEach((item,index)=>{
                        var obj ={}
                        yData.forEach((value,yindex)=>{
                            if(index == yindex){
                                obj.value=value
                                obj.name = item
                                data.push(obj)
                            }
                        })
                    })
                    if(data.length>14){
                        center = ['60%','65%']
                        radius = [0,'70%']
                        fontSize = 12
                    } else {
                        center = ['50%','50%']
                        radius = [0,'70%']
                        fontSize = 15
                    }
                    this.echartsName = item.column_name
                    layer.open({
                        type: 1,
                        title: false,
                        anim: 2,
                        closeBtn: 0,
                        area: ['800px', '600px'], //宽高
                        content: $('#alert-box-echarts'),
                    });
                    this.swiperTcoption = {
                        color: ["#287ae9", "#0f8b91", "#876acc","#72EEA8","#A47AE5","#8063C8","#C28DFE","#21F8FF","#3799F0","#50DBAB",
                        "#08A1AA","#2BCBF8","#BC89F9","#00D0E9","#5BE698","#CCF64D","#29BAFD","#168CFC","#3281F5","#505BA1"],
                       
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : <br/>{c} ({d}%)",
                             
                        },
                        grid: [{
                            left: '5%',
                            right: '4%',
                            top: '20%',
                            bottom:'0'
                        }],
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: xData,
                            textStyle:{
                                color:'#fff'
                            },
                            type: 'scroll',
                            pageButtonPosition:'end',
                            pageIconColor:'#fff',
                            pageTextStyle:{
                                color:'#fff'
                            }
                        },
                        series: [
                            {
                                name: item.column_name,
                                type: 'pie',
                                data: data,
                                label:{
                                    fontSize:fontSize,
                                    formatter:function(e){
                                    　　　　 var newStr=" ";
                                            var start,end;
                                    　　　　var name_len=e.name.length;    　　　　　　　　　　　　   //每个内容名称的长度
                                    　　　　var max_name=10;    　　　　　　　　　　　　　　　　　　//每行最多显示的字数
                                    　　　　var new_row = Math.ceil(name_len / max_name); 　　　　// 最多能显示几行，向上取整比如2.1就是3行
                                    　　　　if(name_len>max_name){ 　　　　　　　　　　　　　　  //如果长度大于每行最多显示的字数
                                    　　　　　　for(var i=0;i<new_row;i++){ 　　　　　　　　　　　   //循环次数就是行数
                                    　　　　　　　　var old='';    　　　　　　　　　　　　　　　　    //每次截取的字符
                                    　　　　　　　　start=i*max_name;    　　　　　　　　　　     //截取的起点
                                    　　　　　　　　 end=start+max_name;    　　　　　　　　　  //截取的终点
                                    　　　　　　　　if(i==new_row-1){    　　　　　　　　　　　　   //最后一行就不换行了
                                        　　　　　　　　　　old=e.name.substring(start);
                                    　　　　　　　　}else{
                                        　　　　　　　　　　old=e.name.substring(start,end)+"\n";    
                                    　　　　　　　　 }
                                    　　　　　　　　　　 newStr+=old; //拼接字符串
                                    　　　　　　  }
                                    　　　   }else{                                          //如果小于每行最多显示的字数就返回原来的字符串
                                    　　　　　　newStr=e.name; 
                                    　　　  }
                                    　　　 return newStr;
                                    　　}  
                                },
                                center: center,
                                radius: radius,
                                
                            }
                        ]
                    }
                }
                return this.swiperTcoption
            },
        },
        created(){
            this.taId = this.$route.query.taId


        }
    }
</script>
<style>

</style>
