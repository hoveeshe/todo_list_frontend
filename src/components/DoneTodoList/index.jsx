import React from 'react'
import Todo from '../Todo'

class DoneTodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        {this.props.todoList.map((item, index) => {
          if (item.status) {
            return <Todo key={item.id}
              id={item.id}
              content={item.content}
              status={item.status}
              changeStatus={this.changeStatus}
              deleteTodo={this.deleteTodo} />
          }
        })}
      </div>
    )
  }
}

export default DoneTodoList