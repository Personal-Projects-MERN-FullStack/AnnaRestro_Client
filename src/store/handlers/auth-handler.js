import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    auth:false,
    authtoken:"",
    user:{}
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
        }
    }
})
export default authhandler.reducer;
export const auth = authhandler.actions;