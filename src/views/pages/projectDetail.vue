<template>
    <div style="height:100%;">
        <commonHeade @showPalette="togglePalette" :isShow="paletteShow"></commonHeade>
        
        <div class="wrapbody">
        <section id="main">
            
            <div class="keshihua-main xiangmu-main shujuji-main">
                <div class="breadpage">
                    <span class="light_bread"><router-link :to="{path:'/project'}">项目</router-link></span>
                    <span class="dark_bread"> > </span>
                    <span class="dark_bread"><router-link :to="{path:'/'}">项目详情</router-link></span>
                </div>
                <div class="search-wrap clearfix">
                    <span class="s1 fl">任务名称：</span>
                    <input type="text" class="fl input input1" v-model="searchKey" placeholder="请输入检索任务名称" />
                    <span class="s1 fl">时间选择：</span>
                    <input-time-pick @done="changeStartTime" class-name-user="aaa"></input-time-pick>
                    <span class="fl line">-</span>
                    <input-time-pick @done="changeEndTime"></input-time-pick>
                    <a class="search-btn" href="javascript:void(0)" @click="searchTask">检索任务<span class="icon iconfont icon-sousuo"></span> </a>
                    <a class="search-btn addNewObject" @click="adddialogShow"> <span class="icon iconfont icon-zengjia" ></span> 新建任务</a>
                </div>
                <!-- <commonTable></commonTable> -->
                <div class="table">
                    <table class="keshihua-table shujuji-table" id="tableContent">
                        <thead>
                            <tr>
                             
                                <th>任务名称</th>
                                <th>链接数据集</th>
                                <th>训练状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in taskList" :key="index">
                                <td>{{item.rwmc}}</td>
                                <td>{{item.sjjName}}</td>
                                <td>未开始</td>
                                <td class="handle">
                                    <a href="javascript:void(0)" class="lookicon" @click="toLink('detail',item)">查看数据</a>
                                    <a href="javascript:void(0)" class="pretreatmenticon" @click="dialogPretreatment(item)">数据预处理</a>
                                    <a class="engineeringicon" @click="dialogtezhenggongcheng(item)" :class="!item.yclcs?'gray':''" >特征工程</a>
                                    <a class="trainicon" @click="dialogxunliangmoxing" :class="!item.yclcs?'gray':''"  >训练</a>
                                    <a class="assessmenticon" :class="!item.yclcs?'gray':''" @click="toLink('pg')">评估</a>
                                    <router-link :to="{path:'/explain'}" class="explainicon" :class="!item.yclcs?'gray':''"  @click="toLink('js')">解释</router-link>
                                    <!-- <a class="explainicon">解释</a> -->
                                    <a class="moreicon" @click="toggleShow(item,index)">
                                        <ul class="moreicon-ul" v-show="item.isShow">
                                            <!-- <li class="lookicon">查看数据</li> -->
                                            <li class="visualicon" @click="toLink('visual')">数据可视化</li>
                                            <li class="deployModelicon">部署模型</li>
                                            <li class="deployModelicon">调用模型</li>
                                            <li class="delicon" @click="deleteTask(item.miId)">删除</li>
                                        </ul>
                                    </a>
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
                                <a class="page-a" href="javascript:void(0);" @click="page = 1,getTasklist()">首页</a>
                                <a class="page-a" href="javascript:void(0);" @click="nextPage">下一页</a>
                                <a class="page-a" href="javascript:void(0);" @click="page = maxPage,getTasklist()">末页</a>
                            </span>
                    </div>
                </div>



            </div>
        </section>
        </div>
        <!-- 弹窗删除 -->
        <div class="alert-box" id="alert-box-del">
            <div class="title text-c">
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <p class="content-title">确定要删除此可视化项目？</p>
                <div class="btn-wrap clearfix">
                    <button class="btn cancelBtn fl" @click="closeDialog">取消</button>
                    <button class="btn okBtn fr" @click="confireDelete">确认</button>
                </div>
            </div>
        </div>
        <!-- 新增任务 -->
        <div class="alert-box" id="alert-box-addNewTask">
            <div class="title text-c">
                新增任务
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <p>任务名称</p>
                <input type="text" v-model="addTaskform.name" placeholder="">
                <!-- <p>任务描述</p>
                <textarea v-model="addTaskform.desc"></textarea> -->
                <p>请选择链接数据集</p>
                <select name="" id="" v-model="addTaskform.selectDataid">
                        <option :value="item.taId" v-for="item in dataList" :key="item.taId" >{{item.bmc}}</option>
                </select>
                <p class="tips" v-show="!dataList[0]">数据源中没有需要的数据? <router-link :to="{path:'/dataSet',}">点击前往上传数据集</router-link></p>
                <div class="btn-wrap clearfix">
                    <button class="btn addBtn fl" @click="addTask()">新增</button>
                    <button class="btn backBtn fr" @click="closeDialog">返回</button>
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
                            <!-- <label><input type="radio" ><i class="icon"></i><span>分类模型</span></label> -->
                             <el-radio v-model="selectType" label="分类模型">分类模型</el-radio>
  
                        </div>
                        <div class="choose-wrap">
                            <!-- <label><input type="radio"><i class="icon"></i><span>归类模型</span></label> -->
                            <el-radio v-model="selectType" label="归类模型">归类模型</el-radio>
                        </div>
                        <div class="choose-wrap">
                            <!-- <label><input type="radio" ><i class="icon"></i><span>聚类模型</span></label> -->
                            <el-radio v-model="selectType" label="聚类模型">聚类模型</el-radio>
                        </div>
                    </div>


                    <div class="content-item2 clearfix">
                        <!-- <p class="name">目标列：</p> -->
                        <div class="select-wrap clearfix">
                            <div class="select-wrap-half fl">
                                <p>目标列</p>
                                <div class="select">
                                    <select v-model="selectTarget">
                                        <option :value="item" v-for="item in preProcesscolmun.targetColumn" :key="item">{{item}}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="select-wrap-half fl">
                                <p>分组列</p>
                                <div class="select" >
                                    <select v-model="selectGroup">
                                        <option :value="item" v-for="item in preProcesscolmun.groupColumn" :key="item">{{item}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="content-item1 content-item3 clearfix">
                        <p class="name">缺失值填充：</p>
                        <div class="choose-wrap" v-for="item in preProcesscolmun.deficiencyColumn" :key="item.name">
                            <label><input type="checkbox" :checked="item.checked" v-model="item.checked"><i class="icon"></i><span>{{item.name}}</span></label>
                        </div>
           
                    </div>



                </div>

                <div class="btn-wrap">
                    <button class="more" @click="closeDialog">调用更多配方</button>
                    <button class="dev" @click="toPretreatment">生成副本</button>
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

         
                    <div class="content-item1 content-item3 clearfix">
                        <div class="choose-wrap" v-for="item in 5" :key="item">
                            <label><input type="checkbox"  ><i class="icon"></i><span>{{item}}</span></label>
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
                            <select class="fl select" v-model="selectEliminate">
                                <option :value="item" v-for="(item,index) in tcgcList" :key="index">{{item}}</option>
                            </select>
                        </div>

                        <p class="t">
                            <span class="light">特称组合：</span>
                        </p>
    
                        <div v-for="(item,index) in mergeList" >
                            <div class="item-list clearfix">
                                <span class="fl name">选择需要合并的列</span>
                                <div class="form-wrap fl clearfix">
                                    <select class="fl select" v-model="item.selectColmun">
                                        <option :value="name" v-for="name in item.selectList" :key="name">{{name}}</option>
                                    </select>
                                    <span class="icon add" @click="addMerge" v-show="index ==0">+</span>
                                    <span class="icon minus" @click="removeMerge" v-show="mergeList.length>1 && index ==0">-</span>
                                </div>
                            </div>
                            <div class="item-list clearfix">
                                <span class="fl name">合并列名称</span>
                                <input class="fl input" v-model="item.colmunName" placeholder="请输入合并列的名称" />
                            </div>
                        </div>

                        <p class="t">
                            <span class="light">特征拆分：</span>
                        </p>
                        <div v-for="(item,index) in splitList">
                            <div class="item-list clearfix">
                                <span class="fl name">选择需要拆分的列</span>
                                <div class="form-wrap fl clearfix">
                                    <select class="fl select" v-model="item.selectColmun">
                                        <option :value="name" v-for="name in item.selectList" :key="name">{{name}}</option>
                                    </select>
                                    <span class="icon add" @click="addSplit" v-show="index ==0">+</span>
                                    <span class="icon minus" @click="removeSplit" v-show="splitList.length>1 && index ==0">-</span>
                                </div>
                            </div>

                            <div class="list">
                                <div class="item-list clearfix">
                                    <span class="fl name">拆分列数</span>
                                    <div class="form-wrap fl clearfix">
                                    <input type="number" class="fl input" min="2" v-model="item.colmunNUmber" placeholder="请输入拆分列数">
                                    
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    
                    <!-- <div class="btn-wrap text-c">
                        <button class="btn begin" @click="closeDialog">调用更多配方</button>
                    </div> -->
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
                            <select class="fl select" v-model="arithmetic">
                                <option :value="item.value" v-for="item in arithmeticOption" :key="item.value">{{item.value}}</option>
                            </select>
                        </div>
                        <div class="item-list clearfix">
                            <span class="fl name">正则化</span>
                            <select class="fl select" v-model="regex">
                                <option :value="item.value" v-for="item in regexOption" :key="item.value">{{item.value}}</option>
                            </select>
                        </div>
                        <div class="item-list clearfix">
                            <span class="fl name">降维数</span>
                            <input class="fl input" type="number" min="0" v-model="jiangwei" placeholder="请输入LDA降维时降到的维数" />
                        </div>

                        <p class="t">
                            <span class="light">主成分分析：</span>
                        </p>
                        <div class="item-list clearfix">
                            <span class="fl name">主成分个数</span>
                            <input class="fl input" type="number" min="0" v-model="number" placeholder="请输入拆分的列数" />
                        </div>
                        <div class="item-list clearfix">
                            <span class="fl name">白化</span>
                            <select class="fl select" v-model="baihua">
                                <option :value="item.value" v-for="item in baihuaOption" :key="item.value">{{item.value}}</option>
                            </select>
                            <p class="fl pop">
                                <span class="wenhao fl">
                                    <i class="icon iconfont icon-qm"></i>
                                </span>
                                <span class="fl help">帮助</span>
                                <span class="border-right"></span>
                                <span class="txt">
                                    白化的目的是去除输入数据的冗余信息。由于很多相邻特征之间具有很强的相关性，所以用于训练时的输入是比较冗余的；白化的目的就是降低输入的冗余性。
                                        <!-- 特征选择标准：前者是基尼 系数，后者是信息熵，两种 算法对准确率无区别，一般 说使用默认的基尼系数“gini” 就可以。 -->
                           
                                </span>
                            </p>
                        </div>
                    </div>
                    
                    <div class="btn-wrap text-c">
                        <button class="btn esc" @click="closeDialog">调用更多配方</button>
                        <button class="btn begin" @click="saveCharacteristic">保存</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import * as ReqUrl from '../../api/reqUrl'
import commonTable from '../components/commonTable.vue'
import commonHeade from '../components/header.vue'
import inputTimePick from '../components/inputTimePick'
  import qs from 'qs'
  const parseForm = qs.stringify
  function packup (data = {}) {
        return parseForm({
            projectDto: JSON.stringify(data)
        })
    }
    export default {
        name: "Project",
            data () {
                return {
                    msg: 'Welcome to Your Vue.js App',
                    paletteShow:false,
                    dialogShow: false,
                    dialogupShow:false,
                    addTaskform: {
                        name: '',
                        desc: '',
                        selectDataid:null
                    },
                    formLabelWidth: '100%',
                    customWidth:'600px',
                    updateProjectform: {
                        name: '',
                        desc: '',
                        id:null
                    },
                    formLabelWidth: '100%',
                    taskList:[],
                    newList:[],
                    searchKey:'',
                    page:1,
                    pageSize:5,
                    maxPage:null,
                    userId:1,
                    options:[
                        {value:5},
                        {value:10},
                        {value:20},
                    ],
                    total:null,
                    deleteId:null,
                    mergeList:[
                        {
                            selectColmun:'',
                            colmunName:''
                        }
                    ],//特征工程合并列
                    splitList:[
                        {
                            selectColmun:'',
                            colmunNUmber:''
                        }
                    ] ,//特征工程拆分列
                    tezhenggongcheng1:true,
                    tezhenggongcheng2:false,
                    tezhenggongcheng:true,
                    projectId:null,
                    dataList:[],
                    preProcesscolmun:{},//获取预处理对象
                    selectType:'分类模型',
                    selectTarget:'',//选中的目标列
                    selectGroup:'',//选中的分组列
                    selectMiid:null,//选中的任务id
                    selectTzgc:null,//选中的特征工程tagid
                    tcgcList:[],//特征工程列表
                    selectEliminate:'',//剔除类
                    arithmetic:'',//降维算法
                    regex:'',//正则化
                    jiangwei:'',//降维数
                    baihua:'', //白化
                    number:null,//拆分个数
                    arithmeticOption:[
                        {value:'奇异分解值-svd'},
                        {value:'特征分解-eigen'},
                        {value:'最小二程-lsrq'}
                    ],
                    regexOption:[
                        {value:'自动'},
                        {value:'否'}
                    ],
                    baihuaOption:[
                        {value:'是'},
                        {value:'否'},
                    ],
                    startTime:'',
                    endTime:''
                }
            },
            components:{
                commonHeade,commonTable,inputTimePick
            },
            watch:{
                arithmetic(val){
                    console.log(val,'降维算法')
                },
                regex(val){
                    console.log(val,'正则化')
                },
                jiangwei(val){
                    console.log(val,'降维数')
                },
                baihua(val){
                    console.log(val,'白话')
                },
                number(val){
                    console.log(val,'拆分个数')
                },
                searchKey(val){
                    if(!val){
                        this.getTasklist()
                    }
                },
                pageSize(val){
                    this.getTasklist()
                },
                selectType(val){
                    console.log(val)
                },
                selectEliminate(val){
                    console.log(val)
                },
            },
            methods: {
                changeStartTime(time){
                    this.startTime=time;
                    if(!time){
                        this.getTasklist()
                    }
                },
                changeEndTime(time){
                    this.endTime=time;
                    if(!time){
                        this.getTasklist()
                    }
                },
                addTask(){
                    var that = this
                    var obj = this.addTaskform
                    let url=`${ReqUrl.newTask}`
                    if(!obj.name){
                        this.$message('请输入任务名称');
                    } else{
                        // this.dialogShow = false
                        this.closeDialog()
                        let paramsData={
                            prId: that.projectId,
                            rwmc: that.addTaskform.name,
                            rwms: that.addTaskform.desc,
                            taId:that.addTaskform.selectDataid
                        }
                  
                        that.$axios.post(
                            url,
                            paramsData
                        )
                        .then((res) => {
                            that.addTaskform.name =''
                            that.addTaskform.desc = ''
                            that.addTaskform.selectDataid =null
                            that.getTasklist()
                          
                        })
                    }
                },
                togglePalette(val){
                    this.paletteShow = val
                },
                
                deleteTask(id){
                    let that = this
                    this.deleteId = id
                    
                    layer.open({
                        type: 1,
                        title: false,
                        anim: 2,
                        closeBtn: 0,
                        area: ['422px', 1000], //宽高
                        content: $('#alert-box-del'),
                    });
                },
                confireDelete(){
                    // 确认删除
                    let paramData={
                        miId:this.deleteId
                    }
                    let url=`${ReqUrl.deleteTask}`
                    axios({
                        url: url,
                        method: 'get',
                        params: paramData
                    })
                    .then(res=>{
                        this.getTasklist()
                        this.closeDialog()
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    })
                 
                        
                },
                getTasklist(){
                    // 获得任务列表
                    var that = this
                    var date = new Date();
                    var today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
                    let endTime
                    if(that.startTime){
                        endTime = that.endTime || today
                    }
                    let url=`${ReqUrl.taskList}`
                    var paramData={
                        search:that.searchKey,
                        userId:that.userId,
                        page:that.page || 1,
                        size:that.pageSize,
                        start:that.startTime,
                        end:endTime,
                        projectId:that.projectId,
                        
                    }
                    
                    axios({
                        url: url,
                        method: 'post',
                        params: paramData
                    })
                    .then(res=>{
                        if(res.data=='获取为空'){
                            that.taskList =[]
                            that.$message('抱歉，没有找到对应数据');
                        } else {
                            that.taskList = res.data.tasks
                            if(res.data.tasks[0]){
                                that.taskList.map(item=>{
                                    that.dataList.forEach(name=>{
                                        if(item.taId == name.taId){
                                            item.sjjName = name.bmc
                                        }
                                    })
                                })
                            }
                            
                            
                        }
                        that.total=res.data.count
                        that.maxPage =Math.ceil(that.total/that.pageSize) 
                    })
                 
                },
                searchTask(){
                    if(!this.searchKey  && !this.startTime && !this.endTime){
                        this.$message('请输入检索任务名称或者检索时间');
                    } else {
                        this.page = 1
                        this.getTasklist()
                    }
                    
                },
                nextPage(){
                    if(this.page == this.maxPage){
                        this.$message('当前是最后一页');
                    } else {
                        this.page++
                        this.getTasklist()
                    }
                },
                goPage(){
                    // 页面go判断
                    if(this.page >this.maxPage){
                        this.$message('当前数据一共'+this.maxPage +'页');
                        return
                    } else {
                        this.getTasklist()
                    }
                },
                adddialogShow(){
                    // this.dialogShow = true
                    layer.open({
                        type: 1,
                        title: false,
                        anim: 2,
                        closeBtn: 0,
                        area: ['550px', 1000], //宽高
                        content: $('#alert-box-addNewTask'),
                    });
                },
                closeDialog(){
                    layer.closeAll();
                },
                dialogPretreatment(item){
                    // 数据预处理
                    layer.open({
                        type: 1,
                        title: false,
                        anim: 2,
                        closeBtn: 0,
                        area: ['860px', '600px'], //宽高
                        content: $('#alert-box-shujuyuchuli'),
                    });
                    this.selectMiid = item.miId
                    let url=`${ReqUrl.preProcessing}`
                    let paramsData={
                        // taId:item.dsId
                        taId:24
                    }
                    axios({
                        url: url,
                        method: 'get',
                        params: paramsData
                    })
                    .then(res=>{
                        this.preProcesscolmun = res.data
                        var arr = []
                        this.preProcesscolmun.deficiencyColumn.forEach(item=>{
                            var obj={}
                            obj.name = item
                            obj.checked = false
                            arr.push(obj)

                        })
                        this.preProcesscolmun.deficiencyColumn = arr
                        console.log(this.preProcesscolmun.deficiencyColumn)
                    })

                },
                dialogtezhenggongcheng(item){
                    
                    if(!item.yclcs){
                        this.$message('请先进行预处理')
                        return
                    }
                    // 特征工程
                    layer.open({
                        type: 1,
                        title: false,
                        anim: 2,
                        closeBtn: 0,
                        area: ['660px', 1000], //宽高
                        content: $('#alert-box-tezhenggongcheng'),
                    });
                    if(this.selectMiid != item.miId){
                        this.selectEliminate = ''
                        this.mergeList=[]
                        this.splitList=[]
                        this.mergeList.push(
                            {
                                selectColmun:'',
                                colmunName:'',
                                selectList:this.tcgcList
                            }
                        )
                        this.splitList.push(
                            {
                                selectColmun:'',
                                colmunNUmber:'',
                                selectList:this.tcgcList
                            }
                        )
                    }
                    this.selectMiid = item.miId
                    this.selectTzgc = item.taId
                    let url=`${ReqUrl.getCharacteristic}`
                    let paramsData={
                        userId:1,
                        taId:this.selectTzgc
                    }
             
                    axios({
                        url: url,
                        method: 'get',
                        params: paramsData,
                    })
                    .then(res=>{
                        console.log(res)
                        this.tcgcList = res.data
                        this.mergeList.map(item=>{
                            item.selectList = res.data
                        })
                        this.splitList.map(item=>{
                            item.selectList = res.data
                        })
                        console.log(this.mergeList)
                        console.log(this.splitList)
                       
                    })

                },
                dialogxunliangmoxing(){
                    // 模型训练
                    layer.open({
                        type: 1,
                        title: false,
                        anim: 2,
                        closeBtn: 0,
                        area: ['600px', "auto"], //宽高
                        content: $('#alert-box-xunliangmoxing'),
                    });
                },
                addMerge(){
                    // 添加合并列
                    let obj={
                        selectColmun:'',
                        colmunName:'',
                        selectList:this.tcgcList
                    }
                    this.mergeList.push(obj)
                },
                addSplit(){
                    // 添加拆分列
                    let obj={
                        selectColmun:'',
                        colmunNUmber:'',
                        selectList:this.tcgcList
                    }
                    this.splitList.push(obj)
                },
                removeMerge(){
                    this.mergeList.pop()
                },
                removeSplit(){
                    this.splitList.pop()
                },
                tezhenggongcheng1Fn(){
                    this.tezhenggongcheng1=true;
                    this.tezhenggongcheng2=false;
                },
                tezhenggongcheng2Fn(){
                    
                    console.log(this.selectEliminate)
                    console.log(this.mergeList)
                    console.log(this.splitList)
                    this.mergeList.forEach((item,index)=>{
                      
                    })
                    this.splitList.forEach(item=>{

                    })
                    
                    // return
                    this.tezhenggongcheng2=true;
                    this.tezhenggongcheng1=false;
                },
                toggleShow(item,index){
                    // item.isShow = !item.isShow 
                    
                    this.$set(this.taskList,index,{
                        checked:item.checked,
                        miId: item.miId,
                        prId: item.prId,
                        rwbz: item.rwbz,
                        rwmc: item.rwmc,
                        rwms: item.rwms,
                        scbz: item.scbz,
                        scsj: item.scsj,
                        taId: item.taId,
                        tzzcs: item.tzzcs,
                        xgsj: item.xgsj,
                        yclcs: item.yclcs,
                        yhid: item.yhid,
                        zxtz: item.zxtz,
                        zxtzms: item.zxtzms,
                        sjjName:item.sjjName,
                        isShow:!item.isShow
                    })
                    console.log(item)
                },
                getDatasource(){
                    // 获取数据集列表
                    var that = this
                    let url=`${ReqUrl.getDatasoure}`
                    let paramsData={
                        userId:1,
                        projectId:that.projectId,
                        page:1,
                    }
                    axios({
                        url: url,
                        method: 'post',
                        params: paramsData
                    })
                    .then(res=>{
                        that.dataList = res.data.list
                        console.log(that.dataList)
                        that.getTasklist()
                        // that.total=res.data.count
                        // that.maxPage =Math.ceil(that.total/that.pageSize) 
                    })
                },
                toPretreatment(){
                    // 预处理接口
                    const missKey ={}
                    this.preProcesscolmun.deficiencyColumn.forEach((item,index)=>{
                        if(item.checked){
                            missKey[index] = item.name;
                        }
                    })
                    if(!this.selectGroup){
                        this.$message('请选择分组列')
                        return
                    } else if(!this.selectTarget){
                        this.$message('请选择目标列')
                        return
                    } else if (!missKey){
                        this.$message('请选择缺失列')
                        return
                    }
                    let url=`${ReqUrl.pretreatment}`
                    let paramsData={
                        userId:1,
                        groupColumn: this.selectGroup,
                        missingColumn: missKey,
                        modelType: this.selectType,
                        targetColumn: this.selectTarget
                    }
             
                    axios({
                        url: url,
                        method: 'post',
                        params: {miId:this.selectMiid},
                        data:paramsData
                    })
                    .then(res=>{
                        console.log(res)
                        this.$message({
                            message: res.data,
                            type: 'success'
                        });
                        this.getTasklist()
                        this.closeDialog()
                    })
                    
                },
                toLink(type,item){
                    // 路由跳转
                    if(type == 'detail') {
                        this.$router.push({path:'/DataSetDetail',query:{taId:item.taId}})
                    } else if(type == 'pg'){
                        this.$router.push({path:'/assess'})
                    } else if(type == 'js'){
                        this.$router.push({path:'/explain'})
                    } else if(type == 'visual'){
                        this.$router.push({path:'/VisualTwoLevel'})
                    } 

                },
                saveCharacteristic(){
                    // 保存特征工程
                    var that = this
                    let url=`${ReqUrl.saveCharacteristic}`
                    const targetObj = {}
                    targetObj.selectEliminate = that.selectEliminate//剔除类
                    targetObj.mergeList = that.mergeList//特征组合
                    targetObj.splitList = that.splitList //特征拆分
                    targetObj.reduction={
                        lad:{
                            svd:that.arithmetic,
                            regex:that.regex,
                            n:that.jiangwei
                            },
                        pca:{
                            n:that.number,
                            white:that.baihua
                        }
                    }
                    var paramData={
                        characteristicOneDto:targetObj
                    }
                    axios({
                        url: url,
                        method: 'post',
                        params:{miId:that.selectMiid},
                        data: paramData,
                    })
                    .then(res=>{
                        that.selectEliminate =''
                        that.mergeList =[{
                            selectColmun:'',
                            colmunName:''
                        }]
                        that.splitList = [{
                            selectColmun:'',
                            colmunNUmber:''
                        }]
                        that.arithmetic = ''
                        that.regex = ''
                        that.jiangwei = null
                        that.number = null
                        that.baihua = ''

                        that.getDatasource()
                        that.$message({
                            message: res.data,
                            type: 'success'
                        });
                        that.closeDialog()
                    })
                }

            },
            created(){
                this.projectId = this.$route.query.projectId
                
                this.getDatasource()
                
            }
    }
</script>

<style scoped src='../../assets/css/mypop.css' ></style>
<style scoped>



</style>
