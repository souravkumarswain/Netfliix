import { configureStore } from "@reduxjs/toolkit";
import userData from './userSlice';
import movieData from './moviesSlice';
import gptSearchData from './gptSlice';
import langData from './langSlice'; 


const userStore = configureStore({
    reducer:{
        user:userData,
        movies:movieData,
        gptData:gptSearchData,
        lang:langData
    }
})

export default userStore;