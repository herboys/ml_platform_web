import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/pages/Login.vue'
import Home from '../views/pages/Home'
import Visual from '../views/pages/Visual'
//import Project from '../views/pages/Project.vue'
import Explain from '../views/pages/Explain.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },

    {
        path: '/',
        name: Home,
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/visual',
                name: Visual,
                component: Visual,
                meta: {
                    title: '可视化'
                },
            },
            {
                path: '/explain',
                name: Explain,
                component: Explain,
                meta: {
                    title: '解释'
                },
            }
        ]
    },

    /*{
        path: '/project',
        name: Project,
        component: Project,
        meta: {
            title: '项目'
        }
    }*/
]

const router = new VueRouter({
    routes
})

export default router
