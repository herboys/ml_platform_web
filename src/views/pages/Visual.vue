<template>
    <div>
        <section id="main">
            <div class="keshihua-main">

                <div class="search-wrap clearfix">
                    <span class="s1 fl">数据集名称：</span>
                    <input type="text" class="fl input input1" />
                    <span class="s1 fl">项目类型：</span>
                    <div class="select-con fl">
                        <i class="icon"></i>
                        <select class="select">
                            <option value="">高血压</option>
                        </select>
                    </div>
                    <span class="s1 fl">时间选择：</span>
                    <input-time-pick @done="changeStartTime" class-name-user="aaa"></input-time-pick>

                    <span class="fl line">-</span>

                    <input-time-pick @done="changeEndTime"></input-time-pick>

                    <a class="search-btn">查询<i class="icon"></i></a>
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
                            <th>数据集名称</th>
                            <th>信息</th>
                            <th>预计运行时间</th>
                            <th>状态</th>
                            <th>操作</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr data-control="1" class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a @click="dialogDelete" class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>

                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>

                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>

                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>

                        <tr class="oddTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status finished">已完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
                            </td>
                        </tr>
                        <tr class="evenTr">
                            <td><input type="checkbox" /><span class="toggle"></span></td>
                            <td>高血压数据</td>
                            <td>medcine</td>
                            <td>可视化就绪</td>
                            <td>03:25:12</td>
                            <td class="status notFinished">未完成</td>
                            <td class="handle">
                                <a class="look">查看</a>
                                <a class="del"><span class="iconfont icon-shanchu"></span></a>
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

        <!-- 弹窗删除 -->
        <div class="alert-box" ref="alertBoxDel" id="alert-box-del" style="display: none;">
            <div class="title text-c">
                <span @click="closeDialog" class="close iconfont icon-cross-fill"></span>
            </div>
            <div class="content alert-box-content">
                <p class="content-title">确定要删除此可视化项目？</p>
                <div class="btn-wrap clearfix">
                    <button @click="closeDialog" class="btn cancelBtn fl">取消</button>
                    <button @click="closeDialog" class="btn okBtn fr">确认</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import inputTimePick from '../components/inputTimePick'
    export default  {
        data(){
            return {
                startTime:"",
                endTime:"",
            }
        },
        components:{inputTimePick},
        methods:{
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
                    area: [1000, 1000], //宽高
                    content: $('#alert-box-del'),
                });
            },
            closeDialog(){
                layer.closeAll();
            }
        }
    }
</script>
