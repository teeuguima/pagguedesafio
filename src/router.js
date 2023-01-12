import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import CadastroClientes from './components/Cadastro-Cliente.vue'
import Dashboard from './components/Dashboard.vue'

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
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }]
})

export default router