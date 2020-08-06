import {
  ADD_TODO,
  DELETE_TODO,
  INIT_DATA,
  CHANGE_STATUS
} from '../constant'

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    content: data.content,
    status: data.status,
    id: data.id,
    createdTime: data.createdTime
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id
  }
}

export const initData = (data) => {
  return {
    type: INIT_DATA,
    data: data
  }
}

export const changeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    id: id
  }
}