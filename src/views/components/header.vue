<template>
    <div>
        <header id="header" class="clearfix">
            <ul class="fl clearfix">
                <b id="line"></b>
                <li class="fl active">
                    <a href="项目.html">项目</a>
                </li>
                <li class="fl">
                    <a href="javascript:;">数据集</a>
                </li>
                <li class="fl">
                    <a href="可视化.html">可视化</a>
                </li>
                <li class="fl">
                    <a href="javascript:;">模型</a>
                </li>
                <li class="fl">
                    <a href="javascript:;">评估</a>
                </li>
                <li class="fl">
                    <a href="解释.html">解释</a>
                </li>
                <li class="fl">
                    <a href="javascript:;">部署</a>
                </li>
            </ul>

            <div class="fr userInfo clearfix">
                <div @click="showLoginout"><i class="icon person fl" ></i> <span class="fl">管理员，欢迎你！</span><i class="icon down fl" ></i></div>
                
                <a class="loginInOut text-c" v-show="isShowloginout">退出</a>
            </div>



            <div class="header-right clearfix">
                <i class="house-icon fl"></i>
                <span class="fl span1" @command="changeColor" @click="changeTheme(this)" ref="changeTehme">换肤设置 
                    <i class="arrow arrow-down" ref="arrow" v-show="isShow"> </i>
                    <i class="arrow arrow-up" ref="arrow" v-show="!isShow"> </i>
                </span>
            </div>


        </header>
        <!-- <div class="header">头部</div>
        <el-dropdown  class="colorBtn " trigger="click"  @command="changeColor">
            <span class="el-dropdown-link " >换肤</span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a"  @click="change_type(a)">梦幻粉</el-dropdown-item>
            <el-dropdown-item command="b"  @click="change_type(b)">天空蓝</el-dropdown-item>
            <el-dropdown-item command="c"  @click="change_type(c)">雾霾灰</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown> -->
    </div>
</template>
<script>
    export default {
        name: "Header",
            data () {
                return {
                    msg: 'Welcome to Your Vue.js App',
                    themeBox:false,
                    isShowloginout:false
                }
            },
            mounted(){
            },
            props:{
                isShow:{
                    type:Boolean,
                    default:false
                }
            },
            methods: {
                changeColor(command){
                  
                    document.getElementById('app').className ='theme'+command ;
                },
                changeTheme(e){
                    var hasCss = this.$refs.arrow.className.split(',')
                    this.$emit('showPalette',!this.isShow)
                    console.log(this.isShow)
                },
                showLoginout(){
                    this.isShowloginout = !this.isShowloginout
                }
            }
    }
</script>
<style scoped src='../../assets/css/header.css' ></style>
<style scoped lang="less">
#header{
    background:#254b9e url('../../assets/images/public/headbg.png') no-repeat;

}
</style>