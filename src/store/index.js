import {configureStore} from '@reduxjs/toolkit'
import authHandler from './handlers/auth-handler'


const store = configureStore({
    reducer : { auth : authHandler}
})
export default store;