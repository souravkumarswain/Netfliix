import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        nowPlayingMoviesTrailer:null
    },
    reducers:{
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload
        },
        addNowPlayingMoviesTrailer : (state,action) => {
            state.nowPlayingMoviesTrailer = action.payload
        }
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies, addNowPlayingMoviesTrailer} = movieSlice.actions;