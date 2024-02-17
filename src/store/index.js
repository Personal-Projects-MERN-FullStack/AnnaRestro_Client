import {configureStore} from '@reduxjs/toolkit'
import authHandler from './handlers/auth-handler'
import UiHandler from './handlers/Ui-handler';


const store = configureStore({
    reducer : { auth : authHandler, ui :UiHandler}
})
export default store;