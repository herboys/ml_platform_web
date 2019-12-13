import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import * as getters from './getters.js'
export default new Vuex.Store({
    state: {
        token: null,
        theme: localStorage.getItem('theme') || 'dark',
        changeMenuTheme: [],
        changeMainTheme: [],
        taskitemlist: [],
        modelItem: {}
    },
    mutations: {
        changeTheme(state, theme) {
            state.theme = theme;
        },
        changeMenuTheme(state, theme) {
            state.menuTheme = theme;
        },
        changeMainTheme(state, mainTheme) {
            state.themeColor = mainTheme;
        },
        TASKITEMLIST(state, data) {
            // console.log(data, 'vuex')
            state.taskitemlist = data
        },
        modelItem(state, data) {
            // console.log(data, 'vuexdd')
            state.modelItem = data
        }
    },
    actions: {},
    modules: {},
    getters,
})