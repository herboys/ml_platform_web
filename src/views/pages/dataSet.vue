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
                        <div v-show="isShowChooseType" @mouseleave="isShowChooseType=false">
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
                                <td @dblclick="updateText(item)" ><span class="dblclick">{{item.bmc}}</span> </td>
                                <td>735kb</td>
                                <td class="notStart">未开始</td>
                                <!-- <td class="finished">已完成</td> -->
                                <!-- <td class="unfininshed">未完成</td> -->
                                <td>-</td>
                                <td class="handle">
                                    <!-- <a class="icon icon1" title="查看数据"></a>
                                    <router-link :to="{path:'/visual'}" class="icon icon2" title="数据可视化" ></router-link>
                                    <a class="icon icon3" title="特征工程" @click="dialogtezhenggongcheng"></a>
                                    <a class="icon icon4" title="开始训练" @click="dialogxunliangmoxing"></a>
                                    <a class="icon icon5 shanchu" title="删除" @click="dialogDeleteFB"></a> -->

                                    <a class="lookicon" @click="toLink(item)">查看</a>
                                    <!-- <a class="icon icon5 delicon" title="删除" @click="dialogDeleteFB">删除</a> -->
                                    <a class="delicon" @click="dialogDelete(item)"> 删除</a>
                             

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
                        :action="uploadUrl+'?dataName='+sjjName+'&userId='+userId"
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
                    <button class="btn okBtn fr" @click="confireUpload" v-show="uploadType == 'link'">确定并上传</button>
                    <button class="btn okBtn fr" @click="confireUploadfile" v-show="uploadType == 'upload'">确定并上传</button>
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
    let dialogSjkLayer,dialogSelectsjk,dialogUploadFiles
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
                    '离散型',
                    '连续型',
                    '时间型'
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
                uploadType:'',
                userId:1,
                connectUrl:''
 
            }
        },
        computed:{
            
        },
        components:{inputTimePick},
        mounted(){
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

           
            selected(name){
                this.active = name;
            },
            dialogTab(){
                this.$router.push({path:'/DataSetDetail'})
                // layer.open({
                //     type: 1,
                //     title: false,
                //     anim: 2,
                //     closeBtn: 0,
                //     area: ['860px', 1000], //宽高
                //     content: $('#alert-box-shujujiTab'),
                // });
            },
            dialogDelete(item){
                this.currentId = item.taId
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
                if(!time){
                    this.getDatasource()
                }
            },
            changeEndTime(time){
                this.endTime=time;
                if(!time){
                    this.getDatasource()
                }
            },
            // belle新加方法
            dialogUpload(){
                // 上传文件
                this.filesName = ''
                dialogUploadFiles = layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['500px', '220px'], //宽高
                    content: $('#alert-box-uploadFiles'),
                });
            },
            submitUpload() {
                
                this.closeDialog(dialogUploadFiles)
                this.uploadType = 'upload'
                this.openSjname()
            },
            handleChange(file, fileList){
                // 选择文件之后获得文件名进行格式判断
                const extension = file.name.split('.')[1] == 'csv'
                const extension2 = file.name.split('.')[1] == 'xlsx'
                const extension3 = file.name.split('.')[1] == 'xls'
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
                this.sjjName =''
                this.getDatasource()
                
            },
            uploadError(){
                this.filesName = ''
                this.closeDialog()
                this.sjjName =''
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
                this.uploadType = 'link'
                this.openSjname()
            },
            openSjname(type){
                layer.open({
                    type: 1,
                    title: false,
                    anim: 2,
                    closeBtn: 0,
                    area: ['422px', '200px'], //宽高
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
                var date = new Date();
                var today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
                let endTime
                if(that.startTime){
                    endTime = that.endTime || today
                }
                let url=`${ReqUrl.getDatasoure}`
                let paramsData={
                    userId:1,
                    projectId:that.projectId,
                    page:that.page || 1,
                    size:that.pageSize,
                    search:that.searchKey,
                    start:that.startTime,
                    end:endTime
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
                        item.isShowlist =false
                    })
                    that.total=res.data.count
                    that.maxPage =Math.ceil(that.total/that.pageSize) 
                })
            },
            toSearch(){
                if(!this.searchKey && !this.startTime && !this.endTime){
                    this.$message('请输入数据集名称或者查询时间');
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
                        that.connectUrl = res.data.pop()
                        // res.data.pop()
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
                    // that.toMapvalue(item.field,item.fieldType)
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
                    userId: 1,
                    connectUrl:that.connectUrl 
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
                    that.sjjName =''
                    that.getDatasource()
                    that.closeDialog()
                    
                })
                
            },
            confireUploadfile(){
               if(!this.sjjName){
                   this.$message('请输入数据集名称')
               }
                this.$refs.upload.submit()
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
                    bmc: item.bmc,
                    bms: item.bms,
                    scbz: item.scbz,
                    scsj: item.scsj,
                    taId: item.taId,
                    xgsj: item.xgsj,
                    yhid: item.yhid,
                    zds: item.zds,
                    isShowlist: item.isShowlist
                })
                
            },
            toggleListshow(item,index){
                this.$set(this.dataList,index,{
                    isShow:item.isShow,
                    bmc: item.bmc,
                    bms: item.bms,
                    scbz: item.scbz,
                    scsj: item.scsj,
                    taId: item.taId,
                    xgsj: item.xgsj,
                    yhid: item.yhid,
                    zds: item.zds,
                    isShowlist: !item.isShowlist
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
            toLink(item){
                this.$router.push({path:'/DataSetDetail',query:{taId:item.taId}})
            }

        },
        created(){
            this.getDatasource()
            
            this.projectId = this.$route.query.projectId
            this.uploadUrl = `${ReqUrl.saveDataupload}`
            
        }
    }
</script>
<style scoped>


</style>