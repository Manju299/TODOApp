import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer.jsx'


export default function Todo() {
  const [todos,setTodos] = useState([]);
  const compltedTodos = todos.map((todo) => todo.done).length

  return (
    <div>
        {/* <form>
            <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit" onClick={(e) => handleSubmit(e)}> Add </button>
        </form> */}
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        {/* {todos.map((item) =>(
          <TodoItems key={item} item = {item}/>
        ))} */}
        <Footer compltedTodos={compltedTodos}/>        
    </div>
  )
}
