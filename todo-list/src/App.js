import './App.css';
import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import { useState, useEffect } from 'react';

const App = () => {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default: 
        setFilteredTodos(todos)
        break;
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="todo-app">
      <header>
      <h1>Trevor's Todo List</h1>
      </header>
    <Form 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText}
      setStatus={setStatus}/>
     <TodoList 
      inputText={inputText} 
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
