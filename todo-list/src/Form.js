import React from 'react'

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    //prevent refresh or default behavior when button is clicked
   e.preventDefault();

   setTodos([
     ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
   ]);
   //reset inputtext field back to blank. 
   setInputText('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
    <input onChange={inputTextHandler} value={inputText} type='text' className='todo-input'/>
    <button onClick={submitTodoHandler} className='todo-button' type='submit'>
      <i className='fas fa-plus-square'></i>
      </button> 
      <div className='select'>
    <select onChange={statusHandler} name='todos' className='filter-todo'>
    <option value='all'>All</option>
    <option value='completed'>Completed</option>
    <option value='uncompleted'>Uncompleted</option>
    </select>
      </div>
    </form>
  )
}

export default Form