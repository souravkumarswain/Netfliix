import React from 'react'
import MovieCard from './MovieCard'

function MoviesList({title,movieList}) {
  return (
    <div className='mb-6'>
    <h1 className='mb-4 text-lg font-bold text-white'>{title}</h1>
    <div className='flex overflow-x-scroll scrollbar-none'>
        <div className='flex'>
            {movieList?.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
    </div>
  )
}

export default MoviesList