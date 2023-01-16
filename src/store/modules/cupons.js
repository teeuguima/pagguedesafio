export default{
    namespaced: true,
    state:{
        cupons:[],
    },
    getters:{
        getCupons(state){
            return state.cupons
        }
    },
    mutations:{
        adicionarCupom(state, payload){
            state.cupons.push(payload)
        }
    }
}