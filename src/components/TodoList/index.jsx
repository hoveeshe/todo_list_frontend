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
        {this.props.todoList.map((item, index) => 
          <Todo key={item.id}
            id={item.id}
            content={item.content}
            status={item.status}
            changeStatus={this.changeStatus}
            deleteTodo={this.deleteTodo} />)
        }
      </div>
    )
  }

  changeStatus = (id) => {
    this.props.changeStatus(id)
  }

  deleteTodo = (id) => {
    this.props.deleteTodo(id)
  }

}

export default TodoList