<template>
    <div class="wrapbody">


        <section id="main">


            <div class="breadpage">
                <span class="light_bread"><a href="">数据集</a></span>
                <span class="dark_bread"> > </span>
                <span class="dark_bread"><a href="">慢性病数据研究</a></span>
            </div>

            <div class="keshihua-main shujuji-main">

                <div class="search-wrap clearfix">
                    <span class="s1 fl">数据集名称：</span>
                    <input type="text" class="fl input input1" />

                    <span class="s1 fl">时间选择：</span>
                    <input-time-pick @done="changeStartTime" class-name-user="aaa"></input-time-pick>

                    <span class="fl line">-</span>

                    <input-time-pick @done="changeEndTime"></input-time-pick>

                    <a class="search-btn">查询<i class="icon"></i></a>

                    <div class="chooseType">
                        <p @click="chooseType"><span>{{chooseTypeTxt}}</span> <i class="icon up-icon"></i></p>
                        <div v-show="isShowChooseType">
                            <ul>
                                <li @click="chooseThis($event)">以文件方式</li>
                                <li @click="chooseThis($event)">以数据库方式上传</li>
                                <li @click="chooseThis($event)">以大数据环境上传</li>
                                <li @click="chooseThis($event)">云方式上传</li>
                            </ul>
                        </div>
                    </div>

                </div>


                <div class="table">
                    <table class="keshihua-table shujuji-table" id="tableContent">
                        <thead>
                            <tr>
                                <th></th>
                                <th>数据集名称</th>
                                <th>数据集大小</th>
                                <th>训练情况</th>
                                <th>最佳模型</th>
                                <th>操作</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="evenTr">
                                <td><span class="pull-icon down"></span></td>
                                <td>medcine</td>
                                <td>756kb</td>
                                <td class="notStart">未开始</td>
                                <td>-</td>
                                <td class="handle">
                                    <a class="look" @click="dialogTab">查看</a>
                                    <a class="pretreatment" @click="dialogPretreatment">预处理</a>
                                    <a class="del" title="删除" @click="dialogDelete"></a>
                                </td>
                            </tr>
                            <tr data-control="1" class="oddTr">
                                
                                <td><span class="pull-icon down"></span></td>
                                <td>medcine</td>
                                <td>756kb</td>
                                <td class="finished">已完成</td>
                                <td>动态规划</td>
                                <td class="handle">
                                    <a class="look">查看</a>
                                    <a class="pretreatment">预处理</a>
                                    <a class="del" title="删除" @click="dialogDelete"></a>
                                </td>
                            </tr>

                            
                            <tr name="1" class="sonTr">
                                
                                <td>medcine</td>
                                <td>42kb</td>
                                <td class="pause">暂停中</td>
                                <td>决策树</td>
                                <td class="handle">
                                    <a class="icon icon1" title="查看数据"></a>
                                    <a class="icon icon2" title="数据可视化"></a>
                                    <a class="icon icon3" title="特征工程" @click="dialogtezhenggongcheng"></a>
                                    <a class="icon icon4" title="开始训练" @click="dialogxunliangmoxing"></a>
                                    <a class="icon icon5 shanchu" title="删除" @click="dialogDeleteFB"></a>
                                </td>
                            </tr>

                            <tr name="1" class="sonTr">
                                
                                <td>medcine</td>
                                <td>756kb</td>
                                <td class="unfininshed">未完成</td>
                                <td>-</td>
                                <td class="handle">
                                    <a class="icon icon1" title="查看数据"></a>
                                    <a class="icon icon2" title="数据可视化"></a>
                                    <a class="icon icon3" title="特征工程"></a>
                                    <a class="icon icon4" title="开始训练"></a>
                                    <a class="icon icon5 shanchu" title="删除" @click="dialogDeleteFB"></a>
                                </td>
                            </tr>
                            

                            <tr class="evenTr">
                                <td><span class="pull-icon down"></span></td>
                                <td>medcine_c</td>
                                <td>76kb</td>
                                <td class="unfininshed">未完成</td>
                                <td>动态规划</td>
                                <td class="handle">
                                    <a class="look">查看</a>
                                    <a class="pretreatment">预处理</a>
                                    <a class="del" @click="dialogDelete"></a>
                                </td>
                            </tr>

                            <tr data-control="2" class="oddTr">
                                <td><span class="pull-icon down"></span></td>
                                <td>medcine_c</td>
                                <td>76kb</td>
                                <td class="unfininshed">未完成</td>
                                <td>动态规划</td>
                                <td class="handle">
                                    <a class="look">查看</a>
                                    <a class="pretreatment">预处理</a>
                                    <a class="del" title="删除" @click="dialogDelete"></a>
                                </td>
                            </tr>

                            <tr name="2" class="sonTr">
                                <td></td>
                                <td>medcine</td>
                                <td>42kb</td>
                                <td class="pause">暂停中</td>

                                <td>决策树</td>
                                <td class="handle">
                                    <a class="icon icon1" title="查看数据"></a>
                                    <a class="icon icon2" title="数据可视化"></a>
                                    <a class="icon icon3" title="特征工程"></a>
                                    <a class="icon icon4" title="开始训练"></a>
                                    <a class="icon icon5 shanchu" title="删除" @click="dialogDeleteFB"></a>
                                </td>
                            </tr>

                        

                        </tbody>
                    </table>
                </div>



            </div>
        </section>




        <!-- 原始数据集删除 -->
        <div class="alert-box" id="alert-box-del">
            <div class="title text-c">
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <p class="content-title">确定要删除此原始数据集？</p>
                <div class="btn-wrap clearfix">
                    <button class="btn cancelBtn fl" @click="closeDialog">取消</button>
                    <button class="btn okBtn fr" @click="closeDialog">确认</button>
                </div>
            </div>
        </div>

        <!-- 副本数据集删除 -->
        <div class="alert-box" id="alert-box-del-fb">
            <div class="title text-c">
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <p class="content-title">确定要删除此副本数据集？</p>
                <div class="btn-wrap clearfix">
                    <button class="btn cancelBtn fl" @click="closeDialog">取消</button>
                    <button class="btn okBtn fr" @click="closeDialog">确认</button>
                </div>
            </div>
        </div>
        <!-- 数据预处理 -->
        <div class="alert-box" id="alert-box-shujuyuchuli">
            <div class="title text-c">
                数据预处理1
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <div class="content-item">

                    <div class="content-item1 clearfix">
                        <p class="name">模型类型：</p>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>分类模型</span></label>
                        </div>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>归类模型</span></label>
                        </div>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>聚类模型</span></label>
                        </div>
                    </div>


                    <div class="content-item2 clearfix">
                        <p class="name">目标列：</p>
                        <div class="select-wrap clearfix">
                            <div class="select-wrap-half fl">
                                <p>目标列</p>
                                <div class="select">
                                    <select>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>

                            <div class="select-wrap-half fl">
                                <p>分组列</p>
                                <div class="select">
                                    <select>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="content-item1 content-item3 clearfix">
                        <p class="name">缺失值填充：</p>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>调用该列平均值去填充该缺失值</span></label>
                        </div>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>调用该列中位位数去填充该缺</span></label>
                        </div>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>调用该列众数去填充该缺失值</span></label>
                        </div>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>调用前一个非缺失值去填充该缺失值</span></label>
                        </div>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>调用后一个非缺失值去填充该缺失值</span></label>
                        </div>
                        <div class="choose-wrap">
                            <label><input type="checkbox"><i class="icon"></i><span>输入自定义值定义去填充缺失值</span></label>
                        </div>
                    </div>



                </div>

                <div class="btn-wrap">
                    <button class="more" @click="closeDialog">调用更多配方</button>
                    <button class="dev" @click="closeDialog">生成副本</button>
                </div>
            </div>
        </div>
        <!-- tab切换 -->
        <div class="alert-box" id="alert-box-shujujiTab">
            <div class="title text-c">
                <ul class="tab-nav clearfix">
                    <li v-for="(item,index) in tabList" @click="selected(item.name)" :class="{active : active == item.name}" :key="index"><a>{{item.name}}</a></li>
                </ul>
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <p class="big-title">参考设置</p>
                <div class="item-lists">
                    <div class="item-list clearfix">
                        <span class="fl">criterion</span>
                        <div class="fl clearfix">
                            <select class="fl">
                                <option value=""></option>
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
                            <select class="fl">
                                    <option value=""></option>
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
                        <span class="fl">max_depth</span>
                        <div class="fl clearfix">
                            <input type="text" class="fl" placeholder="输入状态值为none">
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
                        <span class="fl">min_impurity_decrease</span>
                        <div class="fl clearfix">
                            <input type="text" class="fl" placeholder="默认值为0">
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
                        <span class="fl">man_leaf_nodes</span>
                        <div class="fl clearfix">
                            <input type="text" class="fl" placeholder="默认值为none">
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

                </div>

                <div class="btn-wrap text-c">
                    <button class="btn-save" @click="closeDialog">保存</button>
                </div>
            </div>
        </div>
        <!-- belle新增弹框 -->
        <!-- 上传文件弹框 -->
        <div class="alert-box" id="alert-box-uploadFiles">
            <div class="title text-c">
                上传文件
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <div class="upload">
                    <el-upload
                        ref="upload"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-remove="handleRemove"
                        :limit="3"
                        :before-upload="beforeUpload"
                        :on-success="uploadSuccess"
                        :on-error="uploadError"
                        :show-file-list="false"
                        :auto-upload="false"
                        >
                        <div></div>
                        <input type="text" class="input" placeholder="只上传原始数据集的csv、 xls、xlsx格式" v-model="filesName" disabled="disabled">
                        <!-- <el-button size="small" type="primary">点击上传</el-button> -->
                    </el-upload>
                </div>
                <div class="btn-wrap clearfix">
                    <button class="btn cancelBtn fl" @click="closeDialog">返回</button>
                    <button class="btn okBtn fr" @click="submitUpload">上传</button>
                </div>
            </div>
        </div>
        <!-- 数据库上传弹框 -->
        <div class="alert-box" id="alert-box-sjkLink">
            <div class="title text-c">
                连接数据库
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <div class="content">
                    <div><label for="linkName">连接名</label><input type="text " v-model="linkName" name="linkName"></div>
                    <div><label for="ipAddress">主机名或IP地址</label><input type="text " v-model="ipAddress" name="ipAddress"></div>
                    <div><label for="port">端口</label><input type="text " v-model="port"  name="port"></div>
                    <div><label for="userName">用户名</label><input type="text " v-model="userName" name="userName"></div>
                    <div><label for="password">密码</label><input type="text " v-model="password" name="password"></div>
                    
                </div>

                <div class="btn-wrap">
                    <!-- <button class="more" @click="closeDialog">调用更多配方</button> -->
                    <button class="btn" @click="closesjkDialog">测试并进行下一步</button>
                </div>
            </div>
        </div>
        <!-- 选择数据上传 -->
        <div class="alert-box" id="alert-box-selectSjk">
            <div class="title text-c">
                选择上传数据
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <div class="content">
                    <div class="item"><label for="linkName">选择库名</label>
                        <select>
                            <option value=""></option>
                        </select>
                    </div>
                    <div class="item"><label for="ipAddress">选择表名字</label>
                        <select>
                            <option value=""></option>
                        </select>
                    </div>
                    <div class="text item">选择上传字段并确认字段类型</div>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                        type="selection"
                        width="55">
                        </el-table-column>
                        <el-table-column
                        label="日期"
                        width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                        </el-table-column>
                        <el-table-column
                        prop="address"
                        label="地址"
                        show-overflow-tooltip>
                        </el-table-column>
                    </el-table>
                    
                </div>

                <div class="btn-wrap">
                    <button class="btn" @click="closesSelectsjk">下一步</button>
                </div>
            </div>
        </div>
        <!-- 数据集名 -->
        <div class="alert-box" id="alert-box-sjjName">
            <!-- <div class="title text-c">
                数据集名
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div> -->
            <div class="content alert-box-content">
                <div class="text">数据集名</div>
                <input type="text" v-model='sjjName'>
                <div class="btn-wrap clearfix">
                    <button class="btn okBtn fr" @click="closeDialog">确定并上传</button>
                </div>
            </div>
        </div>
        <!-- 模型驯良设置 -->
        <div class="alert-box" id="alert-box-xunliangmoxing">
            <div class="title text-c">
                模型驯良设置
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <div class="item-lists">
                    <div class="item-list clearfix">
                        <span class="fl name">选择拆分比例</span>
                        <input type="text" class="fl input" placeholder="请输入训练集与测试集的拆分比例，如：0.75">
                    </div>
                    <div class="item-list clearfix">
                        <span class="fl name">添加随机种子</span>
                        <select class="fl select"></select>
                    </div>
                    <div class="item-list clearfix">
                        <span class="fl name">选择抽样比例</span>
                        <input type="text" class="fl input" placeholder="请输入抽样比例，如：0.5">
                    </div>

                    <p class="t">
                        <span class="light">选择算法：</span>(可选择多种选择算法添加至模型训练中)
                    </p>

                    <div class="item-list clearfix">
                        <span class="fl name">选择需要拆分的列</span>
                        <div class="form-wrap fl clearfix">
                            <select class="fl select"></select>
                            <span class="icon add">+</span>
                        </div>
                        
                    </div>
                    <div class="list">
                        <div class="item-list clearfix">
                            <span class="fl name">拆分列数</span>
                            <div class="form-wrap fl clearfix">
                            <input type="text" class="fl input" placeholder="请输入拆分列数">
                            <span class="icon minus">-</span>
                            </div>
                        </div>
                    </div>
                    


                </div>

                
                <div class="btn-wrap text-c">
                    <button class="btn esc" @click="closeDialog">退出</button>
                    <button class="btn begin" @click="closeDialog">开始训练</button>
                </div>
            </div>
        </div>




    <!-- 特征工程 -->
        <div class="alert-box" id="alert-box-tezhenggongcheng">
            <div class="arrow arrow-left" @click="tezhenggongcheng1Fn()"></div>
            <div class="arrow arrow-right" @click="tezhenggongcheng2Fn()"></div>
            <div id="alert-box-tezhenggongcheng1" v-show="tezhenggongcheng1">
                <div class="title text-c">
                    特征工程1
                    <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
                </div>
                <div class="content alert-box-content">
                    <div class="item-lists">
                        <div class="item-list clearfix">
                            <span class="fl name">选择剔除类<b class="sm">(可多选)</b></span>
                            <select class="fl select"></select>
                        </div>

                        <p class="t">
                            <span class="light">特称组合：</span>
                        </p>
    

                        <div class="item-list clearfix">
                            <span class="fl name">选择需要合并的列</span>
                            <div class="form-wrap fl clearfix">
                                <select class="fl select"></select>
                                <span class="icon add">+</span>
                            </div>
                        </div>
                        <div class="item-list clearfix">
                            <span class="fl name">合并列名称</span>
                            <input class="fl input" placeholder="请输入合并列的名称" />
                        </div>

                        <p class="t">
                            <span class="light">特征拆分：</span>
                        </p>

                        <div class="item-list clearfix">
                            <span class="fl name">选择需要拆分的列</span>
                            <div class="form-wrap fl clearfix">
                                <select class="fl select"></select>
                                <span class="icon add">+</span>
                            </div>
                        </div>

                        <div class="list">
                            <div class="item-list clearfix">
                                <span class="fl name">拆分列数</span>
                                <div class="form-wrap fl clearfix">
                                <input type="text" class="fl input" placeholder="请输入拆分列数">
                                <span class="icon minus">-</span>
                                </div>
                            </div>
                        
                        </div>
                        

                    </div>
                    
                    <div class="btn-wrap text-c">
                        <button class="btn begin" @click="closeDialog">调用更多配方</button>
                    </div>
                </div>
            </div>


            <div id="alert-box-tezhenggongcheng2" v-show="tezhenggongcheng2">
                <div class="title text-c">
                    特征工程2
                    <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
                </div>
                <div class="content alert-box-content">
                    <div class="item-lists">

                        <p class="t">
                            <span class="light">线性版本分析：</span>
                        </p>

                        <div class="item-list clearfix">
                            <span class="fl name">降维算法</span>
                            <select class="fl select"></select>
                        </div>
                        <div class="item-list clearfix">
                            <span class="fl name">正则化</span>
                            <select class="fl select"></select>
                        </div>
                        <div class="item-list clearfix">
                            <span class="fl name">降维数</span>
                            <input class="fl input" placeholder="请输入LDA降维时降到的维数" />
                        </div>

                        <p class="t">
                            <span class="light">主成分分析：</span>
                        </p>
                        <div class="item-list clearfix">
                            <span class="fl name">主成分个数</span>
                            <input class="fl input" placeholder="请输入拆分的列数" />
                        </div>
                        <div class="item-list clearfix">
                            <span class="fl name">白化</span>
                            <select class="fl select"></select>
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
                    
                    <div class="btn-wrap text-c">
                        <button class="btn esc" @click="closeDialog">调用更多配方</button>
                        <button class="btn begin" @click="closeDialog">保存</button>
                    </div>
                </div>
            </div>
        </div>
        


        
    


    </div>
</template>

<script>
    let dialogSjkLayer,dialogSelectsjk
    import inputTimePick from '../components/inputTimePick'
    export default  {
        data(){
            return {
                startTime:"",
                endTime:"",
                chooseTypeTxt:"上传数据集",
                isShowChooseType:false,
                tezhenggongcheng1:true,
                tezhenggongcheng2:false,
                tezhenggongcheng:true,

                tabList:[
                    {
                        name:"SVR"
                    },
                    {
                        name:"决策树"
                    },
                    {
                        name:"随机森林"
                    },
                    {
                        name:"GBTD"
                    }
                ],
                active:"",
                 doUpload:'/api/up/file',
                 pppss:{
                    srid:''
                },
                fileList:[],
                filesName:'',
                linkName:'',
                ipAddress:'',
                port:'',
                userName:'',
                password:'',
                tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: [],
                sjjName:''
 
            }
        },
        computed:{
            
        },
        components:{inputTimePick},
        mounted(){
            this.init();
            this.active=this.tabList[1]["name"];
        },
        methods:{
            tezhenggongcheng1Fn(){
                this.tezhenggongcheng1=true;
                this.tezhenggongcheng2=false;
            },
            tezhenggongcheng2Fn(){
                this.tezhenggongcheng2=true;
                this.tezhenggongcheng1=false;
            },
            dialogtezhenggongcheng(){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['630px', "512px"], //宽高
                    content: $('#alert-box-tezhenggongcheng'),
                });
            },
            dialogxunliangmoxing(){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['600px', "auto"], //宽高
                    content: $('#alert-box-xunliangmoxing'),
                });
            },

            init(){
                $("#tableContent tr[name]").hide();
                $("#tableContent tbody .pull-icon").on("click", function() {
                    var obj = $(this).parent();
                    var control = obj.parent().attr('data-control');
                    var subChildren = $("#tableContent tr[name=" + control + "]");
                    if (subChildren) {
                        var span = obj.find("span").hasClass("up");
                        if (!span) {
                            obj.find("span").addClass("up").removeClass("down");
                            subChildren.show();
                            subChildren.eq(0).prepend("<td></td>")
                            subChildren.eq(0).find("td").eq(0).attr("rowspan", subChildren.length)
                        } else {
                            obj.find("span").addClass("down").removeClass("up");
                            subChildren.hide();
                            subChildren.eq(0).children().eq(0).remove();
                        }
                    } else {
                        obj.parent().find("td").attr("rowspan", 1);
                    }
                });


                $(".pop").hover(function() {
                    var positionTop = $(this).position().top;
                    var txtHeight = $(this).find(".txt").height();
                    var alertBoxHeight = $("#alert-box-shujuyuchuli").height();
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
            selected(name){
                this.active = name;
            },
            dialogTab(){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['860px', 1000], //宽高
                    content: $('#alert-box-shujujiTab'),
                });
            },
            dialogPretreatment(){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['860px', 1000], //宽高
                    content: $('#alert-box-shujuyuchuli'),
                });
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
            dialogDeleteFB(id){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['422px', 1000], //宽高
                    content: $('#alert-box-del-fb'),
                });
            },
            closeDialog(){
                layer.closeAll();
            },
            chooseType(){
                this.isShowChooseType=!this.isShowChooseType;
            },
            chooseThis(e){
                this.chooseTypeTxt=e.target.innerText;
                if(this.chooseTypeTxt == '以文件方式'){
                    // 上传文件方法
                    this.dialogUpload()
                } else if(this.chooseTypeTxt =='以数据库方式上传'){
                    // s数据库连接
                    this.dialogSjklink()
                }
                this.isShowChooseType=false;
            },
            changeStartTime(time){
                this.startTime=time;
            },
            changeEndTime(time){
                this.endTime=time;
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
            closeDialog(){
                layer.closeAll();
            },
            // belle新加方法
            dialogUpload(){
                // 上传文件
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['422px', 1000], //宽高
                    content: $('#alert-box-uploadFiles'),
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeUpload(file){
                console.log(file,'文件');
                console.log(file.type,'文件');
                this.filesName = file.name;
                const extension = file.name.split('.')[1] == 'xls'
                const extension2 = file.name.split('.')[1] == 'xlsx'
                const extension3 = file.name.split('.')[1] == 'xlsx'
                console.log(extension)
                console.log(extension2)
                // const isLt2M = file.size / 1024 / 1024 < 5
                if (!extension && !extension2 && !extension3) {
                    this.$message.warning('上传模板只能是 xls、xlsx、csv格式!')
                    return
                }
                // if (!isLt2M) {
                // this.$message.warning('上传模板大小不能超过 5MB!')
                // return
                // }
                // this.fileName = file.name;
                return false // 返回false不会自动上传
            },
            submitUpload(){
                
                this.$refs.upload.submit();
                console.log('ok')
            },
            uploadSuccess(){
                this.$message('成功');
                this.filesName = ''
                this.closeDialog()

            },
            uploadError(){
                this.$message('失败');
                this.filesName = ''
                this.closeDialog()
            },
            dialogSjklink(){
                dialogSjkLayer=layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['700px', 1000], //宽高
                    content: $('#alert-box-sjkLink'),
                });
            },
            closesjkDialog(){
                layer.close(dialogSjkLayer)
                
                dialogSelectsjk =layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['650px', 1000], //宽高
                    content: $('#alert-box-selectSjk'),
                });
            },
            closesSelectsjk(){
                layer.close(dialogSelectsjk)
                
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['422px', 1000], //宽高
                    content: $('#alert-box-sjjName'),
                });
            },
            toggleSelection(rows) {
                if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>
<style scoped>
#main .keshihua-main .select-con .icon{
    appearance: none;
    -webkit-appearance: none;
}
#alert-box-shujujiTab .tab-nav{
    display:flex;
    display:-webkit-flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-right: 30px;
}
#alert-box-shujujiTab .tab-nav li{float: left;line-height: 34px;height:100%;font-size: 14px;-webkit-flex:1;flex:1;cursor: pointer;}
#alert-box-shujujiTab .tab-nav li a{
    padding: 5px;
    border-bottom: 2px solid transparent;
}
#alert-box-shujujiTab .tab-nav li.active a{
    border-bottom: 2px solid #0A9DAE;
}

</style>