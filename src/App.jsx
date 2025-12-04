import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Header />
        <Todo />
        <TodoList />
        <Footer />
      </div>
    </>
  )
}

export default App
