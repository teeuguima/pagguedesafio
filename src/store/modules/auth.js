// import {login} from "./login";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const authenticator = {
    auth,
    
}

function auth(users, payload){
    console.log(payload)
    let token
    users.forEach(user => {
        console.log(user)
        if(user.email === payload.email && user.senha === payload.senha){
            token = true
        }else{
            token = false
        }
    })
    return token
}
