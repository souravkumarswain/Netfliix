import React, { useEffect } from 'react'
import { API_CONSTANTS } from '../utils/constants';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';
import MovieDescription from './MovieDescription';
import Header from './Header';

function MovieVideo({ movieId }) {
  useMovieTrailer(movieId);
  const videoData = useSelector((store)=>store.movies?.nowPlayingMoviesTrailer)
  const videoKey = videoData?.key
  // console.log(videoData?.key)
  return (
    <div className='scrollbar-none'>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + videoKey + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="autoplay; encrypted-media;"
        referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
  )
}

export default MovieVideo