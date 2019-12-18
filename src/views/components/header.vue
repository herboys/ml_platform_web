<template>
    <div>
        <header id="header" class="clearfix">
            <ul class="fl clearfix">
                <b id="line"></b>
                <li  class="fl" :class="{active:checkNavIndex==index}" v-for="(item,index) in navList" :key="index">
                    <router-link :to="{path:item.path}">{{item.name}}</router-link>
                   <!--<a href="javascript:void(0);">{{item.name}}</a>-->
                </li>
            </ul>
            <div class="fr userInfo clearfix">
                <div @click="showLoginout"><i class="icon person fl" ></i> <span class="fl">管理员，欢迎你！</span><i class="icon down fl" ></i></div>
                <a class="loginInOut text-c" v-show="isShowloginout">退出</a>
            </div>

            <div class="header-right clearfix">
                <i class="house-icon fl"></i>
                <span class="fl span1" @click="triggerTheme" ref="changeTehme">换肤设置
                    <i class="arrow" :class="{'arrow-down':!showTheme,'arrow-up':showTheme}"></i>
                    <!--<i class="arrow arrow-down" ref="arrow" v-show="isShow"> </i>-->
                    <!--<i class="arrow arrow-up" ref="arrow" v-show="!isShow"> </i>-->
                </span>

                <div v-show="showTheme" id="palette" class="palette animated">
                    <div class="palette-list">
                        <div class="title title1">整体风格设置</div>

                        <div class="content1 clearfix">
                            <div @click="changeTheme('dark')" class="flex flex1 fl">
                                <p class="p1"></p>
                                <p class="p2"></p>
                                <i class="check" :class="{checked:theme=='dark'}"></i>
                            </div>
                            <div @click="changeTheme('white')" class="flex flex2 fl">
                                <p class="p1"></p>
                                <p class="p2"></p>
                                <i class="check" :class="{checked:theme=='white'}"></i>
                            </div>
                            <div @click="changeTheme('black')" class="flex flex3 fl">
                                <p class="p1"></p>
                                <p class="p2"></p>
                                <i class="check" :class="{checked:theme=='black'}"></i>
                            </div>
                        </div>
                    </div>

                    <div class="btn-wrap clearfix">
                        <a @click="cancelTheme" class="cannel-btn text-c">取消</a>
                        <a @click="sureTheme" class="success-btn text-c">确认</a>
                    </div>

                </div>
            </div>

        </header>
      <!--  <div id="palette" class="palette animated" v-show="paletteShow">
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
                    <div class="flex flex3 fl">
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
        </div>-->
    </div>
</template>
<script>
    export default {
        name: "Header",
            data () {
                return {
                    msg: 'Welcome to Your Vue.js App',
                    themeOld:"",
                    showTheme:false,
                    themeBox:false,
                    isShowloginout:false,
                    paletteShow:false
                }
            },
            created(){

            },
            computed:{
                theme:function(){
                    return this.$store.state.theme
                },
                checkNavIndex(){
                   // console.log(path);
                    let path=this.$route.fullPath;
                    let checkNavIndex=0;
                    this.navList.forEach((value,index)=>{
                        if(path==value.path){
                            checkNavIndex=index;
                        }
                    });
                    return checkNavIndex;
                },
            },
            mounted(){
                //this.theme=theme;
                console.log(this.$route.fullPath);

                this.init();
            },
            props:{
                isShow:{
                    type:Boolean,
                    default:false
                },
                navList:{
                    type:Array,
                    default:function(){
                        return [
                            {
                                name:'项目',
                                path:'/project',
                            },
                            {
                                name:'数据集',
                                path:'/dataSet',
                            },
                            // {
                            //     name:'可视化',
                            //     path:'/visual',
                            // },
                            // {
                            //     name:'模型',
                            //     path:'/model',
                            // },
                            // {
                            //     name:'评估',
                            //     path:'/assess',
                            // },
                            // {
                            //     name:'解释',
                            //     path:'/explain',
                            // },
                            {
                                name:'部署',
                                path:'',
                            },
                        ]
                    }
                },
            },
            methods: {
                init(){
                    let that=this;
                    that.lineFn("#header li.active");

                    $("#header li").on("click", function(el) {
                        var _this = $(this);
                        that.lineFn(_this);
                    })

                    $("#header li").on("mouseover", function(el) {
                        var _this = $(this);
                        var left = _this.position().left;
                        var width = _this.width();
                        $("#line").css({
                            "left": left + 20,
                            "width": width - 40
                        })
                    })

                    $("#header li").on("mouseout", function(el) {
                        var left = $("#header .active").position().left;
                        var width = $("#header .active").width();
                        $("#line").css({
                            "left": left + 20,
                            "width": width - 40
                        })
                    })
                },
                lineFn(obj) {
                    var left = $(obj).position().left;
                    var width = $(obj).width();
                    $(obj).addClass("active").siblings("li").removeClass("active");
                    $("#line").css({
                        "left": left + 20,
                        "width": width - 40
                    })
                },
                triggerTheme(){
                   this.showTheme=!this.showTheme;
                },
                changeTheme(theme){
                    //chooseTheme
                    //console.log(theme);
                    chooseTheme = themeConfig[theme];
                    //console.log(chooseTheme);
                   // this.theme=theme;
                    this.themeOld=this.theme;
                    this.$store.commit('changeTheme',theme);
                    less.modifyVars({...chooseTheme});
                },
                cancelTheme(){
                    this.$store.commit('changeTheme',this.themeOld);
                    chooseTheme = JSON.parse(localStorage.getItem('themeRobot'));
                    this.showTheme=false;
                    less.modifyVars(chooseTheme);
                },
                sureTheme(){
                    this.showTheme=false;
                    localStorage.setItem('theme', this.theme);
                    localStorage.setItem('themeRobot', JSON.stringify(chooseTheme));
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
