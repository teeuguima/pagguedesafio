import {authenticator} from './auth'
// import {VueToast} from 'vue-toast-notification';
export default {
    namespaced: true,
    state:{
        usuarios:[{
            email: 'pizzariaLaPetit@mail.com',
            senha: 'soupaggue@123'
        }],
    },
    actions:{
        auth({state}, payload){  
            return authenticator.auth(state.usuarios, payload)
        },
        verificarUsuario({commit, dispatch}, payload){
            return dispatch('auth', payload)
            .then((promise) => {
                let result = promise
                console.log(result)
                if(!result){
                    commit('adicionarUsuario', payload)
                }
                return result
            })       
        }
    },
    getters:{
        getUsuarios(state){
            return state.usuarios
        }
    },
    mutations:{
        adicionarUsuario(state, payload){ 
            state.usuarios.push(payload)
        }
    }
}