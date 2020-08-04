import React from 'react'
import Axios from 'axios'

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

export default TodoForm