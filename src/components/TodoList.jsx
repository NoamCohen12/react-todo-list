import './TodoList.css'

function TodoList({ todos, toggleTodo, deleteTodo }) {
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
                    <span className="todo-title">{todo.title}</span>
                    <div id="x" onClick={() => deleteTodo(todo.id)}>❌</div>
                </div>
            ))}
        </div>
    )
}

export default TodoList