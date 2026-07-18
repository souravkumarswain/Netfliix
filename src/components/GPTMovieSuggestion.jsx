import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

function GPTMovieSuggestion() {
  const {aiMovieSuggestions,aiSearchedMovies} = useSelector(store => store.gptData)
  if(!aiMovieSuggestions) return null;
  // console.log(aiMovieSuggestions,aiSearchedMovies)
  return (
    <div  className='-mt-60'>
      <div className=' px-8 py-4 text-white'>
      {
        aiMovieSuggestions?.map((movieName,index) => 
          <MoviesList key = {movieName} title={movieName} movieList = {aiSearchedMovies[index]}/>
        )
      }
    </div>
    </div>
  )
}

export default GPTMovieSuggestion