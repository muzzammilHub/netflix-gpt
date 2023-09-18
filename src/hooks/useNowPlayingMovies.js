import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const movies = useSelector((store)=> store.movies?.nowPlayingMovies);

    const getNowPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        // const movies = useSelector((store)=> store.movies.nowPlayingMovies);

        const json = await data.json();

        // console.log("data",json);

        dispatch(addNowPlayingMovies(json.results));
        
    }

    useEffect(()=>{
        !movies && getNowPlayingMovies();
    },[]);

}

export default useNowPlayingMovies;