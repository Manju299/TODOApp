import React from 'react'
import TodoItems from "./TodoItems"

export default function TodoList({todos}) {
  return (
    <div>
        {todos.map((item) =>(
          <TodoItems key={item} item = {item}/>
        ))}

    </div>
  )
}
