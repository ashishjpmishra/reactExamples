import React, { useEffect, useState } from 'react'
import classes from './VideoGameApi.module.css'

function VideoGameApi() {

    const [gameTitle, setGameTitle] = useState("");
    const [gameList, setGameList] = useState([]);
    const [dealList, setDealList] = useState([]);

    const searchGame = () =>{
        fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
        .then(data=>data.json())
        .then((data) =>{
            setGameList([...data]);
        })
    }

    useEffect(()=>{
        fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3")
        .then(data => data.json())
        .then((data) =>{
            setDealList([...data]);
        })
    },[])

  return (
    <div className={classes.mainContainer}>
        <div className={classes.searchSection}>
            <h1>Search Game</h1>
            <input type="text" placeholder='Minecraft...' onChange={(e)=>{setGameTitle(e.target.value)}} />
            <button onClick={searchGame}>Search game Title</button>
            <div className={classes.ResultsArea}>
                {gameList.map((elem)=>{
                    return <div className={classes.SearchItem}>{console.log(elem)}
                        <img style={{width: "100%", height:"50%"}} src={elem.thumb} alt=""/>
                        <h4>{elem.external}</h4>
                        <p>${elem.cheapest}</p>
                    </div>
                })}
            </div>
        </div>
        <div className={classes.dealsSection}>
            <h1>Deals</h1>
            <div className={classes.ResultsArea}>
                {dealList.map((elem)=>{
                    return <div className={classes.SearchItem}>{console.log(elem)}
                        <img style={{width: "100%", height:"50%"}} src={elem.thumb} alt=""/>
                        <h4>{elem.title}</h4>
                        <p>Price: ${elem.normalPrice}</p>
                        <p>Sale Price: ${elem.salePrice}</p>
                        <p>Savings: ${elem.savings} %</p>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default VideoGameApi