<template>
    <div style="height:100%;">
        <commonHeade @showPalette="togglePalette" :isShow="paletteShow"></commonHeade>
        
        <div class="wrapbody">
        <section id="main">
            <div class="keshihua-main xiangmu-main">

                <div class="search-wrap clearfix">
                    <span class="s1 fl">项目名称：</span>
                    <input type="text" class="fl input input1" v-model="searchKey" placeholder="请输入检索项目名称" />

                    <a class="search-btn" href="javascript:void(0)" @click="searchProject">检索项目<span class="icon iconfont icon-sousuo"></span> </a>
                    <a class="search-btn addNewObject" @click="adddialogShow"> <span class="icon iconfont icon-zengjia" ></span> 新建项目</a>
                </div>
                <!-- <commonTable></commonTable> -->
                <div class="table">
                    <table class="keshihua-table" id="tableContent">
                        <thead>
                            <tr>
                                <!-- <th>
                                    <input type="checkbox" @click="isCheckAll = !isCheckAll,checkAll()" :checked="isCheckAll" id="toggleAll">
                                    <span></span>
                                </th> -->
                                <th>项目名称</th>
                                <th>描述</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,index) in projectList" :key="index">
                                <!-- <td ><input type="checkbox" :checked="item.checked"  @click="toggleCheckbox(item,index)"/><span class="toggle"></span></td> -->
                                <td>{{item.projectName}}</td>
                                <td>{{item.projectDescribe}}</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian" @click="toDataset(item)"><span class="icon iconfont icon-wenjian"></span></a>

                                    <a title="修改" class="xiugai" @click="updateText(item)"><span class="icon iconfont icon-xiugai" ></span></a>

                                    <a title="删除" class="shanchu" @click="deleteProject(item.id)"><span class="iconfont icon-shanchu"></span></a>
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
        <!-- 添加新项目 -->
        <div class="alert-box" id="alert-box-addNewObject">
            <div class="title text-c">
                添加新项目
                <span class="close iconfont icon-cross-fill" @click="closeDialog"></span>
            </div>
            <div class="content alert-box-content">
                <p>项目名称</p>
                <input type="text" v-model="addProjectform.name">
                <p>项目描述</p>
                <textarea v-model="addProjectform.desc"></textarea>

                <div class="btn-wrap clearfix">
                    <button class="btn addBtn fl" @click="addProject()">添加</button>
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
                    isCheckAll:false,
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
                    deleteId:null
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
                addProject(){
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
                                })
                            }
                            that.total=res.data.count
                            that.maxPage =Math.ceil(that.total/that.pageSize) 
                        })
                },
                toggleCheckbox(item,index){
                    // 复选框切换
                    item.checked = !item.checked
                    var that= this
                    var i =0
                    that.projectList.forEach(item=>{
                        if(item.checked){
                            i++
                        } else {
                            this.isCheckAll = false
                        }
                        
                    })
                    if(i == that.projectList.length){
                        that.isCheckAll = true
                    }

                },
                checkAll(){
                    // 全选
                    var that = this
                    that.projectList.filter((item,index)=>{
                            if(that.isCheckAll){
                                // item.checked = true
                                that.$set(that.projectList,index,{checked:true,projectDescribe:item.projectDescribe,projectName:item.projectName,userId:item.userId})
                            } else{
                                // item.checked = false
                                that.$set(that.projectList,index,{checked:false,projectDescribe:item.projectDescribe,projectName:item.projectName,userId:item.userId})
                            }
                        
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
                        area: ['860px', 1000], //宽高
                        content: $('#alert-box-addNewObject'),
                    });
                },
                closeDialog(){
                    layer.closeAll();
                },

            },
            created(){
                this.getProjeclist()
              
            }
    }
</script>

<style scoped src='../../assets/css/mypop.css' ></style>
<style scoped>



</style>
