export default{
    namespaced: true,
    state:{
        categorias:[]
    },
    getters:{
        getCategorias(state){
            console.log(state.categorias)
            return state.categorias
        }
    },
    mutations:{
        adicionarCategoria(state, payload){
            console.log(payload)
            state.categorias.push(payload)
        }
    }
}