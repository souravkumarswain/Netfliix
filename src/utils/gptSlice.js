import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gptMovies',
    initialState:{
        showGptSearch: false,
        aiSearchedMovies:null,
        aiMovieSuggestions:null,
    },
    reducers:{
        toggleSearchMovies:(state,action)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addAiSearchedMovieResults:(state,action)=>{
            const{aiSearchedMovies,aiMovieSuggestions} = action.payload
            state.aiMovieSuggestions = aiMovieSuggestions;
            state.aiSearchedMovies = aiSearchedMovies;
        },
    }
});

export default gptSlice.reducer;

export const{toggleSearchMovies,addAiSearchedMovieResults} = gptSlice.actions;