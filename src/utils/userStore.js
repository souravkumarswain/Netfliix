import { configureStore } from "@reduxjs/toolkit";
import userData from './userSlice';
import movieData from './moviesSlice'


const userStore = configureStore({
    reducer:{
        user:userData,
        movies:movieData
    }
})

export default userStore;