import {auth} from '../handlers/auth-handler'




export const LoginHandler = (logindata)=>{
    return async (dispatch) =>{
        console.log(auth.auth)
       
    }
}
export const SignupHandler = (logindata)=>{
    return async (dispatch) =>{
        if(logindata.email === 'vaibhav@gmail.com'){
            dispatch(auth.Login())
        }
    }
}