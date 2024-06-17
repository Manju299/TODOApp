import React, { useState } from 'react'
import styles from "./Form.module.css"

export default function Form({todos,setTodos}) {
    const [todo,setTodo] = useState({name:"",done:false})
    

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo({name:"",done:false});
      }
  return (
    <div>
        <form className={styles.formstyle}>
            <input className={styles.inputStyle} type='text' value={todo.name} onChange={(e) => setTodo({name:e.target.value,done:false})} placeholder='Enter todo item'/>
            <button className={styles.buttonStyle}type="submit" onClick={(e) => handleSubmit(e)}> Add </button>
        </form>
        
    </div>
  )
}
