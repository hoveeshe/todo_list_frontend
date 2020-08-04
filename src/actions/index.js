export const addTodo = (content) => {
  return {
    type: 'ADD_TODO',
    content: content
  }
}

export default addTodo