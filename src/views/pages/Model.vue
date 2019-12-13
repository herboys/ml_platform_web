<template>
<div id="main" class="page-model">

    <div class="breadpage">
        <span class="light_bread"><router-link :to="{path:'/project'}">模型</router-link></span>
        <span class="dark_bread"> > </span>
        <span class="dark_bread"><router-link :to="{path:'/'}">medicine.t</router-link></span>
    </div>

    <el-row :gutter="20">
        <el-col :span="8">
            <div class="model-box">
                <header class="model-header">
                    <span class="name"><i class="round"></i>数据集 testdata</span>
                </header>
                <div class="model-content">
                    <ul class="dataset-list">
                        <li class="long"><label class="label-text">验证数据集：</label>12K</li>
                        <li class="short"><label class="label-text">行：</label> 15K</li>
                        <li class="long"><label class="label-text">标签列：</label>是否患高血压</li>
                        <li class="short"><label class="label-text">列：</label>30</li>
                        <li class="long"><label class="label-text">重量列：</label> 23</li>
                        <li class="short"><label class="label-text">类型：</label>布尔</li>
                        <li class="long"><label class="label-text">折叠列：</label>4</li>
                        <li class="short"><label class="label-text">时间列：</label>2</li>
                        <li class="long"><label class="label-text">目标频率：</label>7K</li>
                        <li class="short"><label class="label-text">唯一值：</label>10K</li>
                        <li class="long"><label class="label-text">测试数据集：</label>3K</li>
                        <li class="short"><label class="label-text">数量：</label>15K</li>
                    </ul>
                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="model-box">
                <header class="model-header">
                    <span class="name"><i class="round"></i>实验室进度</span>
                </header>
                <div class="model-content laboratory-box">
                    <div v-if="!training" class="laboratory-chart-box">
                        <label class="label-name left">中央处理器</label>
                        <label class="label-name right">Medium</label>
                        <swiper-chart :values="echartsLaboratoryOption" class="chart-box"></swiper-chart>
                        <div class="label-footer left">
                            <p class="name">过去</p>
                            <p class="number">00:46:41</p>
                        </div>
                        <div class="label-footer right">
                            <p class="name">迭代</p>
                            <p class="number">48/50</p>
                        </div>
                        <a class="start-btn" @click="startModel" href="javascript:void(0);" v-if="!isStart">
                            <!-- {{trainingHandler?"开始":"暂停"}} -->
                            开始
                        </a>
                        <a class="start-btn" @click="trainingHandler" href="javascript:void(0);" v-if="isStart ">
                            <!-- {{trainingHandler?"开始":"暂停"}} -->
                            暂停
                        </a>
                    </div>
                    <div v-if="training">
                        <p class="info-p"><i class="icon"></i>模型训练已完成，请点击下面的按钮进行其他操作</p>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <a class="laboratory-tool" href="javascript:void(0);">在验证集上评估模型</a>
                            </el-col>
                            <el-col :span="12">
                                <a class="laboratory-tool primary" href="javascript:void(0);">下载MOJO评分管道</a>
                            </el-col>
                            <el-col :span="12">
                                <a class="laboratory-tool primary" href="javascript:void(0);">模型解释</a>
                            </el-col>
                            <el-col :span="12">
                                <a class="laboratory-tool" href="javascript:void(0);">下载实验日志</a>
                            </el-col>
                            <el-col :span="12">
                                <a class="laboratory-tool" href="javascript:void(0);">下载PYTHON评分管道</a>
                            </el-col>
                            <el-col :span="12">
                                <a class="laboratory-tool primary" href="javascript:void(0);">部署</a>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="model-box">
                <header class="model-header">
                    <span class="name"><i class="round"></i>专业设置</span>
                    <div class="right-tool">
                        <a class="setting-btn" :class="{'disable':training}" href="javascript:void(0);" @click="opendailog">超参数设置</a>
                    </div>
                </header>
                <div class="model-content major-setup-box">
                    <el-row  v-if="!training">
                        <el-col :span="8">
                            <chart-pie-switch  :max="pieOne.max" :value="pieOne.value" :colors="pieOne.colors" @change="switchChartPieChangeOne" :name-text="pieOne.name"  />
                        </el-col>
                        <el-col :span="8">
                            <chart-pie-switch  :max="pieTwo.max" :value="pieTwo.value" :colors="pieTwo.colors" @change="switchChartPieChangeTwo" :name-text="pieTwo.name"  />
                        </el-col>
                        <el-col :span="8">
                            <chart-pie-switch  :max="pieThree.max" :value="pieThree.value" :colors="pieThree.colors" @change="switchChartPieChangeThree" :name-text="pieThree.name"  />
                        </el-col>
                    </el-row>

                    <div v-if="training">
                        <el-row>
                            <el-col :span="8">
                                <chart-pie-switch class="short" :show-switch="false" :max="pieOne.max" :value="pieOne.value" :colors="pieOne.colors" @change="switchChartPieChangeOne" :name-text="pieOne.name"  />
                            </el-col>
                            <el-col :span="8">
                                <chart-pie-switch  class="short" :show-switch="false" :max="pieTwo.max" :value="pieTwo.value" :colors="pieTwo.colors" @change="switchChartPieChangeTwo" :name-text="pieTwo.name"  />
                            </el-col>
                            <el-col :span="8">
                                <chart-pie-switch  class="short" :show-switch="false" :max="pieThree.max" :value="pieThree.value" :colors="pieThree.colors" @change="switchChartPieChangeThree" :name-text="pieThree.name"  />
                            </el-col>
                        </el-row>
                        <div class="cpu-chart">
                            <h4 class="cpu-chart-title"><i class="lines left"></i><span class="name">CPU运转情况</span><i class="lines right"></i></h4>
                            <div class="cpu-chart-box">
                                <swiper-chart :values="echartCPUOptions"></swiper-chart>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="model-box">

                <header class="model-header">
                    <span class="name"><i class="round"></i>迭代数据验证</span>
                    <div class="right-tool">
                        <p class="number">0.9857</p>
                        <p class="model-title">Model：LIGHTGBM</p>
                    </div>
                </header>

                <div class="model-content">
                    <swiper-chart :values="echartsLineOption1" class="chart-box"></swiper-chart>
                </div>

            </div>
        </el-col>
        <el-col :span="8">
            <div class="model-box">
                <header class="model-header">
                    <span class="name"><i class="round"></i>变量重要性</span>
                </header>
                <div class="model-content">
                    <swiper-chart :values="echartsBarOption" class="chart-box"></swiper-chart>
                </div>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="model-box">
                <header class="model-header">
                    <span class="name"><i class="round"></i>评估曲线</span>
                    <div class="right-tool">
                        <p class="number">0.9857</p>
                        <p class="model-title">(AUC)</p>
                    </div>
                </header>
                <div class="model-content">
                    <swiper-chart :values="echartsLineOption2" class="chart-box"></swiper-chart>
                </div>
            </div>
        </el-col>
    </el-row>
    <!-- tab切换 -->
    <div class="alert-box" id="alert-box-shujujiTab">
        <div class="title text-c">
            <ul class="tab-nav clearfix">
                <li v-for="(item,index) in tabList" @click="selected(item.name)" :class="active==item.name?'active':''" :key="index"><a>{{item.name}}</a></li>
            </ul>
            <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
        </div>
        <div class="content alert-box-content">
            <p class="big-title">参考设置</p>
            <!-- 支持向量机 -->
            <div class="item-lists" v-show="active == '支持向量机'">
                <div class="item-list clearfix">
                    <span class="fl">C</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="svr.c" placeholder="默认为1.0">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                   C为错误术语的惩罚参数，C值越大，对误分类的惩罚越大，当C的值为无穷大的时候，表示全部正确的分类
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">kemel</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="svr.kemel">
                            <option  v-for="name in svr.kemelList" :value="name" :key="name">{{ name }}</option>
                        </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                kemel为指定要在算法中使用的内核类型
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">degree</span>
                    <div class="fl clearfix">
                        <input type="text" v-model="svr.degree" class="fl" placeholder="默认值为3">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    degree为多项式核函数的次数
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">gamma</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="svr.gamma">
                            <option :value="name" v-for="name in svr.gammaList" :key="name">{{ name }}</option>
                        </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                  Gamma指定了节点分裂所需的最小损失函数下降值。这个参数的值越大，算法越保守
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">class weight</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="svr.class">
                            <option :value="name" v-for="name in svr.classList" :key="name">{{ name }}</option>
                        </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                   每个类所占据的权重，不同的类设置不同的惩罚参数C，缺省的话自适应
                            </span>
                        </p>

                    </div>
                </div>

            </div>
            <!-- 决策树 -->
            <div class="item-lists" v-show="active == '决策树'">
                <div class="item-list clearfix">
                    <span class="fl">criterion</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="decisionTree.criterion">
                            <option :value="name" v-for="name in decisionTree.criterionList" :key="name">{{name}}</option>
                        </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    特征选择标准：前者是基尼 系数，后者是信息熵，两种 算法对准确率无区别，一般 说使用默认的基尼系数“gini” 就可以。
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">splitter</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="decisionTree.splitter">
                                <option :value="name" v-for="name in decisionTree.splitterList" :key="name">{{name}}</option>
                            </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    特征划分标准：best在特征的所有划分点中找出最优化分店。random是随机的在部分划分点中找局部最优的划分点。best更适合样本量不大的时候
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">max_depth</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl"  v-model="decisionTree.max_depth" placeholder="输入状态值为none">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    决策树最大深度：在模型样本量与特征都多的情况下，推荐限制最大深度，具体取值取决于数据的分布，常用取值10-100之间，常用来解决过拟合
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">min_impurity_decrease</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl"  v-model="decisionTree.min_impurity_decrease" placeholder="默认值为0">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    节点划分最小不纯度；这个值限制决策树的增长，如果某节点的不纯度小于这个值，该节点将不再生成子节点
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">max_leaf_nodes</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="decisionTree.max_leaf_nodes" placeholder="默认值为none">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    最大叶子节点数：通过限制最大叶子节点数，可以防止过拟合
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <!-- 随机森林 -->
            <div class="item-lists" v-show="active =='随机森林'">
                <div class="item-list clearfix">
                    <span class="fl">max_features</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="randomForest.max_features">
                            <option :value="name" v-for="name in randomForest.max_featuresList" :key="name">{{name}}</option>
                        </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    随机森林允许单个决策树使用特征的最大数量。
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">min_samples_split</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="randomForest.min_samples_split" placeholder="输入状态值为2">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    内部节点再划分所需要的最小样本数；这个值限制子数继续划分，如果某节点的样本数少于设定值，则不会继续选择最优特征来进行划分。
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">min_samples_leaf</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="randomForest.min_samples_leaf" placeholder="输入状态值为1">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    叶子节点最少样本数：这个值限制了叶子节点最少的样本数，如果某叶子节点数目小于样本数，则会和兄弟节点一起被剪枝。
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">max_depth</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="randomForest.max_depth" placeholder="默认值为0">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    决策树最大深度：不输入时决策树在建立子树的时候不会限制子树的深度。特征少的时候可以不管这个值，如果模型样本量多。特征也多的情况下，推荐限制这个最大深度。
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <!-- GBDT -->
            <div class="item-lists" v-show="active == 'GBDT'">
                <div class="item-list clearfix">
                    <span class="fl">n_estimators</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="gbtd.n_estimators" placeholder="默认值为100">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    弱学习器的最大迭代次数，或者说最大的弱学习器的个数、一般说n_estimators太小，容易欠拟合，n_estimators太大，又容易过拟合，一般选择一个适中的数值。
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">learing_rate</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="gbtd.learing_rate" placeholder="默认值为1">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    弱学习器的权重缩减系数
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">max_depth</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="gbtd.max_depth" placeholder="默认可以不输入">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                   最大深度:不输入时决策树在建立子树的时候不会限制子树的深度。如果模型样本量多，特征也多的情况下，推荐限制这个最大深度
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">min_samples_split</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="gbtd.min_samples_split" placeholder="默认值为2">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                     内部节点再划分所需要的最小样本数；这个值限制子数继续划分，如果某节点的样本数少于设定值，则不会继续选择最优特征来进行划分。
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <!-- 逻辑回归 -->
            <div class="item-lists" v-show="active == '逻辑回归'">
                <div class="item-list clearfix">
                    <span class="fl">penalty</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="logisticRegression.penalty">
                            <option :value="name" v-for="name in logisticRegression.penaltyList" :key="name">{{name}}</option>
                        </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                正则化选择参数：参数的选择会影响我们损失函数优化算法的选择
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">multi_calss</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="logisticRegression.multi_calss">
                            <option :value="name" v-for="name in logisticRegression.multi_calssList" :key="name">{{name}}</option>
                        </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    分类方式选择参数
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">class_weight</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="logisticRegression.class_weight" placeholder="输入状态值为none">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                类型权重参数：用于标示分类模型中各类类型的权重
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">solver</span>
                    <div class="fl clearfix">
                        <select class="fl" v-model="logisticRegression.solver">
                            <option :value="name" v-for="name in logisticRegression.solverList" :key="name">{{name}}</option>
                        </select>
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    优化算法选择参数：solver参数决定了我们对逻辑回归损失函数的优化方法
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">C</span>
                    <div class="fl clearfix">
                        <input type="text" v-model="logisticRegression.c" class="fl" placeholder="默认值为1.0">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    C为错误术语的惩罚参数，C值越大，对误分类的惩罚越大，当C的值为无穷大的时候，表示全部正确的分类
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <!-- XGBOOTST -->
            <div class="item-lists" v-show="active == 'XGBOOTST'">
                <div class="item-list clearfix">
                    <span class="fl">max_depth</span>
                    <div class="fl clearfix">
                        <input type="text" v-model="xgbootst.max_depth" class="fl" placeholder="">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                树的最大深度：值越大树越大模型越复杂，可以用来防止过拟合
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">min_data_in_leaf</span>
                    <div class="fl clearfix">
                        <input type="text" class="fl" v-model="xgbootst.min_data_in_leaf" placeholder="">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    叶子可能具有的最小记录数：适合过拟合时使用
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">bagging_fraction</span>
                    <div class="fl clearfix">
                        <input type="text" v-model="xgbootst.bagging_fraction" class="fl" placeholder="">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                每次迭代是用的数据比例：用于加快训练速度和减小过拟合。
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">early_stopping_round</span>
                    <div class="fl clearfix">
                        <input type="text" v-model="xgbootst.early_stopping_round" class="fl" placeholder="">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                   早起停止次数，假设为100，验证集的误差迭代到一定程度在100次内不能再继续降低，就停止迭代。
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">lambda</span>
                    <div class="fl clearfix">
                        <input type="text" v-model="xgbootst.lambda" class="fl" placeholder="">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    指定正则化：适用于减少过拟合
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">min_gain_to_split</span>
                    <div class="fl clearfix">
                        <input type="text" v-model="xgbootst.min_gain_to_split" class="fl" placeholder="">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    描述分裂最小的gain；用来控制树的有用分裂。
                            </span>
                        </p>

                    </div>
                </div>
                <div class="item-list clearfix">
                    <span class="fl">max_cat_group</span>
                    <div class="fl clearfix">
                        <input type="text" v-model="xgbootst.max_cat_group" class="fl" placeholder="">
                        <p class="fl pop">
                            <span class="wenhao fl">
                                <i class="icon iconfont icon-qm"></i>
                            </span>
                            <span class="fl help">帮助</span>
                            <span class="border-right"></span>
                            <span class="txt">
                                    在group边界上找到分割点，适用于当特征数量很多时
                            </span>
                        </p>

                    </div>
                </div>
            </div>
            <!-- SVC -->
            <div class="item-lists" v-show="active == 'SVC'">
                <div class="item-list clearfix">
                    <span class="fl">SVC</span>
                </div>
            </div>
            <!-- 贝叶斯 -->
            <div class="item-lists" v-show="active == '贝叶斯'">
                <div class="item-list clearfix">
                    <span class="fl">贝叶斯</span>
                </div>
            </div>
            <!-- K近邻 -->
            <div class="item-lists" v-show="active == 'K近邻'">
                <div class="item-list clearfix">
                    <span class="fl">K近邻</span>
                </div>
            </div>
            <!-- 线性回归 -->
            <div class="item-lists" v-show="active == '线性回归'">
                <div class="item-list clearfix">
                    <span class="fl">线性回归</span>
                </div>
            </div>
            <!-- Kmeans -->
            <div class="item-lists" v-show="active == 'Kmeans'">
                <div class="item-list clearfix">
                    <span class="fl">Kmeans</span>
                </div>
            </div>
            <div class="btn-wrap text-c">
                <button class="btn-save" @click="save">保存</button>
            </div>
        </div>
    </div>

</div>
</template>
<script>

    import ECharts from 'vue-echarts/components/ECharts.vue'

    import chartPieSwitch from '../components/chartPieSwitch'

    import swiperChart from '../components/swiperChart'
    import * as ReqUrl from '../../api/reqUrl'
    import {mapState} from 'vuex'
    export  default {
        data(){
            return {
                training:false,
                pieOne:{
                  value:7,
                  max:10,
                  colors:['rgba(55,153,240,.3)','rgba(55,153,240,1)'],
                  name:"准确度"
                },
                pieTwo:{
                    value:6,
                    max:10,
                    colors:['rgba(128,99,200,.3)','rgba(128,99,200,1)'],
                    name:"运行时间"
                },
                pieThree:{
                    value:6,
                    max:10,
                    colors:['rgba(8,161,170,.3)','rgba(8,161,170,1)'],
                    name:"可理解度"
                },
                echartsLaboratoryOption:{
                    series:[
                        {
                            type: 'pie',
                            clockwise: true, //饼图的扇区是否是顺时针排布
                            minAngle: 2, //最小的扇区角度（0 ~ 360）
                            radius: ["50%", "58%"],
                            center: ["50%", "45%"],
                            avoidLabelOverlap: false,
                            animation:false,
                            color:['#72EEA8','rgba(62,212,128,0.3)'],
                            itemStyle: { //图形样式
                                normal: {
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'center',
                                    formatter: '{value|{d}}%\n{text|{b}}',
                                    rich: {
                                        text: {
                                            color: "#72EEA8",
                                            fontSize: 13,
                                            align: 'center',
                                            verticalAlign: 'middle',
                                            padding: 8
                                        },
                                        value: {
                                            fontSize: 42,
                                            align: 'center',
                                            verticalAlign: 'middle',
                                        },
                                    }
                                },
                                emphasis: {
                                    show: true,
                                }
                            },
                            data: [
                                {
                                    name:"完成进度",
                                    value:85
                                },
                                {
                                    name:"未完成进度",
                                    value:15,
                                    label: {
                                        show:false
                                    },
                                    emphasis:{
                                        label:{
                                            show:false
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            type: 'gauge',
                            radius: '80%',
                            startAngle: '215',
                            endAngle: '-35',
                            center: ["50%", "45%"],
                            splitNumber: 40,
                            pointer: {
                                show: false
                            },
                            detail:{
                                show:false,
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: [
                                        [0, '#CB9EFF'],
                                        [52 / 100, `#CB9EFF`],
                                        [1, 'rgba(164,122,229,0.3)']
                                    ],
                                    width: 0,
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                length: 12,
                                lineStyle: {
                                    color:"auto",
                                    width: 3
                                }
                            },
                            axisLabel: {
                                show: false
                            }
                        },
                        {
                            type: 'gauge',
                            radius: '92%',
                            startAngle: '215',
                            center: ["50%", "45%"],
                            endAngle: '100',
                            splitNumber: 35,
                            pointer: {
                                show: false
                            },
                            detail:{
                                show:false,
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: [
                                        [0, '#CB9EFF'],
                                        [52 / 100, `#CB9EFF`],
                                        [1, 'rgba(164,122,229,0.3)']
                                    ],
                                    width: 0,
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                length: 6,
                                lineStyle: {
                                    color:"auto",
                                    width: 2
                                }
                            },
                            axisLabel: {
                                show: false
                            }
                        },
                        {
                            type: 'gauge',
                            center: ["50%", "45%"],
                            radius: '92%',
                            startAngle: '80',
                            endAngle: '-35',
                            splitNumber: 35,
                            pointer: {
                                show: false
                            },
                            detail:{
                                show:false,
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: [
                                        [0, '#CB9EFF'],
                                        [52 / 100, `#CB9EFF`],
                                        [1, 'rgba(164,122,229,0.3)']
                                    ],
                                    width: 0,
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                length: 6,
                                lineStyle: {
                                    color:"auto",
                                    width: 2
                                }
                            },
                            axisLabel: {
                                show: false
                            }
                        },
                    ]
                },
                echartsBarOption:{
                    grid: {
                        left:5,
                        top:5,
                        right:40,
                        bottom:0,
                        containLabel: true
                    },
                    tooltip: {
                    },
                    xAxis: {
                        show: false,                //是否显示x轴
                        type: 'value'
                    },
                    yAxis: {
                        type: 'category',
                        inverse:true,               //让y轴数据逆向
                        data:['年龄','家族遗传','BMI','吸烟年限','饮酒年限', '职业', '性别','地域'],
                        axisLabel:{
                            color:"#B1C8FE",
                            fontSize:13,
                        }
                    },
                    series: [
                        {
                            name: '数据内框',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 3,
                                    color: 'rgba(0, 160, 233, 1)',
                                }
                            },
                            barWidth: 6,
                            data: [0.91, 0.85, 0.80, 0.77, 0.64,0.61,0.37,0.28]
                        },
                        {
                            name: '外框',
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 3,
                                    color: 'rgba(25,77,133,0.8)' //rgba设置透明度0.14
                                }
                            },
                            label:{
                              show:true,
                              position:"right",
                              fontSize:14,
                              formatter:function(params){
                                  return params.data.value1;
                              },
                              color:'rgba(43, 202, 248, 1)'
                            },
                            barGap: '-100%',
                            z: 0,
                            barWidth: 6,
                            data: [
                                {
                                    value:1,
                                    value1:0.91
                                },
                                {
                                    value:1,
                                    value1:0.85
                                },
                                {
                                    value:1,
                                    value1:0.80
                                },
                                {
                                    value:1,
                                    value1:0.77
                                },
                                {
                                    value:1,
                                    value1:0.64
                                },
                                {
                                    value:1,
                                    value1:0.61
                                },
                                {
                                    value:1,
                                    value1:0.37
                                },
                                {
                                    value:1,
                                    value1:0.28
                                },
                            ]
                        }
                    ]
                },
                echartsLineOption1:{
                    legend:{
                        textStyle:{
                            color:"#FFF"
                        }
                    },
                    grid: {
                        left:5,
                        top:5,
                        right:5,
                        bottom:20,
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
                                    borderColor: "#72EEA8",  // 点边线的颜色
                                    lineStyle: {
                                        color: "#72EEA8"
                                    }
                                }
                            },
                            symbolSize: 6,
                            data:  [
                                [0,0],
                                [2.5,8],
                                [5,9],
                                [7.5,9],
                                [10,9],
                                [12.5,9],
                                [15,9],
                                [17.5,9],
                                [20,9],
                                [22.5,9],
                                [25,9],
                                [27.5,9],
                                [30,9],
                                [32.5,9],
                                [35,9],
                                [37.5,9],
                                [40,9],
                                [42.5,9],
                                [45,9],
                                [47.5,9],
                                [50,9],
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
                        left:5,
                        top:5,
                        right:5,
                        bottom:20,
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
                                    borderColor: "#BC89F9",  // 点边线的颜色
                                    lineStyle: {
                                        color: "#BC89F9"
                                    }
                                }
                            },
                            symbolSize: 6,
                            data:  [

                                [0,0],
                                [0.05,0.8],
                                [0.1,0.9],
                                [0.15,0.9],
                                [0.25,0.9],
                                [0.30,0.9],
                                [0.35,0.9],
                                [0.40,0.9],
                                [0.45,0.9],
                                [0.5,0.9],
                                [0.55,0.9],
                                [0.60,0.9],
                                [0.65,0.9],
                                [0.70,0.9],
                                [0.75,0.9],
                                [0.80,0.9],
                                [0.85,0.9],
                                [0.90,0.9],
                                [0.95,0.9],
                                [1,0.9],

                            ]
                        }
                    ]
                },
                echartCPUOptions:{
                    grid: {
                        left: '0',
                        right: '0',
                        bottom: '10',
                        top: '7%',
                        containLabel: true,
                        z: 22
                    },
                    xAxis: [{
                        type: 'category',
                        gridIndex: 0,
                        data: [
                            '01', '02', '03', '04', '05', '06', '07', '08','09', '10',
                            '11', '12', '13', '14', '15', '16', '17', '18','19', '20',
                            '21', '22', '23', '24', '25', '26', '27', '28','29', '30',
                            '31', '32', '33', '34', '35', '36', '37', '38','39', '40',
                            '41', '42', '43', '44', '45', '46', '47', '48','49', '50',
                        ],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#19347b'

                            }
                        },
                        axisLabel: {
                            show:false
                        }
                    }],
                    yAxis: [{
                        show:false,
                        type: 'value',
                        //   name: "单位:户",
                        nameTextStyle: {
                            color: "rgb(170,170,170)"
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: true
                        },
                        axisLabel: {
                            sow:false
                        }
                        },
                    ],
                    series: [{
                        name: 'CPU运行情况',
                        type: 'bar',
                        legendHoverLink: true,
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        barCategoryGap:3,
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 0, 0, 0],
                               // color: "rgba(41,206,149,1)",
                                color: new ECharts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: 'rgba(41,206,149,1)'},
                                        {offset: 1, color: 'rgba(31,123,231,1)'}
                                    ]
                                )
                            }
                        },
                        data: [
                            20, 69, 56, 34, 45, 56, 67, 67, 87, 45,
                            20, 69, 56, 34, 45, 56, 67, 67, 87, 45,
                            20, 69, 56, 34, 45, 56, 67, 67, 87, 45,
                            20, 69, 56, 34, 45, 56, 67, 67, 87, 45,
                            20, 69, 56, 34, 45, 56, 67, 67, 87, 45
                        ],
                        zlevel: 11
                    },
                    ]
                },
                active:'',
                tabList:[
                        {
                            name:"支持向量机"
                        },
                        {
                            name:"决策树"
                        },
                        {
                            name:"随机森林"
                        },
                        {
                            name:"GBDT"
                        },
                        {
                            name:'逻辑回归'
                        },
                        {
                            name:'XGBOOTST'
                        }
                    ],
                // 超参参数
                // SUR
                svr:{
                    c:'',
                    kemel:'',
                    kemelList:[
                        '线性核（linear）',
                        '多项式核（poly）',
                        '径向基核（rbf）',
                        'sigmoid核'
                    ],
                    degree:'',
                    gamma:'',
                    gammaList:[
                        'poly',
                        'rbf',
                        'sigmoid',
                        'auto'
                    ],
                    class:'',
                    classList:[
                        'poly',
                        'rbf',
                        'sigmoid'
                    ]
                },
                // 决策树
                decisionTree:{
                    criterion:'',
                    criterionList:[
                        'gini',
                        'ertropy'
                    ],
                    splitter:'',
                    splitterList:[
                        'best',
                        'random'
                    ],
                    max_depth:'',
                    min_impurity_decrease:'',
                    max_leaf_nodes:''
                },
                // 随机森林
                randomForest:{
                    max_features:'',
                    max_featuresList:[
                        'sqrt',
                        '0.2',
                        '不填'
                    ],
                    min_samples_split:'',
                    min_sample_leaf:'',
                    max_depth:''
                },
                // GBNT
                gbtd:{
                    n_estimators:'',
                    learing_rate:'',
                    max_depth:'',
                    min_samples_split:''
                },
                // 逻辑回归
                logisticRegression:{
                    penalty:'',
                    penaltyList:[
                        'l1',
                        'l2',
                        'none',
                        'elasticnet'
                    ],
                    multi_calss:'',
                    multi_calssList:[
                        'ovr',
                        'multinomial'
                    ],
                    class_weight:'',
                    solver:'',
                    solverList:[
                        'newton-cg',
                        'lbfgs',
                        'liblinear',
                        'sag',
                        'saga'
                    ],
                    c:''
                },
                //XGBOOTST
                xgbootst:{
                    max_depth:'',
                    min_data_in_leaf:'',
                    bagging_fraction:'',
                    early_stopping_round:'',
                    lambda:'',
                    min_gain_to_split:'',
                    max_cat_group:''
                },
                isStart:false,
                selectAlgorithm:[],//选择的算法
                selectMiid:null,
                selectTaid:null
                
            }
        },
        computed:{
            ...mapState(['modelItem'])
        },
        components:{
            chart:ECharts,
            chartPieSwitch,
            swiperChart:swiperChart,
        },
        mounted(){
            this.init();
            
            // this.selectAlgorithm  = this.modelItem.mxcs.algorithm
            // console.log(this.selectAlgorithm)
            this.active=this.tabList[0]["name"];
            
        },
        methods:{
            trainingHandler:function(){
                this.training=!this.training
            },
            switchChartPieChangeOne:function(value){
                this.pieOne.value=value
            },
            switchChartPieChangeTwo:function(value){
                this.pieTwo.value=value
            },
            switchChartPieChangeThree:function(value){
                this.pieThree.value=value
            },
            selected(name){
                this.active = name;
            },
            closeDialog(){
                layer.closeAll();
                this.chooseTypeTxt ='上传数据集'
            },
            opendailog(){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['860px', '750px'], //宽高
                    content: $('#alert-box-shujujiTab'),
                });
            },
            init(){
                $("#alert-box-shujujiTab .pop").hover(function() {
                    var positionTop = $(this).position().top;
                    var txtHeight = $(this).find(".txt").height();
                    var alertBoxHeight = $("#alert-box-shujujiTab").height();
                    var dic=document.getElementById("alert-box-shujujiTab").scrollHeight-document.getElementById("alert-box-shujujiTab").clientHeight;
                    if (positionTop + txtHeight > alertBoxHeight) {
                        $(this).find(".txt").css({
                            top: -1*dic
                        })
                    }else{
                        $(this).find(".txt").css({
                            top: 0
                        })
                    }
                })


            },
            save(){
                if(this.active == 'SVR'){
                    console.log(this.svr,'SVR')
                } else if(this.active == '决策树'){
                    console.log(this.decisionTree,'决策树')
                } else if(this.active == '随机森林'){
                    console.log(this.randomForest,'随机森林')
                } else if(this.active == 'GBTD'){
                    console.log(this.gbtd,'GBTD')
                } else if(this.active == '逻辑回归'){
                    console.log(this.logisticRegression,'逻辑回归')
                } else if(this.active == 'XGBOOTST'){
                    console.log(this.xgbootst,'XGBOOTST')
                }
                this.closeDialog()
            },
            filterSelect(){
                // 判断选择的算法
                var arr=[]
                this.selectAlgorithm.forEach(item=>{
                    var obj ={}
                    // 分类模型
                    if(item == "SVC"){
                        obj.name = "支持向量机"
                        arr.push(obj)
                    } else if(item == "LR"){
                        obj.name = "逻辑回归"
                        arr.push(obj)
                    }  else if(item == "CTTREE"){
                        obj.name = "决策树"
                        arr.push(obj)
                    } else if(item == "GBDC"){
                        obj.name = "GBDT"
                        arr.push(obj)
                    } else if(item == "BYSY"){
                        obj.name = "贝叶斯"
                        arr.push(obj)
                    } else if(item == "KNN"){
                        obj.name = "K近邻"
                        arr.push(obj)
                    } else if(item == "XGBC"){
                        obj.name = "XGBOOTST"
                        arr.push(obj)
                    } else if(item == "RDMC"){
                        obj.name = "随机森林"
                        arr.push(obj)
                    } else if(item == "SVR"){
                        // 回归
                        obj.name = "支持向量机"
                        arr.push(obj)
                    } else if(item == "RVTREE"){
                        obj.name = "决策树"
                        arr.push(obj)
                    } else if(item == "GBDR"){
                        obj.name = "GBDT"
                        arr.push(obj)
                    } else if(item == "LINR"){
                        obj.name = "线性回归"
                        arr.push(obj)
                    } else if(item == "XGBR"){
                        obj.name = "XGBOOTST"
                        arr.push(obj)
                    } else if(item == "RDMR"){
                        obj.name = "随机森林"
                        arr.push(obj)
                    } else if(item == "Kmeans"){
                        // 聚类
                        obj.name = "Kmeans"
                        arr.push(obj)
                    }
                })
                if(arr[0]){
                    this.tabList=arr
                    this.active=arr[0]["name"]
                    console.log(arr[0])
                } else {
                    this.tabList=[
                        {
                            name:"支持向量机"
                        },
                        {
                            name:"决策树"
                        },
                        {
                            name:"随机森林"
                        },
                        {
                            name:"GBDT"
                        },
                        {
                            name:'逻辑回归'
                        },
                        {
                            name:'XGBOOTST'
                        }
                    ]
                }
            },
            startModel(){
                
                var that = this
                let url=`${ReqUrl.starTrain}`
                axios({
                        url: url,
                        method: 'get',
                        params:{miId:that.selectMiid},
                    })
                    .then(res=>{
                        // that.$message({
                        //     message: res.data,
                        //     type: 'success'
                        // });
                        that.isStart = true
                    })
            },
            findMis(){
                var that = this
                let url=`${ReqUrl.findMis}`
                axios({
                        url: url,
                        method: 'get',
                        params:{miId:that.selectMiid},
                    })
                    .then(res=>{
                        that.selectAlgorithm = JSON.parse(res.data.mxcs).algorithm
                        console.log(that.selectAlgorithm)
                        if(that.selectAlgorithm[0]){
                            that.filterSelect()
                        }
                    })
            }
        },
        created() {
            this.selectMiid = this.$route.query.miId
            this.selectTaid = this.$route.query.taId
            if(this.selectMiid){
                this.findMis()
            }
            
        },
    }
</script>
<style scoped lang="less">
    .page-model{
        .model-box{
            height:245px;
            background:linear-gradient(130deg,rgba(44,53,108,1),rgba(30,33,78,1));
            border:1px solid rgba(80,91,161,1);
            border-radius:2px;
            margin-bottom: 20px;
            .model-header{
                position: relative;
                height: 50px;
                line-height: 50px;
                padding: 0 20px;
                .name{
                    font-size: 14px;
                    color: #ffff;
                    .round{
                        display: inline-block;
                        width:8px;
                        height:8px;
                        background:rgba(108,236,77,1);
                        border-radius:50%;
                        margin-right: 10px;
                    }
                }
                .right-tool{
                    position: absolute;
                    right: 20px;
                    top:10px;
                    text-align: right;
                    line-height: normal;
                    .setting-btn{
                        display: inline-block;
                        vertical-align: middle;
                        line-height: 26px;
                        width: 98px;
                        height: 26px;
                        text-align: center;
                        border-radius: 13px;
                        background:linear-gradient(90deg,rgba(1,179,151,1),rgba(10,157,174,1));
                        color: #fff;
                        &.disable{
                            background:rgba(90,95,130,.3);
                            color: rgba(255,255,255,.3);
                        }
                    }
                    .number{
                        color: #298DF5;
                        font-size: 22px;
                        line-height: 1.1;
                    }
                    .model-title{
                        font-size: 12px;
                        color: #666666;
                        line-height: 1.1;
                    }
                }
            }
            .model-content{
                padding: 0 20px;
            }
            .chart-box{
                height: 192px !important;
            }
        }
        .dataset-list{
            display: flex;
            flex-wrap: wrap;
            margin-top: -4px;
            >li{
                width: 50%;
                font-size: 14px;
                color: #fff;
                height: 30px;
                line-height: 30px;
                white-space: nowrap;
                .label-text{
                    padding-left: 20px;
                    color: #B1C8FE;
                    font-size: 14px;
                }
                &.long{
                    width: 60%;
                }
                &.short{
                    width: 40%;
                }
            }
        }
        .laboratory-box{
            position: relative;
            .info-p{
                .icon{
                    display: inline-block;
                    vertical-align: middle;
                    width: 16px;
                    height: 16px;
                    background: url('../../assets/images/dark/icon-state-ok.png') no-repeat;
                    background-size: 100% 100%;
                    margin-right: 10px;
                    margin-top: -3px;
                }
                color: #AAC0F6;
                font-size: 14px;
                text-align: center;
                height: 30px;
                line-height: 30px;
                margin-bottom: 20px;
            }
            .laboratory-tool{
                display: block;
                margin-bottom: 18px;
                height:26px;
                line-height: 26px;
                background:rgba(2,177,154,1);
                border-radius:13px;
                text-align: center;
                color: #fff;
                &:hover{
                    opacity: 0.9;
                }
                &.primary{
                    background: #09A0AA;
                }
            }
        }
        .laboratory-chart-box{
            position: relative;
            .chart-box{
                z-index: 2;
            }
            .start-btn{
                position: absolute;
                left: 50%;
                bottom:10px;
                margin-left: -25px;
                width:50px;
                height:26px;
                line-height: 26px;
                text-align: center;
                background:linear-gradient(90deg,rgba(1,179,151,0.4),rgba(10,157,174,0.4));
                border-radius:13px;
                color: #fff;
                font-size: 13px;
                z-index: 10;
                &.active{
                    background:linear-gradient(90deg,rgba(1,179,151,1),rgba(10,157,174,1));
                }
            }
            .label-name{
                position: absolute;
                top:-3px;
                color: #B1C8FE;
                font-size: 13px;
                z-index: 10;
                &.left{
                    right:70%;
                }
                &.right{
                    left:70%;
                }
            }
            .label-footer{
                position: absolute;
                width: 111px;
                height: 21px;
                z-index: 10;
                bottom:30px;
                .name{
                    font-size: 13px;
                    color: #f0f1f4;
                    height: 24px;
                    line-height: 24px;
                    margin-top: -4px;
                }
                .number{
                    font-size: 13px;
                    color: #72eea8;
                    height: 24px;
                    line-height: 24px;
                }
                &.left{
                    text-align: left;
                    right:62%;
                    background: url("../../assets/images/dark/axis-lable-laboratory-left.png") no-repeat;
                    background-size: 100% 100%;
                }
                &.right{
                    left:62%;
                    text-align: right;
                    background: url("../../assets/images/dark/axis-lable-laboratory-right.png") no-repeat;
                    background-size: 100% 100%;
                }
            }
        }
        .major-setup-box{
            .short{
                height: 90px !important;
                min-height: 90px !important;
                .name{
                    margin-top: 0 !important;
                }
            }
            .cpu-chart{
                padding-top: 10px;
                .cpu-chart-title{
                    position: relative;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    font-size: 12px;
                    color: #AAC0F5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .lines{
                        display: inline-block;
                        width:47px;
                        height:1px;
                        opacity:0.5;
                        &.left{
                            background: linear-gradient(to right,  rgba(47,188,246,0) 0%,rgba(47,188,246,1) 64%,rgba(47,188,246,1) 100%);
                        }
                        &.right{
                            background: linear-gradient(to right,  rgba(47,188,246,1) 0%,rgba(47,188,246,1) 64%,rgba(47,188,246,0) 100%);
                        }
                    }
                    .name{
                        padding: 0 10px;
                    }
                }
                .cpu-chart-box{
                    height: 62px;
                    .echarts{
                        height: 100%;
                    }
                }
            }
        }
    }

</style>
