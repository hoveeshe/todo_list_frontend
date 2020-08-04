export const addTodo = (content) => {
  return {
    type: 'ADD_TODO',
    content: content,
    status: false
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id
  }
}

export const initData = (data) => {
  return {
    type: 'INIT_DATA',
    data: data
  }
}