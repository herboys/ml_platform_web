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
                    <i class="arrow arrow-down" ref="arrow" v-show="paletteShow"> </i>
                    <i class="arrow arrow-up" ref="arrow" v-show="!paletteShow"> </i>
                </span>
            </div>


        </header>
        <div id="palette" class="palette animated" v-show="paletteShow">
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
    </div>
</template>
<script>
    export default {
        name: "Header",
            data () {
                return {
                    msg: 'Welcome to Your Vue.js App',
                    themeBox:false,
                    isShowloginout:false,
                    paletteShow:false
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
                    // this.$emit('showPalette',!this.isShow)
                    this.paletteShow = !this.paletteShow
                    console.log(this.paletteShow)
                },
                showLoginout(){
                    this.isShowloginout = !this.isShowloginout
                },
                cancle(){
                    this.paletteShow = false
                    
                },
                confire(){
                    this.paletteShow = false
                },
                themOne(){
                    
                },
                themTwo(){
                },
            }
    }
</script>
<style scoped src='../../assets/css/palette.css' ></style>
<style scoped src='../../assets/css/header.css' ></style>
<style scoped lang="less">
#header{
    background:#254b9e url('../../assets/images/public/headbg.png') no-repeat;

}
</style>