import axios from "axios";

const host = "https://5f2929aba1b6bf0016ead10a.mockapi.io";

export default {

  getTodos: function () {
    return axios.get(host + '/todos');
  },

  updateTodo: function (id, status) {
    return axios.put(host + `/todos/${id}`, {status: status})
  },

  addTodo: function (content) {
    console.log(content);
    return axios.post(host + '/todos', {content: content})
  },

  deleteTodo: function (id) {
    return axios.delete(host + `/todos/${id}`)
  }

}