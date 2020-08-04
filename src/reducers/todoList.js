const todoList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {content: action.content}]
    default:
      return state
  }
}

export default todoList