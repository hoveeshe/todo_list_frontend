import React from 'react';
import './index.css'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: this.props.index,
      className: 'todo'
    }
  }

  render() {
    return (
      <div className={this.state.className} onClick={this.onClick}>
        {this.props.content}
        <button onClick={this.delete}>X</button>
      </div>
    )
  }

  onClick = (event) => {
    event.stopPropagation()
    console.log('onClick');
    console.log(this.state.index);
  }

  delete = (event) => {
    event.stopPropagation()
    console.log('delete');
    console.log(this.state.index);
  }


}

export default Todo