import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {deleteTodo} from '../actions'

const mapStateToProps = (state) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (id) => {
    dispatch({
      type: 'CHANGE_STATUS',
      id: id
    })
  },
  deleteTodo: (id) => {
    dispatch(deleteTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)