import React from 'react'
import Todo from './Todo.js'


const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className='todo-container'>
    <ul className='todo-list'>
    {filteredTodos.map(todo => (
      <Todo 
      text={todo.text} 
      key={todo.id}
      setTodos={setTodos}
      todos={todos}
      todo={todo}
      filteredTodos={filteredTodos}
      />
    ))}  
    </ul>
    </div>
  )
}

export default TodoList