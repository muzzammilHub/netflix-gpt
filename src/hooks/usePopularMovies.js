import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";


const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const movies = useSelector((store)=> store.movies.addPopularMovies);

    const getPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);

        const json = await data.json();

        dispatch(addPopularMovies(json.results));
  } 

  useEffect(()=>{
    !movies && getPopularMovies();
  },[]);
}

export default usePopularMovies;