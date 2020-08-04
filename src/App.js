import React from 'react';
import './App.css';
import TodoList from '../src/components/TodoList'
import TodoFormContainer from '../src/containers/TodoFormContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
