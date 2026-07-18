import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'

function GPTContainer() {
  return (
    <div className='flex flex-col bg-black'>
        <GPTSearchBar/>
        <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTContainer