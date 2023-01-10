import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import CadastroClientes from './components/Cadastro-Cliente.vue'

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
    }]
})

export default router