<template>
  <div id="login-wrap" class="note"  >

        <div class="login-box-wrap">
            <div class="login-box">
                <div class="bg-bottom"></div>
                <div class="bg-top"></div>
                <div class="login-box-title">
                     <img src="../../assets/images/public/login-title.png" />
<!--                    <img :src="captcha" />-->
                </div>
                <p class="userName">
                    <i class="icon user"></i><input type="text" v-model="username" class="input" placeholder="用户名">
                </p>
                <p class="userPassword">
                    <i class="icon psw"></i><input type="password" v-model="userPassword" class="input" placeholder="密码">
                </p>
                <p id="check" class="check">
                    <label>
                    <i class="icon iconfont icon-weigouxuan"></i>
                    记住密码
                </label>
                </p>
                <p> <router-link :to="{path:'/project'}" id="login">登 录</router-link></p>
            </div>
        </div>
        <div class="bg2"></div>
        <div class="info">
            <ul class="info-list">
                <li>秉承“智应用、易操作”的智能设计理念，集数据处理、数据可视化、模型探索为一体</li>
                <li>配备强大后台引擎及大数据处理能力，并提供海量封装算法及可视化图形</li>
                <li>让每个人都能实现最大化挖掘数据中的价值，用数据支撑决策，为平台提供高效决策分析</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getlogin} from '../../api/api'
    export default {
        name: "LOgin",
        data(){
            return{
                username:"",
                userPassword:"",
                captcha:"",
                captchainput:"",
            }
        },
        mounted() {
            // getlogin().then(res=>{
            //     console.log(res)
            //     this.captcha='data:image/png;base64, '+res.captcha
            // })
        },
        methods:{
        }
    }
</script>

<style scoped src='../../assets/css/animate.min.css'></style>
<style src="../../assets/aliIcon/iconfont.css"></style>
<style scoped src='../../assets/css/login.css' ></style>

<style lang="less" scoped>

</style>
