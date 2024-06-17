import React from 'react'
import Styles from "./TodoItems.module.css"


export default function TodoItems({item,todos,setTodos}){
  function handleDelete(item){
    console.log("button clicked for item", item);
    setTodos(todos.filter((todo)=> todo!==item))
  }

  function handleClick(item){
    console.log(item)
    setTodos(todos.map((todo)=>todo.name === item? {...todo, done:!todo.done}:todo))
  }

  const strike = item.done? Styles.strike:"";
  return (
    <div className={Styles.item}>
      <div className={Styles.itemName}>
        <span className={strike} onClick={()=>handleClick(item.name)}>{item.name}</span>
      <span >
        <button onClick={()=>handleDelete(item)}className={Styles.deleteButton}>x</button>
      </span>
      </div>
      <hr className={Styles.line}/>
    </div>
  )
}
