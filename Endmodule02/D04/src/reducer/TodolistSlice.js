import { createSlice } from '@reduxjs/toolkit';

export const todolistSlice = createSlice({
  name: 'todolist',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = newText;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todolistSlice.actions;

export const selectTodos = (state) => state.todolist.todos;

export default todolistSlice.reducer;
