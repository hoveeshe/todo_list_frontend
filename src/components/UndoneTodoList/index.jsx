import React from 'react'
import Todo from '../Todo'
import {
  getTodos,
  updateTodo,
  deleteTodo
} from '../../api/Api'

class UndoneTodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h3>Done List</h3>
        {this.props.todoList.map((item, index) => {
          if (!item.status) {
            return <Todo key={item.id}
              id={item.id}
              content={item.content}
              status={item.status}
              changeStatus={this.changeStatus}
              deleteTodo={this.deleteTodo} />
          } else {
            return false
          }
        })}
      </div>
    )
  }

  changeStatus = (id, status) => {
    updateTodo(id, !status)
    .then(response => {
      console.log(response)
      this.props.changeStatus(id)
    })
  }

  deleteTodo = (id) => {
    deleteTodo(id)
    .then(response => {
      console.log(response)
      this.props.deleteTodo(id)
    })
  }

  componentDidMount() {
    getTodos()
    .then(response => {
      this.props.initData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export default UndoneTodoList