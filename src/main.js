import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


require('./assets/css/reset.css')
require('./assets/css/public.css')
require('./assets/css/palette.css')
require('./assets/css/main.css')
require('./assets/css/mypop.css')

import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import axios from './api/ajax'

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
