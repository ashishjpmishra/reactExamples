import React, {useContext} from 'react'
import { QuizStateContext } from '../Store/Context'


let name = null;

function AllDone() {

  const {gameStatus, setGameStatus, score, username, setUsername} = useContext(QuizStateContext) 

  const inputValue = (input) =>{
    name = input;
    console.log(name)
  }
  const updateUsername = () =>{
    setUsername(n => [...n, {userName: name, score: score}])
    setGameStatus("highscore")
  }

  console.log(username)

  return (
    <div>
        <h1>All Done</h1>
        <p>Your Final Score is {score}</p>
        <label>Enter initials</label>
        <input onChange={(e) =>{inputValue(e.target.value)}} type='text' ></input>
        <button onClick={() =>{updateUsername()}}>Submit</button>
    </div>
  )
}

export default AllDone