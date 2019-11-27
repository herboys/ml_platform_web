import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import restCss from './assets/css/reset.css'
import publicCss from './assets/css/public.css'
import mainCss from './assets/css/main.css'
import mypopCss from './assets/css/mypop.css'

import echarts from 'echarts'
import iconFont from './assets/aliIcon/iconfont.css'
import qs from 'qs'
Vue.prototype.$qs = qs
Vue.prototype.$echarts = echarts
import axios from './api/ajax'



//VueSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

// 引用全局变量
import globalVariable from '../src/assets/js/globalVal.js'
Vue.prototype.GLOBAL = globalVariable

// 设置title
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')