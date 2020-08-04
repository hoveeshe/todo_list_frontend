import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div>
        <h3>Todo List</h3>
        <input type="text" onChange={this.onChange}/>
        <button onClick={this.onSubmit}>add</button>
      </div>
    )
  }

  onSubmit = () => {
    this.props.addTodo(this.state.content)
  }

  onChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

}

export default TodoForm