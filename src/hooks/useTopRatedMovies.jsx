import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_CONSTANTS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/moviesSlice';

function useTopRatedMovies() {
    const dispatch = useDispatch();
    useEffect(() => {
        getTopRatedMoviesApi()
    })

    const getTopRatedMoviesApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_CONSTANTS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))

    }
}

export default useTopRatedMovies;