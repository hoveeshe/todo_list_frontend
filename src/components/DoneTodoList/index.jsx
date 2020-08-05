import React from 'react'
import Todo from '../Todo'
import api from '../../api/Api'

class DoneTodoList extends React.Component {
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
          if (item.status) {
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
    const _this = this
    api.updateTodo(id, !status)
    .then(response => {
      console.log(response)
      _this.props.changeStatus(id)
    })
  }

  deleteTodo = (id) => {
    const _this = this
    api.deleteTodo(id)
    .then(response => {
      console.log(response)
      _this.props.deleteTodo(id)
    })
  }

  componentDidMount() {
    const _this = this
    api.getTodos()
    .then(response => {
      _this.props.initData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export default DoneTodoList