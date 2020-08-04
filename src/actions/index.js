export const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    content: data.content,
    status: data.status,
    id: data.id
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