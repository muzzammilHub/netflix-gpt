import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMoviesName: null,
        gptMovies: null,
    },
    reducers: {
        toggleGptSearch: (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieName, movieList } = action.payload;
            state.gptMoviesName = movieName;
            state.gptMovies = movieList;
        }
    },
});

export const { toggleGptSearch, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;