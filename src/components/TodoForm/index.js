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
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange}/>
        <button type="submit">add</button>
      </form>
    )
  }

  onSubmit = () => {
    
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

}

export default TodoForm