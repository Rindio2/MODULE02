import React, { useState } from 'react';

const TodolistItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdateText = () => {
    onUpdate(todo.id, updatedText);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (

      <li style={{ textDecoration: isChecked ? 'line-through' : 'none' }}>
        
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        {isEditing ? (
          <>
            <input type="text" value={updatedText} onChange={handleChange} />
            <button onClick={handleUpdateText}>Update</button>
          </>
        ) : (
          <>
            <span>{todo.text}</span>
            <button onClick={handleToggleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
        
      </li>
      
      
  );
};

export default TodolistItem;
