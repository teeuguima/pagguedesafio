export default {
    namespaced: true,
    state:{
        produtos: [],
    },
    getters:{
        getProdutos(state){
            return state.produtos
        }
    },
    mutations:{
        adicionarProdutos(state, payload){
            console.log(payload)
            state.produtos.push(payload)
        }
    }

}