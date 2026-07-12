import React from 'react'
import { MOVIE_POSTER_URL } from '../utils/constants'

function MovieCard({movie}) {
    const {poster_path} = movie
  return (
    <div className='mr-2 w-40'>
        <img className='' src={MOVIE_POSTER_URL+poster_path} alt = "movie_poster"/>
    </div>
  )
}

export default MovieCard