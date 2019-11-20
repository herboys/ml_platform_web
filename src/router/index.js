import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/pages/Login.vue'
import Home from '../views/pages/Home'
import Project from '../views/pages/Project.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/Home',
        name: Home,
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/project',
        name: Project,
        component: Project,
        meta: {
            title: '项目'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router