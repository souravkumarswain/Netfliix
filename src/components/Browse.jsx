import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GPTContainer from './GPTContainer';

const Browse = () => {
 useNowPlayingMovies()
 usePopularMovies()
 useTopRatedMovies()
 useUpcomingMovies()
 const gptSearch = useSelector(store=> store.gptData.showGptSearch)
  return (
    <div className="flex flex-col">
      {gptSearch ? <GPTContainer/> :<div>
        <MainContainer/>
        <SecondaryContainer/>
      </div>}
      
      <Header/>
    </div>
    
  )
}

export default Browse;