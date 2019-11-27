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
                    <input type="text" class="fl input input1" v-model="searchKey" />

                    <span class="s1 fl">时间选择：</span>
                    <input-time-pick @done="changeStartTime" class-name-user="aaa"></input-time-pick>

                    <span class="fl line">-</span>

                    <input-time-pick @done="changeEndTime"></input-time-pick>

                    <a class="search-btn" @click="toSearch">查询<i class="icon"></i></a>

                    <div class="chooseType">
                        <p @click="chooseType"><span>{{chooseTypeTxt}}</span> <i class="icon up-icon"></i></p>
                        <div v-show="isShowChooseType">
                            <ul>
                                <li @click="chooseThis($event)">以文件方式上传</li>
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
                                <th>数据量</th>
                                <th>训练情况</th>
                                <th>最佳模型</th>
                                <th>操作</th>
                            </tr>
                        </thead>

                        <tbody v-for="(item,index) in dataList" :key="index">
                            <tr class="evenTr"  >
                                <td @click="toggleTableshow(item,index)"><span class="pull-icon down" :class="item.isShow?'up':'down'"></span></td>
                                <td @dblclick="updateText(item)" ><a href="javascript:void(0)">{{item.dataName}}</a></td>
                                <td>735kb</td>
                                <td class="notStart">未开始</td>
                                <!-- <td class="finished">已完成</td> -->
                                <!-- <td class="unfininshed">未完成</td> -->
                                <td>-</td>
                                <td class="handle">
                                    <a class="look" @click="dialogTab">查看</a>
                                    <a class="pretreatment" @click="dialogPretreatment(item)">预处理</a>
                                    <!-- <span title="修改" class="xiugai" @click="updateText(item)"><span class="icon iconfont icon-xiugai" ></span></a> -->
                                    <a class="del" title="删除" @click="dialogDelete(item)"></a>
                                </td>
                            </tr>
                       

                            
                            <tr class="sonTr" v-show="item.isShow">
                                <td></td>
                                <td>medcine</td>
                                <td>42kb</td>
                                <td class="pause">暂停中</td>
                                <td>决策树</td>
                                <td class="handle">
                                    <a class="icon icon1" title="查看数据"></a>
                                    <router-link :to="{path:'/visual'}" class="icon icon2" title="数据可视化" ></router-link>
                                    <a class="icon icon3" title="特征工程" @click="dialogtezhenggongcheng"></a>
                                    <a class="icon icon4" title="开始训练" @click="dialogxunliangmoxing"></a>
                                    <a class="icon icon5 shanchu" title="删除" @click="dialogDeleteFB"></a>
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
                                <a class="page-a" href="javascript:void(0);" @click="page = 1,getDatasource()">首页</a>
                                <a class="page-a" href="javascript:void(0);" @click="nextPage">下一页</a>
                                <a class="page-a" href="javascript:void(0);" @click="page = maxPage,getDatasource()">末页</a>
                            </span>
                    </div>
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
                    <button class="btn okBtn fr" @click="deleteDatasource()">确认</button>
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
                        class="upload-demo"
                        ref="upload"
                        :action="uploadUrl"
                        :on-change="handleChange"
                        :on-success="uploadSuccess"
                        :on-error="uploadError"
                        :show-file-list="false"
                        :auto-upload="false">
                        
                        <input type="text" class="input" placeholder="请上传原始数据集的csv、 xls、xlsx格式" v-model="filesName"  disabled>
                        <el-button slot="trigger" size="small" type="primary">浏览文件</el-button>
                        
                    </el-upload>
                </div>
                <div class="btn-wrap clearfix">
                    <button class="btn cancelBtn fl" @click="closeDialog">返回</button>
                    <button class="btn okBtn fr" type="success" @click="submitUpload">上传</button>
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
                    <!-- <div><label for="linkName">连接名</label><input type="text " v-model="linkName" name="linkName"></div> -->
                    <div><label for="ipAddress">主机名或IP地址</label><input type="text " v-model="ipAddress" placeholder=""  name="ipAddress"></div>
                    <div><label for="port">端口</label><input type="text " v-model="port" placeholder=""  name="port"></div>
                    <div><label for="userName">用户名</label><input type="text " v-model="userName" name="userName"></div>
                    <div><label for="password">密码</label><input type="text " placeholder="" v-model="password" name="password"></div>
                    <div><label for="type">数据库类型</label>
                        <select name="" id="" v-model="selectType">
                            <option :value="item" v-for="item in typeOption" :key="item">{{item}}</option>
                        </select>
                    </div>
                </div>

                <div class="btn-wrap text-c">
                    <!-- <button class="more" @click="closeDialog">调用更多配方</button> -->
                    <button class="btn" @click="toggleDatasource()">测试并进行下一步</button>
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
                        <select v-model="selectDatesource">
                            <option :value="item" v-for="(item,index) in dataBaseList" :key="index">{{item}}</option>
                        </select>
                    </div>
                    <div class="item"><label for="ipAddress">选择表名</label>
                        <select v-model="selectTablename">
                            <option :value="item" v-for="(item,index) in tableNameList"  :key="index">{{item}}</option>
                        </select>
                    </div>
                    <div class="text item">选择上传字段并确认字段类型</div>
                    <div class="tableBox" >
                        <table border="0" cellspacing="0" cellpadding="0">
                            <thead>
                                <tr>
                                    <td><input type="checkbox" @click="isCheckAll = !isCheckAll,checkAll()" :checked="isCheckAll" id="toggleAll"></td>
                                    <td>字段名称</td>
                                    <td>字段类型</td>
                                </tr>
                                
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in fieldList" :key="index">
                                    <td><input type="checkbox" :checked="item.checked"  @click="toggleCheckbox(item,index)"/><span class="toggle"></span></td>
                                    <td>{{item.field}}</td>
                                    <td>
                                        <select name="" id="" v-model="item.fieldType">
                                            <option :value="type" v-for="(type,index) in optionList" :key="index">{{type}}</option>
                                        </select>
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    
                </div>

                <div class="btn-wrap">
                    <button class="btn" @click="checkSelect">下一步</button>
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
                <input type="text" v-model='sjjName' placeholder="请输入数据集名称">
                <div class="btn-wrap clearfix">
                    <button class="btn okBtn fr" @click="confireUpload">确定并上传</button>
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
            <div class="arrow arrow-left" :class="tezhenggongcheng1 ?'off' :'on'" @click="tezhenggongcheng1Fn()"></div>
            <div class="arrow arrow-right " :class="tezhenggongcheng2 ?'off' :'on'" @click="tezhenggongcheng2Fn()"></div>
            <div id="alert-box-tezhenggongcheng1" v-show="tezhenggongcheng1">
                <div class="title text-c">
                    特征工程1
                    <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
                </div>
                <div class="content-wrap">
                <div class="content alert-box-content">
                    <div class="item-lists">
                        <div class="item-list clearfix">
                            <span class="fl name">选择剔除类<b class="sm">(可多选)</b></span>
                            <select class="fl select"></select>
                        </div>

                        <p class="t">
                            <span class="light">特称组合：</span>
                        </p>
    
                        <div v-for="(item,index) in mergeList" >
                            <div class="item-list clearfix">
                                <span class="fl name">选择需要合并的列</span>
                                <div class="form-wrap fl clearfix">
                                    <select class="fl select"></select>
                                    <span class="icon add" @click="addMerge" v-show="index ==0">+</span>
                                    <span class="icon minus" @click="removeMerge" v-show="mergeList.length>1 && index ==0">-</span>
                                </div>
                            </div>
                            <div class="item-list clearfix">
                                <span class="fl name">合并列名称</span>
                                <input class="fl input" placeholder="请输入合并列的名称" />
                            </div>
                        </div>

                        <p class="t">
                            <span class="light">特征拆分：</span>
                        </p>
                        <div v-for="(item,index) in splitList">
                            <div class="item-list clearfix">
                                <span class="fl name">选择需要拆分的列</span>
                                <div class="form-wrap fl clearfix">
                                    <select class="fl select"></select>
                                    <span class="icon add" @click="addSplit" v-show="index ==0">+</span>
                                    <span class="icon minus" @click="removeSplit" v-show="splitList.length>1 && index ==0">-</span>
                                </div>
                            </div>

                            <div class="list">
                                <div class="item-list clearfix">
                                    <span class="fl name">拆分列数</span>
                                    <div class="form-wrap fl clearfix">
                                    <input type="text" class="fl input" placeholder="请输入拆分列数">
                                    
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        
                        

                    </div>
                    
                    <div class="btn-wrap text-c">
                        <button class="btn begin" @click="closeDialog">调用更多配方</button>
                    </div>
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
        <!-- 修改数据集 -->
        <div class="alert-box" id="alert-box-reviseNewObject">
            <div class="title text-c">
                修改该项目
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <p>项目名称</p>
                <input type="text" v-model="updateDatasource.name">
                <!-- <p>项目描述</p>
                <textarea v-model="updateDatasource.desc"></textarea> -->

                <div class="btn-wrap clearfix">
                    <button class="btn addBtn fl" @click="toUpdate()">确认</button>
                    <button class="btn backBtn fr" @click="closeDialog">返回</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    let dialogSjkLayer,dialogSelectsjk
    import * as ReqUrl from '../../api/reqUrl'
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
                ipAddress:'10.1.192.118',
                port:'3306',
                userName:'root',
                password:'!Aa123456',
                multipleSelection: [],
                sjjName:'',
                dataList:[],
                currentId:null,
                projectId:null,
                dataBaseList:[],
                tableNameList:[],
                selectDatesource:'',
                selectTablename:'',
                fieldList:[],
                isCheckAll:false,
                optionList:[
                    '字符串',
                    '时间',
                    '数值'
                ],
                typeOption:[
                    'mysql',
                    'oracle'
                ],
                selectType:'mysql',
                searchKey:'',
                mapValue:{},
                updateDatasource: {
                    name: '',
                    desc: '',
                    id:null
                },
                uploadUrl:'',
                mergeList:[
                    {
                        colmun:'',
                        name:''
                    }
                ],//特征工程合并列
                splitList:[
                    {
                        colmun:'',
                        name:''
                    }
                ] ,//特征工程拆分列
                page:1,
                pageSize:5,
                maxPage:null,
                options:[
                        {value:5},
                        {value:10},
                        {value:20},
                    ],
 
            }
        },
        computed:{
            
        },
        components:{inputTimePick},
        mounted(){
            this.init();
            this.active=this.tabList[1]["name"];
        },
        watch:{
            selectDatesource(val){
                // 库名切换时请求接口切换表名
                this.toggleDatasource()
            },
            selectTablename(val){
                // 表名切换时请求接口切换字段列表
                this.toggleDatasource()

            },
            searchKey(val){
                if(!val){
                    this.getDatasource()
                }
            },
            pageSize(val){
                this.getDatasource()
            }
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
                    area: ['660px', 1000], //宽高
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
            dialogPretreatment(item){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['860px', 1000], //宽高
                    content: $('#alert-box-shujuyuchuli'),
                });
                let url=`${ReqUrl.preProcessing}`
                let paramsData={
                    taId:item.dsId
                }
                axios({
                    url: url,
                    method: 'get',
                    params: paramsData
                })
                .then(res=>{
                    console.log(res)
                })

            },
            dialogDelete(item){
                this.currentId = item.dsId
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
                this.chooseTypeTxt ='上传数据集'
            },
            chooseType(){
                this.isShowChooseType=!this.isShowChooseType;
            },
            chooseThis(e){
                this.chooseTypeTxt=e.target.innerText;
                if(this.chooseTypeTxt == '以文件方式上传'){
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
            // belle新加方法
            dialogUpload(){
                // 上传文件
                this.filesName = ''
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['500px', '220px'], //宽高
                    content: $('#alert-box-uploadFiles'),
                });
            },
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleChange(file, fileList){
                // 选择文件之后获得文件名进行格式判断
                const extension = file.name.split('.')[1] == 'csv'
                const extension2 = file.name.split('.')[1] == 'xlsx'
                const extension3 = file.name.split('.')[1] == 'xlsx'
                // const isLt2M = file.size / 1024 / 1024 < 5
                if (!extension && !extension2 && !extension3) {
                    this.$message.warning('上传模板只能是 xls、xlsx、csv格式!')
                    return
                } else {
                    this.filesName = file.name;
                }
                
            },
            uploadSuccess(){
                
                this.filesName = ''
                this.closeDialog()
                this.$message({
                    message: '上传成功',
                    type: 'success'
                });
            },
            uploadError(){
                this.filesName = ''
                this.closeDialog()
                this.$message.error('上传失败');
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
                    area: ['600px', 1000], //宽高
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
            },
            getDatasource(){
                // 获取数据集列表
                var that = this
                let url=`${ReqUrl.getDatasoure}`
                let paramsData={
                    userId:1,
                    projectId:that.projectId,
                    page:that.page || 1,
                    size:that.pageSize,
                    search:that.searchKey
                }
                axios({
                    url: url,
                    method: 'post',
                    params: paramsData
                })
                .then(res=>{
                    that.dataList = res.data.list
                    that.dataList.map(item=>{
                        item.isShow = false
                    })
                    that.total=res.data.count
                    that.maxPage =Math.ceil(that.total/that.pageSize) 
                })
            },
            toSearch(){
                if(!this.searchKey){
                    this.$message('请输入数据集名称');
                } else {
                    this.page = 1
                    this.getDatasource()
                }
            },
            deleteDatasource(){
                // 删除数据集
                var that = this
                let url=`${ReqUrl.deleteDatasource}`
                let paramsData={
                    dataId:that.currentId
                }
                that.closeDialog()
                axios({
                    url: url,
                    method: 'get',
                    params: paramsData
                })
                .then(res=>{

                    that.getDatasource()
                })
            },
            toggleDatasource(){
                // 数据库连接测试
                var that = this
                let url=`${ReqUrl.toggleDatasource}`
                that.fieldList =[]
                let paramsData={
                    columnNames: [] || null,
                    dataBase: that.selectDatesource || null,
                    passWord:that.password,
                    projectId: that.projectId,
                    tableName: that.selectTablename || null,
                    type: that.selectType,
                    uid: 0,
                    url: that.ipAddress+':'+that.port,
                    userName: that.userName
                }
                axios({
                    url: url,
                    method: 'post',
                    data: paramsData
                })
                .then(res=>{
                    
                    if(!that.selectDatesource){
                        // 没有选择库时
                        that.closesjkDialog()
                        that.dataBaseList = res.data
                    } else if(!that.selectTablename){
                        that.tableNameList = res.data
                    } else {
                        
                        res.data.map(item=>{
                            let obj = {}
                            let field,fieldType
                            field = item.split(',')[0] 
                            fieldType = item.split(',')[1]
                            obj.field = field
                            obj.fieldType = fieldType
                            obj.checked = false
                            that.fieldList.push(obj)
                        })
                    }
                    
                })
                .catch(error=>{
                    this.$message.error('测试失败');
                })
            },
            checkAll(){
                // 全选
                var that = this
                that.fieldList.filter((item,index)=>{
                        if(that.isCheckAll){
                            // item.checked = true
                            that.$set(that.fieldList,index,{checked:true,field:item.field,fieldType:item.fieldType})
                        } else{
                            // item.checked = false
                            that.$set(that.fieldList,index,{checked:false,field:item.field,fieldType:item.fieldType})
                        }
                    
                })
                
            },
            toggleCheckbox(item,index){
                // 复选框切换
                item.checked = !item.checked
                var that= this
                var i =0
                that.fieldList.forEach(item=>{
                    if(item.checked){
                        i++
                    } else {
                        this.isCheckAll = false
                    }
                    
                })
                if(i == that.fieldList.length){
                    that.isCheckAll = true
                }

            },
            checkSelect(){
                // 教研是否选择上传字段
                let that = this
                let selectedNum =0
                this.fieldList.filter(item=>{
                    if(item.field != 'id'){
                        that.toMapvalue(item.field,item.fieldType)
                    }
                    
                    if(item.checked){
                        selectedNum++
                    } 
                })
                if(selectedNum>0){
                    that.closesSelectsjk()
                } else {
                    that.$message('请上传需要修改的字段');
                }
                
                
            },
            toMapvalue(key, value){
                this.mapValue[key] = value;
                return this.mapValue;
            },
            confireUpload(){
                let url  =`${ReqUrl.saveDatasource}`
                var that = this
                let paramsData={
                    dataDesc: "" || null ,
                    dataId: null,
                    dataName: that.sjjName || null,
                    map: that.mapValue || null,
                    projectId: that.projectId,
                    userId: 1
                }
                if(!this.sjjName){
                    this.$message('请输入数据集名称');
                    return
                }
                axios({
                    url: url,
                    method: 'post',
                    data: paramsData
                })
                .then(res=>{
                    that.getDatasource()
                    that.closeDialog()
                    
                })
                
            },
            updateText(item){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['580px', 1000], //宽高
                    content: $('#alert-box-reviseNewObject'),
                });
                this.updateDatasource.name = item.dataName
                this.updateDatasource.desc = item.dataDesc
                this.updateDatasource.id = item.dsId
                
            },
            toUpdate(){
                let that = this
                let url  =`${ReqUrl.updateDatasource}`
                if(!that.updateDatasource.name){
                    this.$message({
                        message: '数据集名称不能为空',
                        type: 'warning'
                    });
                    return
                }
                let paramsData={
                    dataDesc: "" || null ,
                    dataId: that.updateDatasource.id,
                    dataName: that.updateDatasource.name || null,
                    projectId: that.projectId,
                    userId: 1
                }
                axios({
                    url: url,
                    method: 'post',
                    data: paramsData
                })
                .then(res=>{
                    that.getDatasource()
                    that.closeDialog()
                    
                })
            },
            toggleTableshow(item,index){
                this.$set(this.dataList,index,{
                    isShow:!item.isShow,
                    dataDesc:item.dataDesc,
                    dataName:item.dataName,
                    dsDesDtos:item.dsDesDtos,
                    dsId:item.dsId
                })
                
            },
            addMerge(){
                // 添加合并列
                let obj={
                    colmun:'',
                    name:''
                }
                this.mergeList.push(obj)
            },
            addSplit(){
                // 添加拆分列
                let obj={
                    colmun:'',
                    name:''
                }
                this.splitList.push(obj)
            },
            removeMerge(){
                this.mergeList.pop()
            },
            removeSplit(){
                this.splitList.pop()
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

        },
        created(){
            this.getDatasource()
            this.projectId = this.$route.query.projectId
            this.uploadUrl = `${ReqUrl.saveDataupload}`
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