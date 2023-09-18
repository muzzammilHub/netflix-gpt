import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    
    const movies = useSelector((store)=> store.movies.addTopRatedMovies);

    const getTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)

        const json = await data.json();

        // console.log(json);

        dispatch(addTopRatedMovies(json.results));
  } 

  useEffect(()=>{
    !movies && getTopRatedMovies();
  },[]);
}

export default useTopRatedMovies;