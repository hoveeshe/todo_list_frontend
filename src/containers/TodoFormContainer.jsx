import {connect} from 'react-redux'
import TodoForm from '../components/TodoForm'
import {addTodo} from '../actions'

const mapDispatchToProps = (dispatch) => ({
  addTodo: (content) => {
    dispatch(addTodo(content))
  }
})

export default connect(null, mapDispatchToProps)(TodoForm)