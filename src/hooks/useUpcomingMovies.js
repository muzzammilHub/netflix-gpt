import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";


const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const movies = useSelector((store)=> store.movies.addUpcomingMovies);

    const getUpcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);

        const json = await data.json();

        dispatch(addUpcomingMovies(json.results));
  } 

  useEffect(()=>{
    !movies && getUpcomingMovies();
  },[]);
}

export default useUpcomingMovies;