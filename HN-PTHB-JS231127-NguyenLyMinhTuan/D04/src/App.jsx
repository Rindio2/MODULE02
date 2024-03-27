import React from 'react';
import Todolist from './features/todolist/Todolist';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main>
        <Todolist />
      </main>
    </div>
  );
}

export default App;
