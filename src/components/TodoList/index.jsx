import React from 'react'
import Todo from '../Todo'
import {
  getTodos,
  updateTodo,
  deleteTodo
} from '../../api/Api'
import 'antd/dist/antd.css'
import { List } from 'antd'

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
        <List
          grid={{
            gutter: 20,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
            xxl: 5,
          }}
          dataSource={this.props.todoList}
          renderItem={item => (
            <List.Item>
              <Todo key={item.id}
                todo={item}
                changeStatus={this.changeStatus}
                deleteTodo={this.deleteTodo} />
            </List.Item>
          )}
        />
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

export default TodoList