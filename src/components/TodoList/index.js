import React from 'react'
import Todo from '../Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    console.log(this.props.todoList);
    return (
      <div>
        {this.props.todoList.map((item, index) => 
          <Todo key={index}
            text={this.props.todoList[index].text} />)
        }
      </div>
    )
  }

}

export default TodoList