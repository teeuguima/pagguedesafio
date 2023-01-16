export default {
    namespaced: true,
    state:{
        clientes:[]
    },
    getters:{
        getClientes(state){
            return state.clientes
        }
    },
    mutations:{
        adicionarCliente(state, payload){
            console.log(payload)
            state.clientes.push(payload)
        }
    }
}