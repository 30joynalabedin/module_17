// App.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mt-4 mb-2">Todo App</h1>
      <div className="flex">
        <input
          type="text"
          className="flex-grow py-2 px-4 mr-2 border rounded"
          placeholder="Add a new todo..."
          value={text}
          onChange={handleInputChange}
        />
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
