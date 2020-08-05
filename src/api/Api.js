import axios from "axios";

const instance = axios.create({
  baseURL: 'https://5f2929aba1b6bf0016ead10a.mockapi.io',
  timeout: 1000,
});

export const getTodos = () => {
  return instance.get('/todos');
}

export const updateTodo = (id, status) => {
  return instance.put(`/todos/${id}`, {status: status})
}

export const addTodo = (content) => {
  console.log(content);
  return instance.post('/todos', {content: content})
}

export const deleteTodo = (id) => {
  return instance.delete(`/todos/${id}`)
}