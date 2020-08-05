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
      id: this.props.id,
      time: this.props.time
    }
  }

  render() {
    const dateTime = new Date(this.state.time).toLocaleString()
    return (
      <Card style={{ width: 330 }}
        bodyStyle={{ height: 150 }}
        title={'Todo ' + this.state.id}
        extra={dateTime}
        actions={[
        <DeleteOutlined key="delete" onClick={this.delete} />,
        <CheckOutlined key="changeStatus" onClick={this.onClick}/>
      ]}>
        <div onClick={this.onClick} style={{ wordWrap: "break-word"}}>
          <span className={this.props.status ? 'done' : ''}>{this.props.content}</span>
        </div>
      </Card>
    )
  }

  onClick = (event) => {
    this.props.changeStatus(this.state.id, this.props.status)
    event.stopPropagation()
  }

  delete = (event) => {
    this.props.deleteTodo(this.state.id)
    event.stopPropagation()
  }

}

export default Todo