import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login.js'
import cliente from './modules/cliente'
import produtos from './modules/produtos'
import categorias from './modules/categorias.js'
import cupons from './modules/cupons.js'
Vue.use(Vuex)

export default new Vuex.Store({
    State:{},
    modules:{
        login,
        cliente,
        produtos,
        categorias,
        cupons
    },
})