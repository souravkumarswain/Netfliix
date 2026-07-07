import { configureStore } from "@reduxjs/toolkit";
import userData from './userSlice'

const userStore = configureStore({
    reducer:{
        user:userData
    }
})

export default userStore;