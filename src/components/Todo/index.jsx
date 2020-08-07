import React from 'react';
import './index.css'
import { Card } from 'antd'
import {
  DeleteOutlined,
  CheckOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    console.log(this.props.todo)
    const createdTime = new Date(this.props.todo.createdTime).toLocaleString()
    return (
      <Card style={{ width: 330 }}
        bodyStyle={{ height: 150 }}
        title={'Todo ' + this.props.todo.id}
        extra={createdTime}
        actions={[
        <DeleteOutlined key="delete" onClick={this.delete} />,
        <CheckOutlined key="changeStatus" onClick={this.onClick}/>
      ]}>
        <div onClick={this.onClick} style={{ wordWrap: "break-word"}}>
          <span className={this.props.todo.status ? 'done' : ''}>{this.props.todo.content}</span>
        </div>
      </Card>
    )
  }

  onClick = (event) => {
    this.props.changeStatus(this.props.todo.id, this.props.todo.status)
    event.stopPropagation()
  }

  delete = (event) => {
    this.props.deleteTodo(this.props.todo.id)
    event.stopPropagation()
  }

}

export default Todo