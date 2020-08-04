import React from 'react'
import Todo from '../Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        {this.props.todoList.map((item, index) => 
          <Todo key={index}
            index={index}
            text={item.text} />)
        }
      </div>
    )
  }

}

export default TodoList