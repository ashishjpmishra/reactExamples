import React, {useState} from  'react';
import QuizStart from './Components/QuizStart';
import Questions from './Components/Questions';
import AllDone from './Components/AllDone';
import HighScores from './Components/HighScores';
import  classes from './Quiz.module.css';

import {QuizStateContext} from "./Store/Context"

function Quiz() {

    const [gameStatus, setGameStatus] = useState("start");
    const [username, setUsername] = useState([]);
    const [score, setScore] = useState(0)


    const seeScore=()=>{
        setGameStatus("highscore")
    }
   
  return (
    <div className={classes.MainContainer}>
        <div className={classes.Topbar}>
            <div className={classes.Top}>
                <button onClick={seeScore}>View Highscores</button> 
            </div>
        </div>
        <div className={classes.QuizContainer}>
            <div className={classes.QuizArea}>
                <QuizStateContext.Provider value={{gameStatus, setGameStatus, score, setScore, username, setUsername}}>
                {gameStatus === "start" && <QuizStart />}
                {gameStatus === "playing" && <Questions />}
                {gameStatus === "finished" && <AllDone />}
                {gameStatus === "highscore" && <HighScores />}
                </QuizStateContext.Provider>
            </div>
        </div>
    </div>
  );
}

export default Quiz;
