<template>
    <div class="wrapbody">
        <section id="main">
            <div class="keshihua-main">

                <div class="search-wrap clearfix">
                    <span class="s1 fl">数据集名称：</span>
                    <input type="text" class="fl input input1" />
                    <span class="s1 fl">项目类型：</span>
                    <div class="select-con fl">
                        <i class="icon"></i>
                        <select class="select">
                            <option value="">高血压</option>
                        </select>
                    </div>
                    <span class="s1 fl">时间选择：</span>
                    <input-time-pick @done="changeStartTime" class-name-user="aaa"></input-time-pick>

                    <span class="fl line">-</span>

                    <input-time-pick @done="changeEndTime"></input-time-pick>

                    <a class="search-btn">查询<i class="icon"></i></a>
                </div>


                <div class="table">
                    <table class="keshihua-table" id="tableContent">
                        <thead>
                        <tr>
                            <th>
                                <input type="checkbox" id="toggleAll">
                                <span></span>
                            </th>
                            <th>项目名称</th>
                            <th>数据集名称</th>
                            <th>信息</th>
                            <th>预计运行时间</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look" @click="dialogEchart();">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>

        
                        
                        </tbody>
                    </table>

                    <div class="ui-page-sort">
                        <div class="right-tool">
                        <span class="span-setting">
                                每页条数
                                <select class="select-text">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>25</option>
                                </select>
                            </span>

                            <span class="span-number">
                                转到
                                <input class="input-text" type="text" />
                                <a class="go-btn" href="">GO</a>
                            </span>

                            <span class="span-tool">
                                <a class="page-a" href="javascript:void(0);">首页</a>
                                <a class="page-a" href="javascript:void(0);">下一页</a>
                                <a class="page-a" href="javascript:void(0);">末页</a>
                            </span>
                        </div>
                    </div>
                </div>



            </div>
        </section>

        <!-- 弹窗删除 -->
        <div class="alert-box" ref="alertBoxDel" id="alert-box-del" style="display: none;">
            <div class="title text-c">
                <span @click="closeDialog" class="close iconfont icon-cross-fill"></span>
            </div>
            <div class="content alert-box-content">
                <p class="content-title">确定要删除此可视化项目？</p>
                <div class="btn-wrap clearfix">
                    <button @click="closeDialog" class="btn cancelBtn fl">取消</button>
                    <button @click="closeDialog" class="btn okBtn fr">确认</button>
                </div>
            </div>
        </div>


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


<!-- echarts 弹框 -->
        <div class="alert-box" id="alert-box-echarts">
            <div class="slider">
                <div class="slide">
                    <div class="echarts-item">
                        <div class="title text-c">
                            高血压患病人数
                            <span @click="closeDialog" class="close iconfont icon-cross-fill"></span>
                        </div>
                        <div class="content alert-box-content">
                            <chart class="echarts" id="echarts1"></chart>
                            <p class="text-c">
                                <button class="btn btn-download" @click="downloadImgFn('echarts1')">下载图像</button>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="slide">
                    <div class="echarts-item">
                        <div class="title text-c">
                            高血压患病人数2
                            <span @click="closeDialog" class="close iconfont icon-cross-fill"></span>
                        </div>
                        <div class="content alert-box-content">
                            <chart class="echarts" id="echarts2" ref="echarts2"></chart>
                            <p class="text-c">
                                <button class="btn btn-download" @click="downloadImgFn('echarts2')">下载图像</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    </div>
</template>

<script>
    const echarts = require('echarts');
    import inputTimePick from '../components/inputTimePick'
    import EChartsComponents from 'vue-echarts/components/ECharts.vue'
    export default  {
        data(){
            return {
                startTime:"",
                endTime:"",
                initOptions:{
                    renderer:"svg"
                },
                data1:{
                    'x': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    'y':[3000, 6000, 8000, 4334, 6390, 2330, 4220, 8810, 1240, 5320, 1522, 5000]
                }

            }
        },
        components:{inputTimePick,chart:EChartsComponents},
        mounted(){
        //    this.dialogSetOption();//直方图参数设置弹框 
            
        },

        methods:{


            drawBar(id,xAxisData,yAxisData){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById(id))
                // 绘制图表
                myChart.setOption({
                    color: ['#3398DB'],
                        legend: {
                            textStyle: {
                                color: "#fff",
                                fontSize: 14
                            },
                            itemHeight: 14,
                            itemWidth: 14,
                            left: 'center',
                            top: "20",
                            data: [{
                                name: '点击量',
                                icon: 'rect',
                            }]
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        grid: {
                            left: '8%',
                            right: '6%',
                            bottom: '6%',
                            containLabel: true
                        },
                        xAxis: [{
                            type: 'category',
                            data:xAxisData,
                            axisTick: false,
                            axisLabel: {
                                color: '#fff'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#708ec1"
                                }
                            },
                        }],
                        yAxis: [{
                            type: 'value',
                            splitNumber: 5,
                            axisLabel: {
                                color: '#fff'
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
                        series: [{
                            name: '点击量',
                            type: 'bar',
                            barWidth: '50%',
                            itemStyle: {
                                barBorderRadius: 4,
                                color: '#02b09a' //改变柱状图颜色
                            },
                            data:yAxisData
                        }]
                });
            },
            downloadImgFn(id){

                var img = new Image();
                img.src = echarts.init(document.getElementById(id)).getDataURL({
                    pixelRatio: 2,
                    backgroundColor: '#33407a'
                });
                var url = img.getAttribute("src");
                const imgUrl = url;
                if (window.navigator.msSaveOrOpenBlob) {
                    let bstr = atob(imgUrl.split(",")[1]);
                    let n = bstr.length;
                    let u8arr = new Uint8Array(n);
                    while (n--) {
                        u8arr[n] = bstr.charCodeAt(n);
                    }
                    let blob = new Blob([u8arr]);
                    window.navigator.msSaveOrOpenBlob(blob, "chart-download" + "." + "png");
                } else {
                    // 这里就按照chrome等新版浏览器来处理
                    let a = document.createElement("a");
                    a.href = imgUrl;
                    a.setAttribute("download", "chart-download");
                    a.click();
                }
            },

            changeStartTime(time){
                this.startTime=time;
            },
            changeEndTime(time){
                this.endTime=time;
            },
            dialogEchart(){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['676px', 1000], //宽高
                    content: $('#alert-box-echarts'),
                });

                $('#alert-box-echarts .slider').bxSlider({
                    slideWidth: 676,
                    infiniteLoop: false,
                    hideControlOnEnd: true,
                    slideMargin: 0,
                    pager: false
                });
                this.drawBar('echarts1',this.data1.x,this.data1.y);
                this.drawBar('echarts2',this.data1.x,this.data1.y);

            },
            dialogDelete(id){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['422px', 1000], //宽高
                    content: $('#alert-box-del'),
                });
            },
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
#main .keshihua-main .select-con .icon{
    appearance: none;
    -webkit-appearance: none;
}
</style>