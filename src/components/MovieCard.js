import { IMAGE_URL } from "../utils/constant";

const MovieCard = ({posterPath}) => {
  
  return (
    <>{
      posterPath && (<div className=" w-28 md:w-48 pr-4">
      <img className=" rounded-lg " src={IMAGE_URL + posterPath}></img>
      </div>)
    }
    </>
  )
}

export default MovieCard;