import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import data from './components/data.json'

function App() {
  const [mode, setMode] = useState('lightMode')
  const [filter, setFilter] = useState('all')
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    }
    return data
  })

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id) => {
    const todo = todos.find(todo => todo.id === id)
    const newTitle = prompt('Edit todo', todo.title)
    if (newTitle) {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      ))
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <>
      <div className={`app ${mode}`}>
        <div className="container">
          <Header mode={mode} setMode={setMode} />
          <Todo addTodo={addTodo} />
          <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
          <Footer setFilter={setFilter} filter={filter} />
        </div>
      </div>
    </>
  )
}

export default App
