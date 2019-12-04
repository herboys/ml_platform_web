<template>
    <div class="wrapbody">
        <section id="main">
            <div class="breadpage">
                <span class="light_bread"><a href="">评估</a></span>
                <span class="dark_bread"> > </span>
                <span class="dark_bread"><a href="">模型评估</a></span>
            </div>

            <div class="main-body main-body-assess">
                <p class="top clearfix">
                    <span class="fl title"><i class="fl i1"></i> 模型评估</span>
                    <span class="fr btn-wrap">
                        <a class="a1">查看模型解释</a>
                        <a class="a2"><i class="icon"></i>下载该模型评估报告</a>
                    </span>
                </p>

                <div class="assess-wrap">
                    <div class="assess-conent clearfix">
                        <div class="assess-left fl">
                            <p class="title text-c">模型排名</p>
                            <div class="form">
                                <span>排名指标</span>
                                <select>
                                    <option value="">模型优劣指标</option>
                                </select>
                                <a class="btn-sure text-c">确定</a>
                            </div>
                            <ul class="top-list">
                                <li class="clearfix">
                                    <i class="fl">Top1</i>
                                    <span class="name fl">决策树</span>
                                    <b class="fr">0.94</b>
                                    <span class="dash-line">
                                        <em class="line"></em>
                                    </span>
                                </li>

                                <li class="clearfix">
                                    <i class="fl">Top2</i>
                                    <span class="name fl">支持向量机</span>
                                    <b class="fr">0.85</b>
                                    <span class="dash-line">
                                        <em class="line"></em>
                                    </span>
                                </li>

                                <li class="clearfix">
                                    <i class="fl">Top3</i>
                                    <span class="name fl">逻辑回归</span>
                                    <b class="fr">0.72</b>
                                    <span class="dash-line">
                                        <em class="line"></em>
                                    </span>
                                </li>

                                <li class="clearfix">
                                    <i class="fl">Top4</i>
                                    <span class="name fl">贪心算法</span>
                                    <b class="fr">0.66</b>
                                    <span class="dash-line">
                                        <em class="line"></em>
                                    </span>
                                </li>

                                <li class="clearfix">
                                    <i class="fl">Top5</i>
                                    <span class="name fl">动态规则</span>
                                    <b class="fr">0.54</b>
                                    <span class="dash-line">
                                        <em class="line"></em>
                                    </span>
                                </li>

                                <li class="clearfix">
                                    <i class="fl">Top6</i>
                                    <span class="name fl">其他规则</span>
                                    <b class="fr">0.40</b>
                                    <span class="dash-line">
                                        <em class="line"></em>
                                    </span>
                                </li>
                            </ul>

                            <div class="tip">
                                注：(请先选择判断模型优劣的指标，以查看所有模型的排名）
                            </div>
                        </div>
                        <div class="assess-right">
                            <p class="title"><i></i>全部模型评分</p>
                            <div class="assess-right-list clearfix">
                                <div class="assess-right-item">
                                    <div class="assess-right-content">
                                        <p class="name"><i></i>决策树</p>
                                        <ul>
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
                                    </div>
                                </div>

                                <div class="assess-right-item">
                                    <div class="assess-right-content">
                                        <p class="name"><i></i>决策树</p>
                                        <ul>
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
                                    </div>
                                </div>

                                <div class="assess-right-item">
                                    <div class="assess-right-content">
                                        <p class="name"><i></i>决策树</p>
                                        <ul>
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
                                    </div>
                                </div>

                                <div class="assess-right-item">
                                    <div class="assess-right-content">
                                        <p class="name"><i></i>决策树</p>
                                        <ul>
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
                                    </div>
                                </div>

                                <div class="assess-right-item">
                                    <div class="assess-right-content">
                                        <p class="name"><i></i>决策树</p>
                                        <ul>
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
                                    </div>
                                </div>

                                <div class="assess-right-item">
                                    <div class="assess-right-content">
                                        <p class="name"><i></i>决策树</p>
                                        <ul>
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
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>






            </div>
        </section>
    </div>
</template>


<script>

    export default  {
        data(){
            return {

            }
        },
        components:{
            
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
.assess-left{
    width: 311px;
    margin-right: 38px;
    padding:25px 22px 11px 28px;
}

.assess-right{
    overflow: hidden;
}

.assess-left .title{
    font-size:18px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(0,254,255,1);
    margin-bottom: 22px;
}
.assess-left .form{
    font-size: 0;
    margin-bottom: 34px;
}

.assess-left .form span{
    font-size:14px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(177,200,254,1);
    margin-right: 9px;
}
.assess-left .form select{
    appearance: none;
    background-color: transparent;
    font-size:14px;
    color: #fff;
    border-radius: 20px;
    border:1px solid #9199CE;
    padding:4px 30px 4px 11px; 
    margin-right: 12px;
    outline: none;
    width: 130px;
}
.assess-left .form .btn-sure{
    width:50px;
    color: #fff;
    font-size: 13px;
    line-height: 26px;
    height:26px;
    display: inline-block;
    background:linear-gradient(90deg,rgba(0,180,151,1),rgba(0,157,175,1));
    border-radius:13px;
}
.top-list{
    margin-bottom: 93px;
}
.top-list li{
    line-height: 20px;
    margin-bottom: 20px;
}
.top-list li i{
    font-size: 13px;
    color: #B1C8FE;
    background-color: #434C7E;
    border-radius:10px;
    padding: 0px 6px;
    margin-right: 10px;
    font-style: italic;
}
.top-list li .name{
    color: #fff;
    font-size: 16px;
    margin-right: 10px;
    border-bottom: 1px solid #fff;
}
.top-list li b{
    font-size: 16px;
    color: #fff;
    font-weight: normal;
    margin-left: 10px;
}
.top-list li span.dash-line{
    position: relative;
    overflow: hidden;
    display: block;
    height: 20px;
}
.top-list li .line{
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border-bottom: 1px dashed #5E6795;
    width: 100%;
}
.assess-left .tip{
    font-size:13px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(177,200,254,1);
    line-height:22px;
}
.assess-right .assess-right-item{
    width: 33.33%;
    margin-top: 20px;
    float: left;
}
.assess-right .assess-right-content{
    padding:10px 30px 22px 30px;
}
.assess-right .assess-right-content .name{
    text-align: center;
    font-size:16px;
    color: #fff;
    margin-bottom: 14px;
}
.assess-right .assess-right-content .name i{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #6CEC4D;
    display: inline-block;
    margin-right: 6px;
}
.assess-right .assess-right-content li span{
    line-height: 22px;
    font-size:13px;
}
.assess-right .assess-right-content li span:nth-child(1){
    color:rgba(177,200,254,1);
    text-align: right;
    width: 75px;
    margin-right: 10px;
}
.assess-right .assess-right-content li span:nth-child(2){
    color:rgba(255,255,255,1);
}
</style>