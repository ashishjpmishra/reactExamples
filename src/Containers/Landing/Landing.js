import React from 'react'
import classes from './Landing.module.css'

function Landing(props) {

    const {page, setPage} = props;


  return (
    <div className={classes.Landing}>
        <div className={classes.ProjectCard} onClick={()=>{setPage("hero")}}>Hero App</div>
        <div className={classes.ProjectCard} onClick={()=>{setPage("todo")}}>Todo App</div>
        <div className={classes.ProjectCard} onClick={()=>{setPage("quiz")}}>Quiz App</div>
        <div className={classes.ProjectCard} onClick={()=>{setPage("spacenews")}}>SpaceNews App</div>
        <div className={classes.ProjectCard} onClick={()=>{setPage("videogameapi")}}>VideoGameAPI App</div>
    </div>
  )
}

export default Landing