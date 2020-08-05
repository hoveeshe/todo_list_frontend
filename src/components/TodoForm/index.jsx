import React from 'react'
import api from '../../api/Api'

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
    api.addTodo(this.state.content)
    .then(response => {
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