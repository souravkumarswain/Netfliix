import React from 'react';
import {useEffect} from 'react';
import Header from './Header';
import { API_CONSTANTS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice'

const Browse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMoviesApi()
  })

  const getNowPlayingMoviesApi = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing',API_CONSTANTS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))

  }
  return (
    <div className="flex flex-col">
      <Header/>
      <div>Browse the movies</div>
    </div>
    
  )
}

export default Browse;