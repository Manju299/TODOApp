import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default function Todo() {
  
  const [todos,setTodos] = useState([]);
  return (
    <div>
        {/* <form>
            <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)}> Add </button>
        </form> */}
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} />
        {/* {todos.map((item) =>(
          <TodoItems key={item} item = {item}/>
        ))} */}
        
    </div>
  )
}
