export const addTodo = (content) => {
  return {
    type: 'ADD_TODO',
    content: content,
    status: false
  }
}

export default addTodo