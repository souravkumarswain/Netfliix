import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMoviesTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    useEffect(() => {
    getMovieVideos();
  },[])
  const getMovieVideos = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_CONSTANTS);
    const json = await data.json();
    const trailer = json.results[18]
    dispatch(addNowPlayingMoviesTrailer(json ? trailer : json.results[0]))
  }
}

export default useMovieTrailer;