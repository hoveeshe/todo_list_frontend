const todoList = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {text: action.text}]
    default:
      return state
  }
}

export default todoList