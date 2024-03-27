import { configureStore } from '@reduxjs/toolkit';
import todolistReducer from '../reducer/TodolistSlice';

const store = configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});

export default store;
