import axios from "axios";

const host = "https://5f2929aba1b6bf0016ead10a.mockapi.io";

export const getTodos = () => {
  return axios.get(host + '/todos');
}

export const updateTodo = (id, status) => {
  return axios.put(host + `/todos/${id}`, {status: status})
}

export const addTodo = (content) => {
  console.log(content);
  return axios.post(host + '/todos', {content: content})
}

export const deleteTodo = (id) => {
  return axios.delete(host + `/todos/${id}`)
}