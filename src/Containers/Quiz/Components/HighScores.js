import React, {useContext} from 'react'
import { QuizStateContext } from '../Store/Context'

function HighScores() {

  
  const {gameStatus, setGameStatus, score, username, setUsername} = useContext(QuizStateContext) 

  // console.log(username[0].userName)
  // console.log(username[0].score)
  
  const nextGame = () =>{
    setGameStatus("start")
  }
  const resetScore = () =>{
    setUsername([])
    
  }

  return (
    <div>
        <h1>HighScores</h1>
        
            {username.length === 1 && <ol><li>{username[0].userName} : {username[0].score}</li></ol>}
            {username.length === 2 && <ol><li>{username[0].userName} : {username[0].score}</li>
                                          <li>{username[1].userName} : {username[1].score}</li></ol>}
            {username.length === 3 && <ol><li>{username[0].userName} : {username[0].score}</li>
                                          <li>{username[1].userName} : {username[1].score}</li>
                                          <li>{username[2].userName} : {username[2].score}</li></ol>}
        
        <button onClick={nextGame}>Go back</button>
        <button onClick={resetScore}>Clear Highscores</button>
    </div>
  )
}

export default HighScores