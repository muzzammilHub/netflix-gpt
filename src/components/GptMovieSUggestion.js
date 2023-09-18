import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSUggestion = () => {
  const movies= useSelector((store)=>store.gpt);

  if(!movies) return;

  const { gptMoviesName, gptMovies} = movies;

  return gptMoviesName && gptMoviesName.length > 0 ?  (
    <div className=" p-4 bg-black text-white m-2 bg-opacity-90 mt-12">
      <div>
          {gptMoviesName.map((movieName, index)=>(
                 <MovieList 
                   key={movieName} 
                   title={movieName} 
                   movies = {gptMovies[index]}
                 />
          ))} 
      </div>
    </div>
  ) : null
}

export default GptMovieSUggestion