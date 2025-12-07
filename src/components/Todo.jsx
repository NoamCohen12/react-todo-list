import './Todo.css'
import { useState } from 'react'

function Todo({ addTodo }) {
    const [todo, setTodo] = useState('')

    function oneClickAdd() {
        if (todo !== '') {
            addTodo(todo)
        }
        setTodo('')
    }
    function oneClickChange(event) {
        setTodo(event.target.value)
    }

    return (
        <div className="todo">
            <input type="text" value={todo} onChange={oneClickChange} placeholder="Create a new todo" />
            <button id="btnAdd" onClick={oneClickAdd}>Add</button>
        </div>
    )
}

export default Todo