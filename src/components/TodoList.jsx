import './TodoList.css'

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
    return (
        <div className="todoList">
            {todos.map(todo => (
                <div key={todo.id} className="todo-item">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="todo-checkbox"
                    />
                    <span className="todo-title">
                        {todo.completed ? <del>{todo.title}</del> : todo.title}
                    </span>
                    <div className="todo-actions">
                        <div onClick={() => editTodo(todo.id)}> ✏️</div>
                        <div onClick={() => deleteTodo(todo.id)}>❌</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoList