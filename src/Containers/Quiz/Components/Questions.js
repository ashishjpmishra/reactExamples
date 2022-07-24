import React, {useState, useContext} from 'react'
import { QuizStateContext } from '../Store/Context'

import classes from './Quizz.module.css';

const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

function Questions() {

  const [questionNumber, setQuestionNumber] = useState(0);

  const {gameStatus, setGameStatus, score, setScore} = useContext(QuizStateContext)  

  const optionCheck = (optionPassed) =>{
    if(optionPassed === questions[questionNumber].answer){
      console.log(score)
      setScore(score => score+1)
    }
    console.log(score)
    if(questionNumber < 4)setQuestionNumber(que => que+1)
    // console.log(gameStatus)
    if(questionNumber === 4) {
      setGameStatus("finished")
    }
    // console.log(gameStatus)
  }

  return (
    <div className={classes.OptionsContainer}>
        <h3>{questions[questionNumber].questionText}</h3>
        {questions[questionNumber].options.map((que, i)=>{
          return <button onClick={() =>{optionCheck(questions[questionNumber].options[i])}} className={classes.Options}>{questions[questionNumber].options[i]}</button>
        })}
        
        {/* <button className={classes.Options}>{questions[questionNumber].options[1]}</button>
        <button className={classes.Options}>{questions[questionNumber].options[2]}</button>
        <button className={classes.Options}>{questions[questionNumber].options[3]}</button> */}
    </div>
  )
}

export default Questions