import React from 'react';
import './App.css';
import TodoListContainer from '../src/containers/TodoListContainer'
import TodoFormContainer from '../src/containers/TodoFormContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
