<template>
    <div>
        <section id="main">
            <div class="keshihua-main">
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
                            <tr v-for="(item,index) in 10" :key="index">
                                <td><input type="checkbox" /><span class="toggle"></span></td>
                                <td>高血压数据</td>
                                <td>S/N</td>
                                <td class="handle">
                                    <a title="数据集" class="wenjian"><span class="icon iconfont icon-wenjian"></span></a>
                                    <a title="修改" class="xiugai"><span class="icon iconfont icon-xiugai" @click="dialogShow = true"></span></a>
                                    <a title="删除" class="shanchu" @click="deleteProject"><span class="iconfont icon-shanchu"></span></a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <el-dialog  title="修改新项目"  :visible.sync="dialogShow" :center="true">
                        <el-form :model="updateProjectform">
                            <el-form-item label="修改名称" :label-width="formLabelWidth">
                                <el-input v-model="updateProjectform.name" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="修改描述" :label-width="formLabelWidth">
                                <el-form-item >
                                    <el-input type="textarea" v-model="updateProjectform.desc" ></el-input>
                                </el-form-item>
                            </el-form-item>
                            
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="updateProject()">修 改</el-button>
                            <el-button @click="dialogShow = false">取 消</el-button>
                            
                        </div>
                    </el-dialog>

                    
                </div>
            </div>
        </section>
        
    </div>
</template>
<script>
    export default {
        name: "Table",
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                dialogShow:false,
                updateProjectform: {
                    name: '',
                    delivery: false,
                    desc: '',
                },
                formLabelWidth: '100%',
            }
        },
        mounted(){
        },
        methods: {
            updateProject(){
                var obj = this.updateProjectform
                if(!obj.name || !obj.desc){
                    this.$alert('请输入修改名称和修改描述', '提示', {
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
            deleteProject(){
                this.$confirm('确定要删除此可视化项目?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        // type: 'warning',
                        dangerouslyUseHTMLString: true
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });

                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                });
            },
        }
    }
</script>

<style scoped lang="less">
.keshihua-table thead tr {
    background-image: linear-gradient(0deg, #323a7b, #323a7a);
    border-color: #505ba1;
}
.keshihua-table tr td, .keshihua-table th {
    position: relative;
}
.keshihua-table tr td:first-child{
    width: 84px;
}
.keshihua-table tr td:nth-child(2){
    width: 503px;
}
.keshihua-table tr td:last-child{
    width: 251px;
}
.keshihua-table th {
    color: #8b9df9;
}
.keshihua-table tbody tr:nth-child(odd) {
    background-color: #23285a;
}
.keshihua-table tbody tr:nth-child(even) {
    background-color: #1d2751;
}
.keshihua-table td {
    color: #b1c8fe;
    border-color: #505ba1;
    border-style: solid;
    border-width: 1px;
    /* color: #333; */
    font-size: 13px;
}
.keshihua-table tr td input[type='checkbox'] + span, .keshihua-table th input[type='checkbox'] + span, .keshihua-table tr td input:checked + span, .keshihua-table th input:checked + span {
    background-image: url(http://127.0.0.1:5500/images/dark/dark-icon-all.png);
}
</style>