import React from 'react';
import './App.css';
import TodoFormContainer from '../src/containers/TodoFormContainer'
import TodoListContainer from '../src/containers/TodoListContainer'
import DoneTodoListContainer from '../src/containers/DoneTodoListContainer'
import UndoneTodoListContainer from '../src/containers/UndoneTodoListContainer'

import { HashRouter , Route , Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Link to="/">todolist</Link>
          <Link to="/done-todolist">done-todolist</Link>
          <Link to="/undone-todolist">undone-todolist</Link>
          <TodoFormContainer />
          <Route exact path="/" component={TodoListContainer} />
          <Route exact path="/done-todolist" component={DoneTodoListContainer} />
          <Route exact path="/undone-todolist" component={UndoneTodoListContainer} />
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
