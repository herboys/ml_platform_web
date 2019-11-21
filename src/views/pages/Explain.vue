<template>
    <div class="wrapbody">
        <section id="main">
            <div class="main-body">
                <p class="top clearfix">
                    <span class="fl title"><i class="fl i1"></i> 时间序列模型解释</span>
                    <span class="fr btn-wrap">
                    <a class="a1">进行部署</a>
                    <a class="a2"><i class="icon"></i>下载解释文件</a>
                </span>
                </p>

                <div class="info-box">
                    <p class="title">
                        <i class="icon"></i><span class="s1">训练模型数据集名称：</span> <span class="s2">shogwsvew</span>
                    </p>

                    <div class="info-box-ul-wrap clearfix">
                        <ul class="ul fl ul1">
                            <li>
                                <span class="s1"><i class="fl"></i> <b>训练数据集数量：</b></span>
                                <span class="s2">73165x11</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>测试数据集数量：</b></span>
                                <span class="s2">16280x11</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>模型类型：</b></span>
                                <span class="s2">分类模型</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>主键：</b></span>
                                <span class="s2">陈某某</span>
                            </li>
                        </ul>

                        <ul class="ul fl ul2">
                            <li>
                                <span class="s1"><i class="fl"></i> <b>标签列：</b></span>
                                <span class="s2">生存率</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>时间顺序：</b></span>
                                <span class="s2">日期</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>折叠列：</b></span>
                                <span class="s2">婚姻情况、地址</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>已选算法：</b></span>
                                <span class="s2">决策树、支持向量机、逻辑回归</span>
                            </li>
                        </ul>


                        <ul class="ul fl ul3">
                            <li>
                                <span class="s1"><i class="fl"></i> <b>模型训练开始时间：</b></span>
                                <span class="s2">2019-09-06 10:00:04</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>模型训练结束时间：</b></span>
                                <span class="s2">2019-09-06 14:35:31</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>模型训练时长：</b></span>
                                <span class="s2">04:35:27</span>
                            </li>
                            <li>
                                <span class="s1"><i class="fl"></i> <b>最佳模型：</b></span>
                                <span class="s2">决策树</span>
                            </li>
                        </ul>


                    </div>
                </div>


                <div class="top clearfix">
                    <span class="fl title"><i class="fl i1"></i> 真实值 - 预测值图示</span>
                    <div class="fr select-wrap clearfix">
                        <span class="fl key">模型类型:</span>
                        <div class="select-con fl">
                            <i class="icon"></i>
                            <select class="select">
                                <option value="">决策树</option>
                            </select>
                        </div>
                        <a class="fl btn">确定</a>
                    </div>
                </div>

                <div class="echarts-wrap">
                    <predictedChart :values="chartData" />
                </div>


            </div>
        </section>
    </div>
</template>


<script>
    import predictedChart from '@/views/components/predictedChart.vue'
    export default  {
        data(){
            return {
                chartData:{
                    axis01: [{
                        "name": "10:00",
                        "val": 1000
                    }, {
                        "name": "10:30",
                        "val": 2132
                    }, {
                        "name": "11:00",
                        "val": 2215
                    }, {
                        "name": "11:30",
                        "val": 2330
                    }, {
                        "name": "12:00",
                        "val": 1465
                    }, {
                        "name": "12:30",
                        "val": 5420
                    }, {
                        "name": "13:00",
                        "val": 3215
                    }, {
                        "name": "13:30",
                        "val": 1120
                    }, {
                        "name": "14:00",
                        "val": 1230
                    }, {
                        "name": "14:30",
                        "val": 2300
                    }, {
                        "name": "15:00",
                        "val": 1120
                    }, {
                        "name": "15:30",
                        "val": 4620
                    }],
                    axis02: [{
                        "name": "12:30",
                        "val": 1233
                    }, {
                        "name": "13:00",
                        "val": 5543
                    }, {
                        "name": "13:30",
                        "val": 2323
                    }, {
                        "name": "14:00",
                        "val": 4010
                    }, {
                        "name": "14:30",
                        "val": 4510
                    }, {
                        "name": "15:00",
                        "val": 6520
                    }, {
                        "name": "15:30",
                        "val": 6655
                    }]
                }
            }
        },
        components:{
            predictedChart
        }
    }
</script>
<style scoped>
#main .main-body .top .btn-wrap .a1{margin-right: 8px;}
#main .main-body .top .select-wrap .select{
    appearance: none;
    -webkit-appearance: none;
}
</style>