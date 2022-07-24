import React, {useState} from 'react';
import classes from './Todo.module.css';

function Todo() {
  const [val, setVal] = useState("")
  const [list, setList] = useState([]);

  let globalId = new Date().getTime();


  // function to add todo to the list
  const addList =(e)=>{
    e.preventDefault();
    setList(oldList => {
      setVal('')
      return [...oldList, {todo: val, id: globalId, done: false}]
    })
    
  }

  // function to get value from input 
  const getVal = (e)=>{
    setVal(e.target.value);
    
  }

  // to delete unique todo
  const deleteItem = (itemId)=>{
    setList(oldList => oldList.filter(item => item.id !== itemId))
  }

  const checkItem = (task)=>{
    setList(list.map((element) =>{
        return element.todo === task 
        ? {todo: task, id:element.id, done:true} 
        : {todo: element.todo, id:element.id, done:element.done ? true : false}
    }))
  }


// one way to add by enter is using this method
  // const enterAdd = (e)=>{
  //   if(e.which === 13){
  //     addList();
  //   }
  // }

  // other way is using default behaviour of html form element

  return (
    <div className={classes.MainContainer}>
      <h1>ToDo App</h1>
      <form onSubmit={addList}>
        <input type="text" value={val} onChange ={getVal}/>
        <button type='submit'>add to list</button>
        <ul>
            {list.map(item =>{
              return <div key={item.id}>
                {item.done ? <li className={classes.Strike}>{item.todo}</li> : <li>{item.todo}</li> }
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                <button type='button' onClick={() => checkItem(item.todo)}>Done</button>
                </div>
            })}
            {/* {console.log(list)} */}
        </ul>
      </form>
    </div>
  );
}

export default Todo;
