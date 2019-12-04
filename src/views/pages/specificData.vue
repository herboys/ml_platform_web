<template>
    <div class="wrapbody">
        <section id="main">
            <div class="breadpage">
                <span class="light_bread"><a href="">数据集</a></span>
                <span class="dark_bread"> > </span>
                <span class="dark_bread"><a href="">慢性病数据研究</a></span>
            </div>
            <div class="search-wrap clearfix">
              
                <span class="fr t t2" >退出</span>
            </div>
            <div class="keshihua-main shujuji-main">
                <div class="table">
                    <table class="keshihua-table shujuji-table" id="tableContent">
                        <thead>
                            <tr>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>年龄</th>
                                <th>收缩压</th>
                                <th>血糖值</th>
                                <th>吸烟年限</th>
                                <th>酗酒年限</th>
                                <th>是否患慢性病</th>
                            </tr>
                        </thead>
                        <tbody v-for="(item,index) in dataList" :key="index">
                            <tr class="evenTr"  >
                                <!-- <td><span class="pull-icon down" :class="item.isShow?'up':'down'"></span></td> -->
                                <td  ><span class="dblclick">徐</span> </td>
                                <td>男</td>
                                <td class="notStart">12</td>
                                <td>-</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>否</td>
                            </tr>
                       

                            
                            <tr class="sonTr" v-show="item.isShow">
                                <td></td>
                                <td>medcine</td>
                                <td>42kb</td>
                                <td class="pause">暂停中</td>
                                <td>决策树</td>
                                <td class="handle">
                                    <!-- <a class="icon icon1" title="查看数据"></a>
                                    <router-link :to="{path:'/visual'}" class="icon icon2" title="数据可视化" ></router-link>
                                    <a class="icon icon3" title="特征工程" @click="dialogtezhenggongcheng"></a>
                                    <a class="icon icon4" title="开始训练" @click="dialogxunliangmoxing"></a>
                                    <a class="icon icon5 shanchu" title="删除" @click="dialogDeleteFB"></a> -->

                                    <a class="assessmenticon">评估</a>
                                    <a class="trainicon">训练</a>
                                    <a class="engineeringicon">特征工程</a>
                                    <a class="explainicon">解释</a>
                                    <a class="moreicon" style="visibility: hidden;">占位</a>

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

       
        
    </div>
</template>

<script>
    let dialogSjkLayer,dialogSelectsjk
    import * as ReqUrl from '../../api/reqUrl'
    import inputTimePick from '../components/inputTimePick'
    export default  {
        data(){
            return {
           
          
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
                mapValue:{},
                updateDatasource: {
                    name: '',
                    desc: '',
                    id:null
                },
                uploadUrl:'',
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
         
        },
        watch:{
            pageSize(val){
                this.getDatasource()
            }
        },
        methods:{
        
           
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
            closeDialog(){
                layer.closeAll();
                this.chooseTypeTxt ='上传数据集'
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
                        item.isShowlist =false
                    })
                    that.total=res.data.count
                    that.maxPage =Math.ceil(that.total/that.pageSize) 
                })
            },
            toMapvalue(key, value){
                this.mapValue[key] = value;
                return this.mapValue;
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
.keshihua-table tr td:last-child{
    width:200px;
}
.search-wrap  .t2 {
    font-size: 14px;
    color: #fff;
    margin-top: 4px;
    margin-right: 40px;
    cursor: pointer;
    position: relative;
    font-size: 13px;
    border-radius: 12px;
    line-height: 27px;
    height: 27px;
    padding: 0px 15px;
    background-image: linear-gradient(to right, #36a7f2, #3388f0);
}
</style>