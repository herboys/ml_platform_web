<template>
    <div>
        <commonHeade @showPalette="togglePalette" :isShow="paletteShow"></commonHeade>
        
        <section id="main">
            <div class="keshihua-main xiangmu-main">

                <div class="search-wrap clearfix">
                    <span class="s1 fl">项目名称：</span>
                    <input type="text" class="fl input input1" />

                    <a class="search-btn">检索项目<span class="icon iconfont icon-sousuo"></span> </a>
                    <a class="search-btn addNewObject"> <span class="icon iconfont icon-zengjia"></span> 新建项目</a>
                </div>


                <div class="table">
                    <table class="keshihua-table" id="tableContent">
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" id="toggleAll">
                                    <span></span>
                                </th>
                                <th>项目名称</th>
                                <th>描述</th>
                                <th>操作</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="oddTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>
                            <tr class="evenTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>

                            <tr class="oddTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>
                            <tr class="evenTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>

                            <tr class="oddTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>
                            <tr class="evenTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>

                            <tr class="oddTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>
                            <tr class="evenTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>

                            <tr class="oddTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>
                            <tr class="evenTr">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai"></span></a>
                                    <a title="删除" class="shanchu"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>

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



            </div>
        </section>


        <div id="palette" class="palette animated" v-if="paletteShow">
            <div class="palette-list">
                <div class="title title1">整体风格设置</div>
                <div class="content1 clearfix">
                    <div class="flex flex1 fl" @click="themOne">
                        <p class="p1"></p>
                        <p class="p2"></p>
                        <i class="check checked"></i>
                    </div>
                    <div class="flex flex2 fl" @click="themTwo">
                        <p class="p1"></p>
                        <p class="p2"></p>
                        <i class="check"></i>
                    </div>
                </div>
            </div>

            <div class="btn-wrap clearfix">
                <a class="cannel-btn" @click="cancle">取消</a>
                <a class="success-btn" @click="confire">确认</a>
            </div>
        </div>



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

import commonHeade from '../components/header.vue'
    export default {
        name: "Project",
            data () {
                return {
                    msg: 'Welcome to Your Vue.js App',
                    paletteShow:false
                }
            },
            components:{
                commonHeade
            },
            mounted(){
            },
            methods: {
                themOne(){
                    this.GLOBAL.chooseTheme = JSON.parse(JSON.stringify(this.GLOBAL.themeConfig.dark))

                    less.modifyVars(JSON.parse(JSON.stringify(this.GLOBAL.chooseTheme)));
                },
                themTwo(){
                    this.GLOBAL.chooseTheme = JSON.parse(JSON.stringify(this.GLOBAL.themeConfig.white))
                    less.modifyVars(JSON.parse(JSON.stringify(this.GLOBAL.chooseTheme)));
                },
                cancle(){
                    this.paletteShow = false
                    this.GLOBAL.chooseTheme = JSON.parse(localStorage.getItem('themeRobot'));
                    less.modifyVars(this.GLOBAL.chooseTheme);
                },
                confire(){
                    this.paletteShow = false
                    localStorage.setItem('themeRobot', JSON.stringify(this.GLOBAL.chooseTheme));
                },
                togglePalette(val){
                    this.paletteShow = val
                }

            },
            created(){
                this.layer.alert(content, [options, yes]);
            }
    }
</script>
<style scoped src='../../assets/css/palette.css' ></style>
<style scoped src='../../assets/css/mypop.css' ></style>
<style scoped src='../../assets/js/layer/mobile/need/layer.css' ></style>
<style scoped src='../../assets/js/layer/mobile/need/layer.css' ></style>
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
.keshihua-table thead tr {
    background-image: linear-gradient(0deg, #323a7b, #323a7a);
    border-color: #505ba1;
}
.keshihua-table th {
    color: #8b9df9;
}
.keshihua-table tbody tr.oddTr {
    background-color: #23285a;
}
.keshihua-table tbody tr.evenTr {
    background-color: #1d2751;
}
.keshihua-table td {
    color: #b1c8fe;
    border-color: #505ba1;
}
.keshihua-table tr td input[type='checkbox'] + span, .keshihua-table th input[type='checkbox'] + span, .keshihua-table tr td input:checked + span, .keshihua-table th input:checked + span {
    background-image: url(http://127.0.0.1:5500/images/dark/dark-icon-all.png);
}
.ui-page-sort .right-tool .span-setting, .ui-page-sort .right-tool .span-number, .ui-page-sort .right-tool .span-number a, .ui-page-sort .right-tool .span-tool a {
    color: #838fa9;
}
</style>