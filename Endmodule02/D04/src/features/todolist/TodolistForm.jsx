import React, { useState } from 'react';

const TodolistForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} placeholder="Add new todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodolistForm;
