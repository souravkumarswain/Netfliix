import React from 'react'
import { useSelector } from 'react-redux';
import MovieDescription from './MovieDescription';
import MovieVideo from './MovieVideo';

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if(!movies) return

  let firstMovie = movies[0];
  const{original_title,overview, id} = firstMovie;
  return (
    <div>
      <MovieDescription title = {original_title} description = {overview}/>
      <MovieVideo title = {original_title} description = {overview} movieId={id}/>
    </div>
  )
}

export default MainContainer;