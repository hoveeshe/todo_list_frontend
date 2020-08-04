import React from 'react'
import Todo from '../Todo'
import Axios from 'axios'

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

  changeStatus = (id, status) => {
    Axios.put(`https://5f2929aba1b6bf0016ead10a.mockapi.io/todos/${id}`,{
      status : !status
    })
    .then(function(response){
        console.log(response)
        this.props.changeStatus(id)
    })
  }

  deleteTodo = (id) => {
    const _this = this
    Axios.delete(`https://5f2929aba1b6bf0016ead10a.mockapi.io/todos/${id}`)
    .then(function(response){
      console.log(response)
      _this.props.deleteTodo(id)
    })
  }

  componentDidMount() {
    const _this = this
    Axios.get('https://5f2929aba1b6bf0016ead10a.mockapi.io/todos')
    .then(function (response) {
      _this.props.initData(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

}

export default TodoList