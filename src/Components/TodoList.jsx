import React from 'react'
import TodoItems from "./TodoItems"
import Styles from './TodoList.module.css'

export default function TodoList({todos,setTodos}) {
  return (
    <div className={Styles.list}>
        {todos.map((item) =>(
          <TodoItems key={item.name} item ={item} todos={todos} setTodos={setTodos}/>
        ))
      }

    </div>
  )
}
