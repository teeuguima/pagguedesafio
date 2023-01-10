export const auth = {
    authenticator
}

function authenticator(users, payload){
    users.forEach(user => {
        if(user.email == payload.email && user.password == payload.password){
            return true
        }
    });
}