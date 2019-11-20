<template>
    <div>
        <commonHeade @showPalette="togglePalette" :isShow="paletteShow"></commonHeade>
        
        <section id="main">
            <div class="keshihua-main xiangmu-main">

                <div class="search-wrap clearfix">
                    <span class="s1 fl">项目名称：</span>
                    <input type="text" class="fl input input1" />

                    <a class="search-btn">检索项目<span class="icon iconfont icon-sousuo"></span> </a>
                    <a class="search-btn addNewObject" @click="dialogShow = true"> <span class="icon iconfont icon-zengjia" ></span> 新建项目</a>
                </div>
                <commonTable></commonTable>
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
        </section>


        


        <el-dialog  title="添加新项目" customClass="customWidth" :visible.sync="dialogShow" :center="true">
            <el-form :model="addProjectform">
                <el-form-item label="项目名称" :label-width="formLabelWidth">
                    <el-input v-model="addProjectform.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="项目描述" :label-width="formLabelWidth">
                    <el-form-item >
                        <el-input type="textarea" v-model="addProjectform.desc" ></el-input>
                    </el-form-item>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addProject()">添 加</el-button>
                <el-button @click="dialogShow = false">返 回</el-button>
                
            </div>
        </el-dialog>
        <!-- 弹窗删除 -->
        <div class="alert-box" id="alert-box-del">
            <div class="title text-c">
                <span class="close iconfont icon-cross-fill"></span>
            </div>
            <div class="content alert-box-content">
                <p class="content-title">确定要删除此可视化项目？</p>
                <div class="btn-wrap clearfix">
                    <button class="btn cancelBtn fl">取消</button>
                    <button class="btn okBtn fr">确认</button>
                </div>
            </div>
        </div>



        <div class="alert-box" id="alert-box-addNewObject">
            <div class="title text-c">
                添加新项目
                <span class="close iconfont icon-cross-fill"></span>
            </div>
            <div class="content alert-box-content">
                <p>项目名称</p>
                <input type="text">
                <p>项目描述</p>
                <textarea></textarea>

                <div class="btn-wrap clearfix">
                    <button class="btn addBtn fl">添加</button>
                    <button class="btn backBtn fr">返回</button>
                </div>
            </div>
        </div>



        <div class="alert-box" id="alert-box-reviseNewObject">
            <div class="title text-c">
                修改该项目
                <span class="close iconfont icon-cross-fill"></span>
            </div>
            <div class="content alert-box-content">
                <p>项目名称</p>
                <input type="text">
                <p>项目描述</p>
                <textarea></textarea>

                <div class="btn-wrap clearfix">
                    <button class="btn addBtn fl">添加</button>
                    <button class="btn backBtn fr">返回</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import commonTable from '../components/commonTable.vue'
import commonHeade from '../components/header.vue'
    export default {
        name: "Project",
            data () {
                return {
                    msg: 'Welcome to Your Vue.js App',
                    paletteShow:false,
                    dialogShow: false,
                    addProjectform: {
                        name: '',
                        delivery: false,
                        desc: '',
                        
                    },
                    formLabelWidth: '100%',
                    customWidth:'600px'
                }
            },
            components:{
                commonHeade,commonTable
            },
            mounted(){
            },
            methods: {
                open() {
                    this.$alert('这是一段内容', '标题名称', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                            });
                        }
                    });
                },
                addProject(){
                    
                    var obj = this.addProjectform
                    if(!obj.name || !obj.desc){
                        this.$alert('请输入项目名称和项目描述', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                // this.$message({
                                //     type: 'info',
                                //     message: `action: ${ action }`
                                // });
                            }
                        });
                    } else{
                        this.dialogShow = false
                    }
                },
                
                open3() {
                    this.$prompt('请输入邮箱', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                        inputErrorMessage: '邮箱格式不正确'
                    }).then(({ value }) => {
                        this.$message({
                            type: 'success',
                            message: '你的邮箱是: ' + value
                        });
                    }).catch(() => {
                        // this.$message({
                        //     type: 'info',
                        //     message: '取消输入'
                        // });       
                    });
                },
                
                
                togglePalette(val){
                    this.paletteShow = val
                }

            },
            created(){
            }
    }
</script>

<style scoped src='../../assets/css/mypop.css' ></style>
<style scoped>
#main{
        background-image: linear-gradient(45deg, #20234f, #141a36);
}
#main .xiangmu-main .search-wrap .input {
    width: 300px;
    border-radius: 4px;
}
#main .keshihua-main .search-wrap .s1 {
    color: #838fa9;
}
#main .keshihua-main .search-wrap{
   margin:0!important;
}
#main .keshihua-main .search-wrap .search-btn{
    background-image: linear-gradient(0deg, #02b09a, #08a1aa);
    border-radius: 4px;
}

.ui-page-sort .right-tool .span-setting, .ui-page-sort .right-tool .span-number, .ui-page-sort .right-tool .span-number a, .ui-page-sort .right-tool .span-tool a {
    color: #838fa9;
}
#main .xiangmu-main .keshihua-table tr td.handle a {
    margin-left: 10px;
}


</style>