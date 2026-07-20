import React, { useRef, useState } from 'react'
import { API_CONSTANTS, NETFLIX_BG_IMG } from '../utils/constants'
import ai from '../utils/gemini'
import { useDispatch } from 'react-redux'
import { addAiSearchedMovieResults } from '../utils/gptSlice'
import Shimmer from './Shimmer'


function GPTSearchBar() {
    const [showShimmer,setShowShimmer] = useState(false)
    const textSearched = useRef(null)
    const dispatch = useDispatch()

    const TMDBAiSearchedMovies = async(query) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+query+'&include_adult=false&language=en-US&page=1', API_CONSTANTS)
        const json = await data.json();
        return json.results;
    }

    const onClickSearch = async() => {
        let inputText = textSearched.current.value;
        setShowShimmer(true);
        const interaction = await ai.interactions.create({
            model: "gemini-3.5-flash",
            input: "act like a movie recomendation system which only takes input of user and suggest 5 movie names comma separated. suggest movies according to the requirement after colon:"+{inputText}+"ex:movie1, movie 2, movie 3, movie 4, movie 5",
        });
        //storing search results in array
        const aiSearchResults = interaction.output_text.split(',')
        //search these results in TMDB Db and get results from API call
        const TMDBPromiseResults = aiSearchResults.map(query => TMDBAiSearchedMovies(query))
        //resolve all promise
        const TMDBResults = await Promise.all(TMDBPromiseResults)
        dispatch(addAiSearchedMovieResults({aiMovieSuggestions:aiSearchResults,aiSearchedMovies:TMDBResults}));
        setShowShimmer(false);
    }
    return (
        <div className='flex flex-col items-center justify-between'>
            <img className="w-screen" src={NETFLIX_BG_IMG} alt="bg-pic" />
            <div className='w-2xl absolute top-60 bg-black p-4 opacity-80 text-white rounded-2xl'>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input ref={textSearched} className='mr-2 py-2 px-4 w-5/6 border-2 rounded' type="text" placeholder='Let me search movie for you!!' />
                    <button onClick={onClickSearch} className='bg-red-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer'>Search</button>
                </form>
                {showShimmer?<Shimmer/>:null}
            </div>
        </div>
    )
}

export default GPTSearchBar