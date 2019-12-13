<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: "APP",
        data() {
            return {
                username: "",
                userPassword: "",
                captcha: "",
                captchainput: "",
            }
        },
        mounted() {
            // getlogin().then(res=>{
            //     console.log(res)
            //     this.captcha='data:image/png;base64, '+res.captcha
            // })
        },
        methods: {},
        created() {
            var style = localStorage.getItem("style");
            if (style) {
                $("#style").attr("href", style); //实现将主题保存在内存中刷新浏览器不改变
            }
            if (sessionStorage.getItem("store")) {
                this.$store.replaceState(
                    Object.assign(
                        {},
                        this.$store.state,
                        JSON.parse(sessionStorage.getItem("store"))
                    )
                );
            }
            window.addEventListener("beforeunload", () => {
                sessionStorage.setItem("store", JSON.stringify(this.$store.state));
            });
        }

    }
</script>
<style lang="scss">
    #app, .wrapbody {
        height: 100%;
    }

    #app > div {
        height: 100%;
    }
</style>
