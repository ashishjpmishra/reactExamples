import React, {useContext} from 'react'
import { QuizStateContext } from '../Store/Context'
import classes from './Quizz.module.css'


function QuizStart() {

  const {gameStatus, setGameStatus} = useContext(QuizStateContext)

  return (
    <div>
        <h1>Coding Quiz Challenge</h1>
        <p>Try to answer the following code related questions within the time limit.<br></br>

            Keep in mind that incorrect answers will penalize your score/time by 10 seconds
        </p>
        <button onClick={()=>{setGameStatus("playing")}}>start Quiz</button>
    </div>
    
  )
}

export default QuizStart