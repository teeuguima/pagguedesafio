export default{
    namespaced: true,
    state:{
        conta:null,
        pix: null,
        endereco:null,
        forma_pagamento:null,
    },
    getters:{
    },
    mutations:{
        adicionarConta(state,payload){
            state.conta = payload.conta
            state.pix = payload.pix
            state.endereco = payload.endereco
            state.forma_pagamento.push(payload.forma_pagamento)
        }
    },
}