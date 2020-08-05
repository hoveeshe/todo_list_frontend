import React from 'react';
import './App.css';
import TodoFormContainer from '../src/containers/TodoFormContainer'
import TodoListContainer from '../src/containers/TodoListContainer'
import DoneTodoListContainer from '../src/containers/DoneTodoListContainer'

import { HashRouter , Route , Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Link to="/">todolist</Link>
          <Link to="/done-todolist">done-todolist</Link>
          <TodoFormContainer />
          <Route exact path="/" component={TodoListContainer} />
          <Route exact path="/done-todolist" component={DoneTodoListContainer} />
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
