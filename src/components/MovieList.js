import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
if(!movies) return;
  return (
    <div className="px-4 md:px-7 w-screen ">
      <p className=" text-white pt-12 md:pt-4 md:text-2xl pb-4">{title}</p>
        <div className=" flex overflow-x-scroll scrollbar-hide">
            <div className=" flex">
                {movies.map((movie)=> <MovieCard key= {movie.id} posterPath = { movie.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList;