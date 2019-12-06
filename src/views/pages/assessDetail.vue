<template>
    <div class="wrapbody">
        <section id="main">
            <div class="breadpage">
                <span class="light_bread"><a href="">评估</a></span>
                <span class="dark_bread"> > </span>
                <span class="light_bread"><a href="">模型评估</a></span>
                <span class="dark_bread"> > </span>
                <span class="dark_bread"><a href="">模型评估详情</a></span>
            </div>

            <div class="main-body main-body-assess">
                <p class="top clearfix">
                    <span class="fl title"><i class="fl i1"></i> 模型评估详情</span>
                    <span class="fr btn-wrap">
                        <router-link class="a1" :to="{path:'/explain'}"> 查看模型解释</router-link>
                        <a class="a2"><i class="icon"></i>下载该模型评估报告</a>
                    </span>
                </p>

                <div class="assess-wrap">
                    <div class="assess-conent clearfix">
                        <div class="assess-left assess-left-detail fl">
                            <p class="title text-c">决策树<i></i><span>模型评分</span></p>
                            <ul class="assess-left-detail-ul">
                                <li class="clearfix">
                                    <span class="fl">准确率：</span>
                                    <span class="fl">0.9399+/-0.0074</span>
                                </li>
                                <li class="clearfix">
                                    <span class="fl">AUC：</span>
                                    <span class="fl">0.959+/-0.0049</span>
                                </li>
                                <li class="clearfix">
                                    <span class="fl">F1：</span>
                                    <span class="fl">0.959+/-0.0045</span>
                                </li>
                                <li class="clearfix">
                                    <span class="fl">F2：</span>
                                    <span class="fl">0.751+/-0.0015</span>
                                </li>
                                <li class="clearfix">
                                    <span class="fl">基尼系数：</span>
                                    <span class="fl">0.91+/-0.01</span>
                                </li>
                                <li class="clearfix">
                                    <span class="fl">损失值：</span>
                                    <span class="fl">0.959+/-0.0049</span>
                                </li>
                                <li class="clearfix">
                                    <span class="fl">MCC：</span>
                                    <span class="fl">0.959+/-0.0049</span>
                                </li>
                            </ul>

                            <div class="assess-left-describe">
                                <p class="titie-help"><i>?</i>帮助</p>
                                <ul class="help-list">
                                   <li class="help-item">
                                       <p class="p1">准确率召回率曲线: </p>
                                       <p class="p2">预测为+的样本中真是lable为+的样本比例。</p>
                                   </li>

                                   <li class="help-item">
                                       <p class="p1">AUC：</p>
                                       <p class="p2">ROC曲线下方的面积，是判断二分类预测模型优劣的标准，AUC值越接近1，则模型的准确度越高.</p>
                                   </li>

                                   <li class="help-item">
                                       <p class="p1">F1：</p>
                                       <p class="p2">ROC曲线下方的面积，是判断二分类预测模型优劣的标准，AUC值越接近1，则模型的准确度越高.</p>
                                   </li>
                                   <li class="help-item">
                                       <p class="p1">F2：</p>
                                       <p class="p2">ROC曲线下方的面积，是判断二分类预测模型优劣的标准，AUC值越接近1，则模型的准确度越高.</p>
                                   </li>
                                   <li class="help-item">
                                       <p class="p1">基尼系数：</p>
                                       <p class="p2">ROC曲线下方的面积，是判断二分类预测模型优劣的标准，AUC值越接近1，则模型的准确度越高.</p>
                                   </li>
                                   <li class="help-item">
                                       <p class="p1">损失值：</p>
                                       <p class="p2">ROC曲线下方的面积，是判断二分类预测模型优劣的标准，AUC值越接近1，则模型的准确度越高.</p>
                                   </li>
                                   <li class="help-item">
                                       <p class="p1">MCC：</p>
                                       <p class="p2">ROC曲线下方的面积，是判断二分类预测模型优劣的标准，AUC值越接近1，则模型的准确度越高.</p>
                                   </li>

                                </ul>
                            </div>


                        </div>
                        <div class="assess-right">
                            <p class="title"><i></i>模型评估图</p>
                            <ul class="echarts-list clearfix">
                                <li class="fl">
                                    <span><i></i>ROC曲线</span>
                                    <div class="echarts-content">
                                        <div class="echarts-content-wrap">
                                            <span class="s1">真正比例占比</span>
                                            <span class="s2">假正比例占比</span>
                                            <swiper-chart :values="echartsLineOption1"></swiper-chart> 
                                        </div>
                                        
                                    </div>
                                </li>
                                <li class="fl">
                                    <span><i></i>准确率-召回率曲线</span>
                                    <div class="echarts-content">
                                        <div class="echarts-content-wrap">
                                            <span class="s1">准确率</span>
                                            <span class="s2">召回率</span>
                                            <swiper-chart :values="echartsLineOption2"></swiper-chart> 
                                        </div>
                                    </div>
                                </li>
                                <li class="fl">
                                    <span><i></i>CUMUL ATIVE GAINS曲线</span>
                                    <div class="echarts-content">
                                        <div class="echarts-content-wrap">
                                            <span class="s1">收益率</span>
                                            <span class="s2">分位点</span>
                                            <swiper-chart :values="echartsLineOption1"></swiper-chart> 
                                        </div>

                                    </div>
                                </li>
                                <li class="fl">
                                    <span><i></i>LIFT曲线</span>
                                    <div class="echarts-content">
                                        <div class="echarts-content-wrap">
                                            <span class="s1">提升值</span>
                                            <span class="s2">分位点</span>
                                            <swiper-chart :values="echartsLineOption3"></swiper-chart> 
                                        </div>

                                    </div>
                                </li>
                                <li class="fl">
                                    <span><i></i>KS检验图表</span>
                                    <div class="echarts-content">
                                        <div class="echarts-content-wrap">
                                            <span class="s1">收益率</span>
                                            <span class="s2">分位点</span>
                                            <swiper-chart :values="echartsLineOption4"></swiper-chart> 
                                        </div>
                                    </div>
                                </li>
                                <li class="fl">
                                    <span><i></i>混淆矩阵</span>
                                    <div class="echarts-content">
                                        <div class="echarts-content-wrap">
                                            <span class="s1">实际标签</span>
                                            <span class="s2">预测标签</span>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td class="white">0</td>
                                                        <td class="white">1</td>
                                                        <td class="white">Total</td>
                                                        <td class="white">Eror</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="white">0</td>
                                                        <td class="yellow">205</td>
                                                        <td class="gray">0</td>
                                                        <td class="gray">205</td>
                                                        <td class="white">0.0000</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="white">1</td>
                                                        <td class="gray">31</td>
                                                        <td class="yellow">96</td>
                                                        <td class="gray">127</td>
                                                        <td class="white">0.2441</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="white">Total</td>
                                                        <td class="gray">2316</td>
                                                        <td class="gray">96</td>
                                                        <td class="gray">332</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="white">Eror</td>
                                                        <td class="white">0.1314</td>
                                                        <td class="white">0</td>
                                                        <td></td>
                                                        <td class="white">0.0914</td>
                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>
                                </li>
                            </ul>


                            <div class="assess-left-describe">
                                <p class="titie-help"><i>?</i>帮助</p>
                                <ul class="help-list">

                                   <li class="help-item">
                                       <p class="p1">ROC曲线横坐标</p>
                                       <p class="p2">为False Posive Rate(FPR假正率)，纵坐标为True Positive Rate(TPR真正率，ROC曲线越接近左上角，则表示该分类器的性能越好。</p>
                                   </li>

                                   <li class="help-item">
                                       <p class="p1">准确率召回率曲线:</p>
                                       <p class="p2">横坐标为召回率，纵坐标为准确率，准确率是最常用的分类性能指标，即正确预测的正反列数总数;召回率即正确预测的正例数实际正例总数，可说明在实际正样本中，分类器能预测出多少。</p>
                                   </li>

                                   <li class="help-item">
                                       <p class="p1">CUMULATIVE GAINS曲线</p>
                                       <p class="p2">Gains (增益)与Lit (提升) 类似，Lit 是不同阈值FL和Depth的轨迹，Gains是不同阈值下FPV*和Deth的轨迹，一个好的分类模型，在阈值变大时，相应的PV+ 就要变大，曲线足够陡峭。</p>
                                   </li>

                                   <li class="help-item">
                                       <p class="p1">LIFT曲线</p>
                                       <p class="p2">它衡量的是与不利用模型相比，利用模型之后的预测能力"优化了多少，It(提升指数)越大，模型的运行效果越好。</p>
                                   </li>
                                   <li class="help-item">
                                       <p class="p1">K-S检验图表</p>
                                       <p class="p2">用10等分做为横坐标，用真正率和假正率的累计值分别做为两个纵坐标得到的两个曲线就是KS曲线。ks越大， 表示计算预测值的模型区分好坏用户的能力越强。</p>
                                   </li>
                                   <li class="help-item">
                                       <p class="p1">混淆矩阵</p>
                                       <p class="p2">混淆矩阵是个误差矩阵 常用来可视化地评估监督学习算法的性能，矩阵中的每行代表实例的真实标签，每列代表实例的预测标签。</p>
                                   </li>

                                   

                                </ul>
                            </div>



                        </div>
                    </div>

                </div>






            </div>
        </section>
    </div>
</template>


<script>
    import swiperChart from '../components/swiperChart'
    export default  {
        data(){
            return {
                echartsLineOption1:{
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            }
                        },
                        grid: {
                            left: '10%',
                            right: '6%',
                            bottom: '12%',
                            top:'5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'value',
                            position: 'top',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#8C98B4',
                                fontSize:12
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#363960"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    color: ['#363960'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                        },
                        yAxis: {
                            type: 'value',
                            position: 'right',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#8C98B4',
                                fontSize:12
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#363960"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    color: ['#363960'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            splitArea:{
                                show:true,
                                areaStyle:{
                                    color:['#1e224f','#1e224f'],
                                }
                            }

                        },
                        series: [
                            {
                                type: 'line',
                                smooth: true,
                                symbol:'circle',
                                itemStyle: {
                                    normal: {
                                        color: "#000",  // 会设置点和线的颜色，所以需要下面定制 line
                                        borderColor: "#FAF70D",  // 点边线的颜色
                                        lineStyle: {
                                            color: "#FAF70D"
                                        }
                                    }
                                },
                                symbolSize: 6,
                                data:  [
                                    [0,0],
                                    [0.01,0.08],
                                    [0.05,0.2],
                                    [0.1,0.4],
                                    [0.18,0.6],
                                    [0.25,0.8],
                                    [0.4,0.9],
                                    [0.6,0.95],
                                    [0.8,0.98],
                                    [1.0,1.0]
                                ]
                            },
                            {
                                type: 'line',
                                smooth: true,
                                symbol:'circle',
                                itemStyle: {
                                    normal: {
                                        color: "#000",  // 会设置点和线的颜色，所以需要下面定制 line
                                        borderColor: "#FAF70D",  // 点边线的颜色
                                        lineStyle: {
                                            color: "#aaa",
                                            type:'dashed',
                                            width:1
                                        }
                                    }
                                },
                                symbolSize: 6,
                                data:  [
                                    [0,0],
                                    [1.0,1.0]
                                ]
                            }
                        ]
                },
                echartsLineOption2:{
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            }
                        },
                        grid: {
                            left: '10%',
                            right: '6%',
                            bottom: '12%',
                            top:'5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'value',
                            position: 'top',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#8C98B4',
                                fontSize:12
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#363960"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    color: ['#363960'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                        },
                        yAxis: {
                            type: 'value',
                            position: 'right',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#8C98B4',
                                fontSize:12
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#363960"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    color: ['#363960'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            splitArea:{
                                show:true,
                                areaStyle:{
                                    color:['#1e224f','#1e224f'],
                                }
                            }

                        },
                        series: [
                            {
                                type: 'line',
                                smooth: true,
                                symbol:'circle',
                                itemStyle: {
                                    normal: {
                                        color: "#000", 
                                        borderColor: "#FAF70D",
                                        lineStyle: {
                                            color: "#FAF70D"
                                        }
                                    }
                                },
                                symbolSize: 6,
                                data:  [
                                    [0,1],
                                    [0.22,0.98],
                                    [0.41,0.95],
                                    [0.62,0.9],
                                    [0.8,0.78],
                                    [0.9,0.6],
                                    [0.95,0.43],
                                    [0.98,0.2],
                                    [1.0,0.0]
                                ]
                            },
                 
                        ]
                },
                echartsLineOption3:{
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            }
                        },
                        grid: {
                            left: '10%',
                            right: '6%',
                            bottom: '12%',
                            top:'5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'value',
                            position: 'top',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#8C98B4',
                                fontSize:12
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#363960"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    color: ['#363960'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                        },
                        yAxis: {
                            type: 'value',
                            position: 'right',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#8C98B4',
                                fontSize:12
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#363960"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    color: ['#363960'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            splitArea:{
                                show:true,
                                areaStyle:{
                                    color:['#1e224f','#1e224f'],
                                }
                            }

                        },
                        series: [
                            {
                                type: 'line',
                                smooth: true,
                                symbol:'circle',
                                itemStyle: {
                                    normal: {
                                        color: "#000",
                                        borderColor: "#FAF70D",
                                        lineStyle: {
                                            color: "#FAF70D"
                                        }
                                    }
                                },
                                symbolSize: 6,
                                data:  [
                                    [0,0.77],
                                    [0.2,0.82],
                                    [0.4,0.76],
                                    [0.6,0.6],
                                    [0.8,0.3],
                                    [1.0,0.2]
                                    
                                ]
                            },
                 
                        ]
                },
                echartsLineOption4:{
                        legend:{
                            textStyle:{
                                color:"#FFF"
                            }
                        },
                        grid: {
                            left: '10%',
                            right: '6%',
                            bottom: '12%',
                            top:'5%',
                            containLabel: true
                        },
                        xAxis: {
                            type: 'value',
                            position: 'top',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#8C98B4',
                                fontSize:12
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#363960"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    color: ['#363960'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                        },
                        yAxis: {
                            type: 'value',
                            position: 'right',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                color: '#8C98B4',
                                fontSize:12
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#363960"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle:{
                                    color: ['#363960'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            splitArea:{
                                show:true,
                                areaStyle:{
                                    color:['#1e224f','#1e224f'],
                                }
                            }

                        },
                        series: [
                            {
                                type: 'line',
                                smooth: true,
                                symbol:'circle',
                                itemStyle: {
                                    normal: {
                                        color: "#000",
                                        borderColor: "#FAF70D",
                                        lineStyle: {
                                            color: "#FAF70D"
                                        }
                                    }
                                },
                                symbolSize: 6,
                                data:  [
                                    [0,1],
                                    [0.22,0.98],
                                    [0.41,0.95],
                                    [0.62,0.9],
                                    [0.8,0.78],
                                    [0.9,0.6],
                                    [0.95,0.43],
                                    [0.98,0.2],
                                    [1.0,0.0]
                                ]
                            },
                            {
                                type: 'line',
                                smooth: true,
                                symbol:'circle',
                                itemStyle: {
                                    normal: {
                                        color: "#000",
                                        borderColor: "#FAF70D",
                                        lineStyle: {
                                            color: "#abcdef"
                                        }
                                    }
                                },
                                symbolSize: 6,
                                data:  [
                                    [0,0],
                                    [0.2,0.1],
                                    [0.44,0.19],
                                    [0.65,0.23],
                                    [0.82,0.4],
                                    [0.9,0.6],
                                    [1,1]
                                ]
                            },
                            {
                                type: 'line',
                                smooth: true,
                                symbol:'circle',
                                itemStyle: {
                                    normal: {
                                        color: "#000",
                                        borderColor: "#FAF70D",
                                        lineStyle: {
                                            color: "#aaa",
                                            type:'dashed',
                                            width:1
                                        }
                                    }
                                },
                                symbolSize: 6,
                                data:  [
                                    [0,0],
                                    [1.0,1.0]
                                ]
                            }
                 
                        ]
                },
                        
            }
        },
        components:{swiperChart},
        mounted(){
            
        }
    }
</script>
<style scoped>
#main .main-body .top .btn-wrap .a1{margin-right: 8px;}
#main .main-body .top .select-wrap .select{
    appearance: none;
    -webkit-appearance: none;
}

.assess-wrap{
    padding: 0 45px;
    margin-top: 20px;
}
.assess-conent{
    border-top: 1px solid rgba(88,102,186,0.5);
    padding-top: 16px;
}
.assess-left.assess-left-detail{
    width: 388px;
    margin-right: 35px;
    padding:25px 22px 11px 28px;
}

.assess-right{
    overflow: hidden;
}

.assess-left .title{
    font-size:16px;
    color:rgba(0,254,255,1);
    margin-bottom: 37px;
}
.assess-left .title i{
    width: 5px;
    height: 5px;
    margin: 0 3px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
}
.assess-left .title span{
    color: #fff;
    font-size: 14px;
}

.assess-left-detail .assess-left-detail-ul{
    padding: 0 18%;
    margin: 0 auto;
    border-bottom: 1px solid #505BA1;
}
.assess-left-detail li{
    margin-bottom: 20px;
}
.assess-left-detail li span{
    line-height: 22px;
    font-size:16px;
}
.assess-left-detail li span:nth-child(1){
    color:rgba(177,200,254,1);
    text-align: left;
    width: 80px;
    margin-right: 10px;
}
.assess-left-detail li span:nth-child(2){
    color:rgba(255,255,255,1);
}
.assess-left-describe{
    padding: 30px 10px;
}
.assess-left-describe .titie-help{
    color: #fff;
    font-size: 16px;
    margin-bottom: 18px;
}
.assess-left-describe .titie-help i{
    display: inline-block;
    border-radius: 50%;
    background-color: #00FFFF;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 16px;
    font-weight: bolder;
    color: #7C88BD;
    margin-right: 6px;
}
.assess-left-describe .help-item{
    margin-bottom: 21px;
    line-height:24px;
}
.assess-right .assess-left-describe .help-item{
    margin-bottom: 10px;
}
.assess-left-describe .help-item .p1{
    color: #00FEFF;
    font-size: 16px;
}
.assess-left-describe .help-item .p2{
    color: #B1C8FE;
    font-size: 14px;
}
.assess-right .echarts-list{
    margin-top: 32px;
    padding-left: 5px;
}
.assess-right .echarts-list li{
    width: 33.33%;
    margin-bottom: 40px;
}
.assess-right .echarts-list li:nth-last-child(1),.assess-right .echarts-list li:nth-last-child(2),.assess-right .echarts-list li:nth-last-child(3){
    margin-bottom: 0;
}
.assess-right .echarts-list li span{
    font-size: 14px;
    color: #fff;
}
.assess-right .echarts-list li span i{
    background-color: #6CEC4D;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 8px;
}
.assess-right .echarts-list li .echarts-content{
    width: 85%;
    height: 0;
    padding-bottom:85%;
    position: relative;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap .echarts{
    height: 100%;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap span{
    position: absolute;
    color: #B1C8FE;
    font-size: 12px;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap .s1{
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    writing-mode:vertical-lr;
}

.assess-right .echarts-list li .echarts-content .echarts-content-wrap .s2{
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap table{
    position: absolute;
    left: 10%;
    top: 14%;
    width: 90%;
    height: 75%;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap tbody{
    height: 100%;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap td{
    border: 1px solid #363960;
    background-color: #1e224f;
    text-align: center;
    font-size: 12px;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap td.white{
    color: #fff;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap td.yellow{
    color: #FFFF00;
}
.assess-right .echarts-list li .echarts-content .echarts-content-wrap td.gray{
    color:rgba(255,255,255,0.3);
}
</style>