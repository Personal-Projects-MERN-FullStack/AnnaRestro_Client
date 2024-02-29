import {configureStore} from '@reduxjs/toolkit'
import authHandler from './handlers/auth-handler'
import UiHandler from './handlers/Ui-handler';
import MenuHandler from './handlers/Menu-handler';


const store = configureStore({
    reducer : { auth : authHandler, ui :UiHandler, menu : MenuHandler}
})
export default store;