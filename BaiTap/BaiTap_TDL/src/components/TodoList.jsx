import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <ul>
      {todos.length ? todos.map(todo => <TodoItem key={todo.id} todo={todo} />) : <p>Chưa có công việc</p>}
    </ul>
  );
};

export default TodoList;

