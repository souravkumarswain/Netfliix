import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gptMovies',
    initialState:{
        showGptSearch: false
    },
    reducers:{
        toggleSearchMovies:(state,action)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }
});

export default gptSlice.reducer;

export const{toggleSearchMovies} = gptSlice.actions;