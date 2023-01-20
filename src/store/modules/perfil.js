export default{
    namespaced: true,
    state:{
        conta:null,
        pix: null,
        endereco:null,
        forma_pagamento:null,
    },
    getters:{
        getConta(state){
            return state.conta
        },
        getPix(state){
            return state.pix
        },
        getEndereco(state){
            return state.endereco
        },
        getFormaPagamento(state){
            return state.forma_pagamento
        }
    },
    mutations:{
        adicionarPerfil(state,payload){
            state.conta = payload.conta
            state.pix = payload.pix
            state.endereco = payload.endereco
            state.forma_pagamento.push(payload.forma_pagamento)
        }
    },
}