<template>
    <div class="time-wrap fl" :class="[classNameUser]" >
        <i class="icon"></i>
        <input ref="timePick" v-model="value" type="text"  class="input" />
    </div>
</template>
<script>
    export default {
        name: "inputTimePick",
            data () {
                return {
                    value:"",
                }
            },

            computed:{
            },
            props:{
                classNameUser:{
                    type:String,
                    default:function(){
                        return ""
                    }
                },
                done:{
                    type:Function,
                }
            },
            created(){

            },
            mounted(){
                //调用时间
                laydate.render({
                    elem: this.$refs.timePick,
                    done: (value, date, endDate)=>{
                        this.$emit('done',value)
                    }
                });
            },
            methods: {

            }
    }
</script>
