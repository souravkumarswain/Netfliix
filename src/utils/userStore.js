import { configureStore } from "@reduxjs/toolkit";
import userData from './userSlice';
import movieData from './moviesSlice';
import gptSearchData from './gptSlice'; 


const userStore = configureStore({
    reducer:{
        user:userData,
        movies:movieData,
        gptData:gptSearchData
    }
})

export default userStore;