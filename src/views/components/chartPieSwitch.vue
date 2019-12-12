
<template>
    <div class="pie-switch">
        <div v-if="showSwitch" class="switch-btn"><a @click="add" class="icon icon-add" href="javascript:void(0);"></a></div>
        <chart ref="echarts" :autoresize="autoresize" class="echarts" :initOptions="initOptions" :options="options"></chart>
        <div  v-if="showSwitch" class="switch-btn"><a @click="cut" class="icon icon-cut" href="javascript:void(0);"></a></div>
        <p v-if="nameText!=''" class="name">{{nameText}}</p>
    </div>
</template>

<script>
    import ECharts from 'vue-echarts/components/ECharts.vue'

    export default {
        name:"chartPieSwitch",
        data (){
            return{
                initOptions:{
                    // renderer:"svg"
                },
                autoresize:true
            }
        },
        props:{
            showSwitch:{
              type:Boolean,
              default:true,
            },
            value:{
                type:[String,Number],
                default:0,
            },
            max:{
                type:[String,Number],
                default:10,
            },
            colors:{
                type:[Array],
                require:true,
            },
            nameText:{
                type:String
            }
        },
        components:{
            chart:ECharts
        },
        computed:{
            theme:function(){
                return this.$store.state.theme
            },
            options:function(){
                return {
                    series:[
                        {
                            type: 'pie',
                            clockwise: true, //饼图的扇区是否是顺时针排布
                            minAngle: 2, //最小的扇区角度（0 ~ 360）
                            radius: ["70%", "80%"],
                            center: ["50%", "50%"],
                            avoidLabelOverlap: false,
                            animation:false,
                            color:this.colors,
                            itemStyle: { //图形样式
                                normal: {
                                },
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position:'center',
                                    fontSize:30,
                                    formatter:function(params){
                                        return params.data.value
                                    }
                                },
                                emphasis: {
                                    show: true,
                                }
                            },
                            data: [
                                {
                                    name:"未完成进度",
                                    value:this.max-this.value,
                                    label: {
                                        show:false
                                    },
                                    emphasis:{
                                        label:{
                                            show:false
                                        }
                                    }
                                },
                                {
                                    name:"完成进度",
                                    value:this.value,
                                }
                            ]
                        }
                    ]
                }
            }
        },
        mounted(){

        },
        methods:{
            cut:function(){
                let value=this.value;
                value--;
                if(value<0){
                    value=0;
                }
                this.value=value;
                this.$emit('change',this.value)
            },
            add:function(){
                let value=this.value;
                value++;
                if(value>this.max){
                    value=this.max;
                }
                this.value=value;
                this.$emit('change',this.value);
            }
        }
    }
</script>

<style lang="less" scoped>
    .pie-switch{
        position: relative;
        display: flex;
        height: 100%;
        min-height: 175px;
        flex-direction: column;
        .switch-btn{
            text-align: center;
            .icon{
                display: inline-block;
                vertical-align: middle;
                width: 20px;
                height: 20px;
                &.icon-cut{
                    background: url("../../assets/images/dark/icon-btn-cut.png") no-repeat;
                    background-size: cover;
                }
                &.icon-add{
                    background: url("../../assets/images/dark/icon-btn-add.png") no-repeat;
                    background-size: cover;
                }
            }
        }
        .name{
            text-align: center;
            font-size: 13px;
            color: #fff;
            height: 20px;
            line-height: 20px;
            margin-top: 5px;
        }
        .echarts{
           flex: 1;
            width: auto;
            height: auto;
        }
    }
</style>
