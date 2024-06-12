import { useState } from 'react'
import Outline from './Components/outline'
import Inline from './Components/Inline'
import Todo from './Components/Todo'
import Header from './Components/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Todo/>
      {/* <Outline/>
      <Inline/> */}
    </div>
  )
}

export default App
