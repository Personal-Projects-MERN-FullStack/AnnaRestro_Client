import { menu } from "../handlers/Menu-handler"



export const setMenu = (data)=>{
    return async (dispatch) =>{
        dispatch(menu.setmenu(data));
    }
}