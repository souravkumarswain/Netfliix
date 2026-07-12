import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_CONSTANTS } from '../utils/constants';
import { addUpcomingMovies } from '../utils/moviesSlice';

function useUpcomingMovies() {
    const dispatch = useDispatch();
    useEffect(() => {
        getUpcomingMoviesApi()
    })

    const getUpcomingMoviesApi = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_CONSTANTS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))

    }
}

export default useUpcomingMovies;