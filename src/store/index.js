import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        theme: localStorage.getItem('theme')||'dark',
        changeMenuTheme: [],
        changeMainTheme: []
    },
    mutations: {
        changeTheme(state,theme){
            state.theme = theme;
        },
        changeMenuTheme(state, theme) {
            state.menuTheme = theme;
        },
        changeMainTheme(state, mainTheme) {
            state.themeColor = mainTheme;
        }
    },
    actions: {},
    modules: {}
})
