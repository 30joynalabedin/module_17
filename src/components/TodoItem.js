// TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span className={`ml-2 ${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>
          {todo.text}
        </span>
      </label>
      <button
        className="px-3 py-1 bg-red-500 text-white rounded"
        onClick={handleRemove}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
