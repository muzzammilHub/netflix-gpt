import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
// import openai from '../utils/openai';
import { genAI } from '../utils/geminAi';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar =  () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='
        + movie + 
        '&include_adult=false&language=en-US&page=1',
        API_OPTIONS
        );
         const json = await data.json();

         return json.results;
  }

  const handleGptSearchClick = async ()=>{
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: "
                     + searchText.current.value + 
                     ". Only give me names of five movies, comma separated like the example results given ahead, Example Result: 3-idiots, jawan, bajrangi bhaijaan, taare zameen par, sholay." 

                     

    // const gptResult = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   });

    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent(gptQuery);

    const response = await result.response;

    const text = response.text();

    const geminMovies = text.split(",")

    console.log(geminMovies);

      if(!text){
        //TODO: Error Handling...
      }

      // const gptMovies = gptResult.choices?.[0].message?.content.split(",");

      const promiseResult = geminMovies.map((movie)=> searchMovieTMDB(movie));

      const TMDBMovie = await Promise.all(promiseResult);

      dispatch(addGptMovieResult({movieName: geminMovies ,movieList: TMDBMovie}));
  }

  return (
    <div className="flex justify-center items-center pt-[40%] md:pt-[10%] relative z-20 overflow-hidden">
        <form
            onSubmit={(e)=>e.preventDefault()} 
            className=" bg-black p-2 rounded-md shadow-2xl border border-yellow-500 flex md:w-[33%]">
            <input
                ref={searchText} 
                className=" mr-3 w-full p-1 outline-none bg-slate-300 rounded-md placeholder-slate-700 hover:bg-opacity-60 text-lg pl-2 shadow-md" 
                type="text" placeholder='what would you like to watch today?'>
            </input>
            <button 
                onClick={ handleGptSearchClick }
                className="pt-1 pl-3 pr-3 pb-[0.3rem] bg-yellow-500 rounded-md text-lg shadow-md hover:bg-opacity-60  inline-block">
                <SearchIcon />
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar