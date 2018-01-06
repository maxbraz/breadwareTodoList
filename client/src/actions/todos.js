import axios from 'axios';

export const TODOS_REQUEST = 'TODOS_REQUEST';
export const TODOS_SUCCESS = 'TODOS_SUCCESS';
export const TODOS_FAILURE = 'TODOS_FAILURE';

export const requestTodos = () => ({
  type: TODOS_REQUEST,
});

export const receiveTodos = todos => ({
  type: TODOS_SUCCESS,
  todos,
});

export const todosError = message => ({
  type: TODOS_FAILURE,
  message,
});

export const getTodos = (todos) => (dispatch) => {
  dispatch(requestTodos());
  return axios.get('/todos', {
    params: {
      todos: todos
    }
  })
  .then(function(response) {
    dispatch(receiveTodos(response.data));
    return response.data;
  })
  .catch(error => dispatch(todosError(error.message)));
};