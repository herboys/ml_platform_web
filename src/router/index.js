import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/pages/Login.vue'
import Home from '../views/pages/Home'
import Visual from '../views/pages/Visual'
import Project from '../views/pages/Project.vue'
import projectDetail from '../views/pages/projectDetail.vue'
import Explain from '../views/pages/Explain.vue'
import DataSet from '../views/pages/dataSet.vue'
import DataSetDetail from '../views/pages/dataSetDetail.vue'
import VisualTwoLevel from '../views/pages/VisualTwoLevel.vue'
import VisualTwoLevelStaticState from '../views/pages/VisualTwoLevelStaticState.vue'
import assess from '../views/pages/assess.vue'



import assessDetail from '../views/pages/assessDetail.vue'

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
        children: [{
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
            },
            {
                path: '/dataSet',
                name: DataSet,
                component: DataSet,
                meta: {
                    title: '数据集'
                },
            },
            {
                path: '/',
                name: Project,
                component: Project,
                meta: {
                    title: '项目'
                }
            },
            {
                path: '/project',
                name: Project,
                component: Project,
                meta: {
                    title: '项目'
                }
            },
            {
                path: '/projectDetail',
                name: projectDetail,
                component: projectDetail,
                meta: {
                    title: '项目详情'
                }
            },
            {
                path: '/DataSetDetail',
                name: DataSetDetail,
                component: DataSetDetail,
                meta: {
                    title: '数据集详情'
                }
            },
            {
                path: '/VisualTwoLevel',
                name: VisualTwoLevel,
                component: VisualTwoLevel,
                meta: {
                    title: '可视化二级页面'
                }
            },
            {
                path: '/VisualTwoLevelStaticState',
                name: VisualTwoLevelStaticState,
                component: VisualTwoLevelStaticState,
                meta: {
                    title: '可视化二级页面'
                }
            },
            {
                path: '/assess',
                name: assess,
                component: assess,
                meta: {
                    title: '评估'
                }
            },
            {
                path: '/assessDetail',
                name: assessDetail,
                component: assessDetail,
                meta: {
                    title: '评估详情'
                }
            }
        ]
    },


]

const router = new VueRouter({
    routes
})

export default router