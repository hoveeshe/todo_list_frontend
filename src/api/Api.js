import axios from "axios";

const instance = axios.create({
  baseURL: 'http://10.222.29.218:8010',
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