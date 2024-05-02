import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    auth:false,
    authtoken:"",
    user:{},
    admin:{},
    sadmin:{}
}
const authhandler = createSlice({
    name : "auth",
    initialState,
    reducers:{
        Login(state,action,payload){
            state.auth = true
        },
        Logout(state,action,payload){
            state.auth = false
        },
        setauthtoken(state,action,payload){
            state.authtoken = action.payload
        },
        setuser(state,action,payload){
            state.user = action.payload
        },
        setadminuser(state,action,payload){
            state.admin = action.payload
        },
        setsadminuser(state,action,payload){
            state.sadmin = action.payload
        },
        adminLogout(state,action,payload){
            state.admin = {}
        },
        sadminLogout(state,action,payload){
            state.sadmin = {}
        },
    }
})
export default authhandler.reducer;
export const auth = authhandler.actions;