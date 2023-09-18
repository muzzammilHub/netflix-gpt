import GptMovieSUggestion from "./GptMovieSUggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className=" overflow-x-hidden">
      <div className="fixed -z-10 bg-gradient-to-b from-black">
            <img className=" h-screen object-cover w-screen"
             src={BG_IMG_URL}
             alt="bgImage"></img>
        </div>
      <GptSearchBar />
      <GptMovieSUggestion />
    </div>
  )
}

export default GptSearch;