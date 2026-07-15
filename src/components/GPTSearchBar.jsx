import React from 'react'
import { NETFLIX_BG_IMG } from '../utils/constants'

function GPTSearchBar() {
  return (
    <div>
        <img className="" src={NETFLIX_BG_IMG} alt="bg-pic" />
        <div className='w-2xl absolute top-60 left-70 bg-black p-4 opacity-80 text-white rounded-2xl'>
            <form action="">
                <input className='mr-2 py-2 px-4 w-5/6 border-2 rounded' type="text" placeholder='Let me search movie for you!!' />
                <button className='bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default GPTSearchBar