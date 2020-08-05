import { connect } from 'react-redux'
import UndoneTodoList from '../components/UndoneTodoList'
import {
  deleteTodo,
  initData,
  changeStatus
} from '../actions'

const mapStateToProps = (state) => ({
  todoList: state.todoList
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

export default connect(mapStateToProps, mapDispatchToProps)(UndoneTodoList)