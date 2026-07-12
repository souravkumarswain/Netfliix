import React from 'react'
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {
  const movies = useSelector(store => store.movies)
  return (
    movies &&
    <div className='bg-black'>
      <div className='-mt-60 relative z-10 p-6'>
      <MoviesList title={`Today's Top Picks for You`} movieList = {movies.nowPlayingMovies}/>
      <MoviesList title={`We Think You'll Love These`} movieList = {movies.popularMovies}/>
      <MoviesList title={'Top Rated'} movieList = {movies.topRatedMovies}/>
      <MoviesList title={'Upcoming to Netflix'} movieList = {movies.upComingMovies}/>
      <MoviesList title={'Now Playing'} movieList = {movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;