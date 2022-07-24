import React, {useState} from  'react';
import  classes from './Hero.module.css';

function Hero() {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState(0)
    const [superPower, setSuperPower] = useState('')
    const [showHero, setShowHero] = useState(false)

    const showCharacter =()=>{
        setShowHero(show=>!show)
    }


  return (
    <div className={classes.MainContainer}>
      <div className={classes.Form}>
        <h1>Hero App</h1>
        <label>Name</label>
        <input onChange={(e)=>{setName(e.target.value)}} type="text"/>
        <label>Age</label>
        <input onChange={(e)=>{setAge(e.target.value)}} type="number" />
        <label>Height</label>
        <input onChange={(e)=>{setHeight(e.target.value)}} type="number" />
        <label>Superpower</label>
        <input onChange={(e)=>{setSuperPower(e.target.value)}} type="text" />
      </div>
      <div>
        <button onClick={showCharacter}>Show Hero Info</button>
      </div>
      <div>
        {showHero && (<ul>
            <li>Name : {name}</li>
            <li>Age : {age}</li>
            <li>Height : {height}</li>
            <li>SuperPower : {superPower}</li>
        </ul>)}
        
      </div>
    </div>
  );
}

export default Hero;
