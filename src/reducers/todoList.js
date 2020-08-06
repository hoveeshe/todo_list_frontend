const todoList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {content: action.content, status: action.status, id: action.id, createdTime: action.createdTime}]
    case 'DELETE_TODO':
      return [...state.filter((item, index) => item.id !== action.id)]
    case 'CHANGE_STATUS':
      return [...state.map(todo => todo.id === action.id ? { ...todo, status: !todo.status } : todo)]; 
    case 'INIT_DATA':
      return [...action.data]
    default:
      return state
  }
}

export default todoList