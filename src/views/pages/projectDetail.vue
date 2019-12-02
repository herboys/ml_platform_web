<template>
    <div style="height:100%;">
        <commonHeade @showPalette="togglePalette" :isShow="paletteShow"></commonHeade>
        
        <div class="wrapbody">
        <section id="main">
            <div class="keshihua-main xiangmu-main shujuji-main">

                <div class="search-wrap clearfix">
                    <span class="s1 fl">项目名称：</span>
                    <input type="text" class="fl input input1" v-model="searchKey" placeholder="请输入检索项目名称" />

                    <a class="search-btn" href="javascript:void(0)" @click="searchProject">检索数据集<span class="icon iconfont icon-sousuo"></span> </a>
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
                            <tr v-for="(item,index) in projectList" :key="index">
                                <td>{{item.projectName}}</td>
                                <td>{{item.projectDescribe}}</td>
                                <td>未开始</td>
                                <td class="handle">
                                    <!-- <span title="数据集" class="wenjian" @click="toDataset(item)"><span class=" iconfont icon-wenjian"></span></a> -->

                                    <!-- <span title="修改" class="xiugai" @click="updateText(item)"><span class="icon iconfont icon-xiugai" ></span></a> -->
                                    <a href="javascript:void(0)" class="lookicon" >查看数据</a>
                                    <a href="javascript:void(0)" class="pretreatmenticon" @click="dialogPretreatment(item)">数据预处理</a>
                                    <a class="engineeringicon" @click="dialogtezhenggongcheng">特征工程</a>
                                    <a class="trainicon" @click="dialogxunliangmoxing">训练</a>
                                    <a class="assessmenticon">评估</a>
                                    <router-link :to="{path:'/explain'}" class="explainicon">解释</router-link>
                                    <!-- <a class="explainicon">解释</a> -->
                                    <a class="moreicon" @click="toggleShow(item,index)">
                                        <ul class="moreicon-ul" v-show="item.isShow">
                                            <!-- <li class="lookicon">查看数据</li> -->
                                            <li class="visualicon" @click="toVisual">数据可视化</li>
                                            <li class="deployModelicon">部署模型</li>
                                            <li class="deployModelicon">调用模型</li>
                                            <li class="delicon">删除</li>
                                        </ul>
                                    </a>
                                    <!-- <span title="删除" class="shanchu" @click="deleteProject(item.id)"><span class="iconfont icon-shanchu"></span></a> -->
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
                                <a class="page-a" href="javascript:void(0);" @click="page = 1,getProjeclist()">首页</a>
                                <a class="page-a" href="javascript:void(0);" @click="nextPage">下一页</a>
                                <a class="page-a" href="javascript:void(0);" @click="page = maxPage,getProjeclist()">末页</a>
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
                <input type="text" v-model="addProjectform.name">
                <p>请选择链接数据集</p>
                <select name="" id="" >
                        <option :value="item" v-for="item in 5" :key="item">{{item}}</option>
                </select>

                <div class="btn-wrap clearfix">
                    <button class="btn addBtn fl" @click="addTask()">新增</button>
                    <button class="btn backBtn fr" @click="closeDialog">返回</button>
                </div>
            </div>
        </div>
        <!-- 修改项目 -->
        <div class="alert-box" id="alert-box-reviseNewObject">
            <div class="title text-c">
                修改该项目
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <p>项目名称</p>
                <input type="text" v-model="updateProjectform.name">
                <p>项目描述</p>
                <textarea v-model="updateProjectform.desc"></textarea>

                <div class="btn-wrap clearfix">
                    <button class="btn addBtn fl" @click="updateProject()">确认</button>
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
    </div>
</template>
<script>
import * as ReqUrl from '../../api/reqUrl'
import commonTable from '../components/commonTable.vue'
import commonHeade from '../components/header.vue'
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
                    addProjectform: {
                        name: '',
                        desc: '',
                        
                    },
                    formLabelWidth: '100%',
                    customWidth:'600px',
                    updateProjectform: {
                        name: '',
                        desc: '',
                        id:null
                    },
                    formLabelWidth: '100%',
                    projectList:[],
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
                    tezhenggongcheng1:true,
                    tezhenggongcheng2:false,
                    tezhenggongcheng:true,
                }
            },
            components:{
                commonHeade,commonTable
            },
            mounted(){
            },
            watch:{
                searchKey(val){
                    if(!val){
                        this.getProjeclist()
                    }
                },
                pageSize(val){
                    this.getProjeclist()
                }
            },
            methods: {
                addTask(){
                    var that = this
                    var obj = this.addProjectform
                    let url=`${ReqUrl.addProject}`
                    if(!obj.name || !obj.desc){
                        this.$message('请输入项目名称和项目描述');
                    } else{
                        // this.dialogShow = false
                        this.closeDialog()
                        let paramsData={
                            'projectDescribe': that.addProjectform.desc,
                            'projectName': that.addProjectform.name,
                            'userId': that.userId
                        }
                  
                        that.$axios.post(
                            url,
                            paramsData
                        )
                        .then((res) => {
                            that.addProjectform.name =''
                            that.addProjectform.desc = ''
                            that.getProjeclist()
                          
                        })
                    }
                },
                togglePalette(val){
                    this.paletteShow = val
                },
                updateText(item){
                    // this.dialogupShow = true
                    layer.open({
                        type: 1,
                        title: false,
                        anim: 2,
                        closeBtn: 0,
                        area: ['860px', 1000], //宽高
                        content: $('#alert-box-reviseNewObject'),
                    });
                    this.updateProjectform.name = item.projectName
                    this.updateProjectform.desc = item.projectDescribe
                    this.updateProjectform.id = item.id
                },
                updateProject(){
                    var obj = this.updateProjectform
                    var that=this
                    let url=`${ReqUrl.updateProject}`
                    if(!obj.name || !obj.desc){
                        this.$message('请输入修改名称和修改描述');
                        
                  
                    } else{
                        // this.dialogupShow = false
                        this.closeDialog()
                        let paramsData={
                            "id": that.updateProjectform.id,
                            "projectDescribe": that.updateProjectform.desc,
                            "projectName": that.updateProjectform.name,
                            "userId": that.userId
                        }
                  
                        that.$axios.post(
                            url,
                            paramsData
                        )
                        .then((res) => {
                            that.updateProjectform.name =''
                            that.updateProjectform.desc = ''
                            that.updateProjectform.id =null
                            that.getProjeclist()
                          
                        })
                    }
                },
                deleteProject(id){
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
                        projectId:this.deleteId
                    }
                    let url=`${ReqUrl.deleteProject}`
                    this.$axios.get(
                        url,
                        {
                            params:paramData,
                        })
                        .then((res) => {
                            this.getProjeclist()
                            this.closeDialog()
                        })
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                },
                getProjeclist(){
                    // 获得项目列表
                    var that = this
                    let url=`${ReqUrl.getProjeclist}`
                    var paramData={
                        search:that.searchKey,
                        userId:that.userId,
                        page:that.page || 1,
                        size:that.pageSize
                    }
                    that.$axios.get(
                        url,
                        {
                            params:paramData,
                        })
                        .then((res) => {
                            if(res.data=='获取为空'){
                                that.projectList =[]
                                that.$message('抱歉，没有找到对应数据');
                            } else {
                                that.projectList = res.data.list
                                that.projectList.map(item=>{
                                    item.checked = false
                                    item.isShow = false
                                })
                            }
                            that.total=res.data.count
                            that.maxPage =Math.ceil(that.total/that.pageSize) 
                        })
                },
                searchProject(){
                    if(!this.searchKey){
                        this.$message('检索项目名称不能为空');
                    } else {
                        this.page = 1
                        this.getProjeclist()
                    }
                    
                },
                nextPage(){
                    if(this.page == this.maxPage){
                        this.$message('当前是最后一页');
                    } else {
                        this.page++
                        this.getProjeclist()
                    }
                },
                goPage(){
                    // 页面go判断
                    if(this.page >this.maxPage){
                        this.$message('当前数据一共'+this.maxPage +'页');
                        return
                    } else {
                        this.getProjeclist()
                    }
                },
                toDataset(item){
                    // 跳转到数据集
                    this.$router.push({path:'/dataSet',query:{projectId:item.id}})
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
                dialogtezhenggongcheng(){
                    // 特征工程
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
                tezhenggongcheng1Fn(){
                    this.tezhenggongcheng1=true;
                    this.tezhenggongcheng2=false;
                },
                tezhenggongcheng2Fn(){
                    this.tezhenggongcheng2=true;
                    this.tezhenggongcheng1=false;
                },
                toggleShow(item,index){
                    // item.isShow = !item.isShow 
                    
                    this.$set(this.projectList,index,{checked:item.checked,projectDescribe:item.projectDescribe,projectName:item.projectName,userId:item.userId,isShow:!item.isShow})
                    console.log(item)
                },
                toVisual(){
                    this.$router.push({path:'/DataSetDetail'})
                }

            },
            created(){
                this.getProjeclist()
              
            }
    }
</script>

<style scoped src='../../assets/css/mypop.css' ></style>
<style scoped>



</style>
