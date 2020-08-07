import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {
  deleteTodo,
  initData,
  changeStatus
} from '../actions'

const mapStateToProps = (state) => ({
  todoList: state.todoList.filter(item => item.status)
})

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (id) => {
    dispatch(changeStatus(id))
  },
  deleteTodo: (id) => {
    dispatch(deleteTodo(id))
  },
  initData: (data) => {
    dispatch(initData(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)