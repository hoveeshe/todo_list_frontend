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
      id: this.props.id
    }
  }

  render() {
    return (
      <Card style={{ width: 250 }} actions={[
        <DeleteOutlined key="delete" onClick={this.delete} />,
        <CheckOutlined key="changeStatus" onClick={this.onClick}/>
      ]}>
        <div className='todo' onClick={this.onClick}>
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