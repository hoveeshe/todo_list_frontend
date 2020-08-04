import React from 'react'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange}/>
        <button onClick={this.onSubmit}>add</button>
      </div>
    )
  }

  onSubmit = () => {
    this.props.addTodo(this.state.text)
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

}

export default TodoForm