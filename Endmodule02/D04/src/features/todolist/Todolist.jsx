import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo, selectTodos } from '../../reducer/TodolistSlice';
import TodolistItem from './TodolistItem';
import TodolistForm from './TodolistForm';
import './Todolist.css';

const Todolist = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo({ text }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({ id, newText }));
  };

  return (
    <div className="todolist-container">
      <ul>
        {todos.map((todo) => (
          <TodolistItem
            key={todo.id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        ))}
      </ul>
      <p>Add to the todo list</p>
      <TodolistForm onAddTodo={handleAddTodo} />
      
    </div>
  );
};

export default Todolist;
