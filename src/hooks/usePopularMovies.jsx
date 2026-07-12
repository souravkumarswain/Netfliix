import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_CONSTANTS } from '../utils/constants';
import { addPopularMovies } from '../utils/moviesSlice';

function usePopularMovies() {
    const dispatch = useDispatch();
    useEffect(() => {
        getPopularMoviesApi()
    })

    const getPopularMoviesApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_CONSTANTS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))

    }
}

export default usePopularMovies;