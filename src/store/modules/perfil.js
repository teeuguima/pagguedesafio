export default{
    namespaced: true,
    state:{
        conta:null,
        pix: null,
        endereco:null,
        forma_pagamento:[],
        registro: false,
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
        },
        getRegistro(state){
            return state.registro
        }
    },
    mutations:{
        alterarPerfil(state,payload){
            console.log(payload)
            state.conta = payload.conta
            state.pix = payload.pix
            state.endereco = payload.endereco
            state.forma_pagamento.push(payload.forma_pagamento)
            state.registro = true
        },
    },
}