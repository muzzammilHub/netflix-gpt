import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
 const movies = useSelector((store)=> store.movies.nowPlayingMovies);

  if(!movies) return;

  const randomIndex = Math.floor(Math.random() * 20);
  const mainMovie = movies[14];

  const { original_title, overview, id } = mainMovie;
  

  return (
    <div>
        <VideoTitle
             title = { original_title}
             overview = {overview}
        />
        <VideoBackground
          id = { id }
        />
    </div>
  )
}

export default MainContainer;