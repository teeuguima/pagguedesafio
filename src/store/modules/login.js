import authenticator from './auth'
import {router} from '../../router'
export default{
    namespaced: true,
    state:{
        usuarios:[{
            login: 'paggueadmin@mail.com',
            password: 'soupaggue@123'
        }]
    },
    mutations:{

    },
    actions:{
        auth(payload){
            let result = authenticator.auth(usuarios, payload)
            if(result){
                router.push('/home')
            }else{
                return false
            }
        }
    }
}