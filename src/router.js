import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import CadastroClientes from './components/Cadastro-Cliente.vue'
import Dashboard from './components/Dashboard.vue'
import Produtos from './components/Produtos.vue'
import Cupons from './components/Cupons.vue'
import Categorias from './components/Categorias.vue'
import Loja from './components/Loja.vue'
import Home from './components/Home.vue'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes:[{
        path: '/',
        name: 'login',
        component: Login
    },{
        path: '/registro-cliente',
        name: 'cadastro-cliente',
        component: CadastroClientes
    },{
        path: '/produtos',
        name: 'produtos',
        component: Produtos
    },{
        path: '/cupons',
        name: 'cupons',
        component: Cupons
    },{
        path: '/categorias',
        name: 'categorias',
        component: Categorias
    },{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },{
        path: '/loja',
        name: 'loja',
        component: Loja
    },{
        path: '/home',
        name: 'home',
        component: Home
    }]
})

export default router