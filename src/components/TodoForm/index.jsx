import React from 'react'
import { addTodo } from '../../api/Api'
import 'antd/dist/antd.css'
import { Button, Space, Input } from 'antd'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <Space>
        <Input placeholder="inpunt your todo here..." onChange={this.onChange}/>
        <Button onClick={this.onSubmit}>add</Button>
      </Space>
    )
  }

  onSubmit = () => {
    if (this.state.content === '') {
      alert('please input your todo')
      return
    }
    addTodo(this.state.content)
    .then(response => {
      console.log(response.data);
      this.props.addTodo(response.data)
    })
  }

  onChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

}

export default TodoForm