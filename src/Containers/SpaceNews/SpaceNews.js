import React, { useEffect, useState } from 'react'
import classes from './SpaceNews.module.css'

const URL = "https://api.spaceflightnewsapi.net/v3/articles"

function SpaceNews() {

    const [newsList, setNewsList] = useState([]);

    useEffect(()=>{
        fetch(URL).then(data => data.json())
                .then((data) =>{
                   setNewsList([...data]) 
                })
    }, [])

  return (
    <div className={classes.mainContainer}>
        <h1>Space News</h1>
        {newsList.map((elem, key)=>{
            return <div key={key} className={classes.NewsContainer} onClick={()=>{window.location.href = elem.url}}>
                <img src={elem.imageUrl} alt="newsImage"/>
                <div>
                    <b>{elem.title}</b>
                    <p>{elem.publishedAt}</p>
                </div>
            </div>
        })} 
    </div>
  )
}

export default SpaceNews