import { useDispatch } from "react-redux";
import { useEffect} from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";


const useMovieTrailer = (id)=>{
    const dispatch = useDispatch(); 
    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);

    const getMovieTrailer = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);

        const json = await data.json();

        const filterData = json.results.filter((video)=> video.type == "Trailer");
        
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));       
  } 

  useEffect(()=>{
    !trailerVideo && getMovieTrailer();
  },[]);
}

export default useMovieTrailer;