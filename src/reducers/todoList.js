const todoList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {content: action.content, status: action.status, id: state.length}]
    case 'CHANGE_STATUS':
      return [...state.map(todo => todo.id === action.id ? { ...todo, status: !todo.status } : todo)]; 
    default:
      return state
  }
}

export default todoList