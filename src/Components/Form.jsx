import React, { useState } from 'react'
import styles from "./Form.module.css"

export default function Form({todos,setTodos}) {
    const [todo,setTodo] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo("");
      }
  return (
    <div>
        <form className={styles.formstyle}>
            <input className={styles.inputStyle} type='text' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter todo item'/>
            <button className={styles.buttonStyle}type="submit" onClick={(e) => handleSubmit(e)}> Add </button>
        </form>
    </div>
  )
}
