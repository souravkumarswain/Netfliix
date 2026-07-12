import React from 'react'
import { PLAY_ICON } from '../utils/constants'

function MovieDescription({title,description}) {
  return (
    <div className=' absolute w-screen aspect-video text-white bg-linear-to-r from-black pl-4'>
        <h1 className='text-5xl font-bold mb-4 ml-20 my-50'>{title}</h1>
        <p className='mb-6 font-bold ml-20 w-xl'>{description}</p>
        <div className='flex ml-20'>
            <button className=' flex items-center mr-4 bg-white text-black font-bold py-2 px-4 rounded hover:cursor-pointer'><span className='mr-2'><img className="w-8" src={PLAY_ICON} alt="play-icon" /></span> Play</button>
            <button className='mr-4 bg-white text-black font-bold py-2 px-4 rounded hover:cursor-pointer'>More info</button>
        </div>
    </div>
  )
}

export default MovieDescription