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
        <input type="text" onChange={this.onChange}/>
        <button onClick={this.onSubmit}>add</button>
      </div>
    )
  }

  onSubmit = () => {
    let _this = this
    if (this.state.content === '') {
      alert('please input your todo')
      return
    }
    Axios.post('https://5f2929aba1b6bf0016ead10a.mockapi.io/todos', {
      content: this.state.content,
      status: false
    })
    .then(function (response) {
      console.log(response.data);
      _this.props.addTodo(response.data)
    })
  }

  onChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

}

export default TodoForm