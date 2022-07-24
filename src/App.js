import React, { useState } from 'react';
import classes from './App.module.css';

import Landing from './Containers/Landing/Landing'
import Hero from './Containers/Hero/Hero'
import Todo from './Containers/Todo/Todo'
import Quiz from './Containers/Quiz/Quiz'
import SpaceNews from './Containers/SpaceNews/SpaceNews'
import VideoGameApi from './Containers/VideoGameAPI/VideoGameApi'

function App() {

  const [page, setPage] = useState("home")
  return (
    <div className={classes.MainContainer}>
      <div onClick={()=>{setPage("home")}} style={{cursor:"pointer"}}>Go back to all Projects</div>
      {page === "home" && <Landing page={page} setPage={setPage}/>}
      {page === "hero" && <Hero />}
      {page === "todo" && <Todo />}
      {page === "quiz" && <Quiz />}
      {page === "spacenews" && <SpaceNews />}
      {page === "videogameapi" && <VideoGameApi />}
    </div>
  );
}

export default App;
