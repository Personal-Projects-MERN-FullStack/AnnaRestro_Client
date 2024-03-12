import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    menu:null,
    
}
const menuhandler = createSlice({
    name : "menu",
    initialState,
    reducers:{
        setmenu(state,action,payload){
            // console.log(action.payload,"inside store")
            state.menu = action.payload
        }
    }
})
export default menuhandler.reducer;
export const menu = menuhandler.actions;