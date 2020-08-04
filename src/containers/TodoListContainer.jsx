import {connect} from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (id) => {
    dispatch({
      type: 'CHANGE_STATUS',
      id: id
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)