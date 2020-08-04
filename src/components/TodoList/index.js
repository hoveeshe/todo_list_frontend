import React from 'react'
import Todo from '../Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [{
        text: "test"
      }, {
        text: "hhhh"
      }]
    }
  }

  render() {
    return (
      <div>
        {this.state.todoList.map((item, index) => 
          <Todo key={index}
            text={this.state.todoList[index].text} />)
        }
      </div>
    )
  }

}

export default TodoList