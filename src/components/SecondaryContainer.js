import {  useSelector } from "react-redux/es/hooks/useSelector"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  if(!movies) return;

  return (
    <div className=" bg-black w-screen">
      <div className=" -mt-20 md:-mt-44 relative z-20">
          <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
          <MovieList title = {"Popular"} movies = {movies.popularMovies}/>
          <MovieList title = {" Top Rated "} movies = {movies.topRatedMovies}/>
          <MovieList title = {" Upcoming"} movies = {movies.upcomingMovies}/>
          {/* <MovieList title = {" Romance "} movies = {movies.nowPlayingMovies}/> */}
     </div>
    </div>
  )
}

export default SecondaryContainer;