import { TODOS_REQUEST, TODOS_SUCCESS, TODOS_FAILURE } from '../actions/todos.js';

const todos = (state = {isUser: false, errorMessage: '', todos: [] }, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
      return {
        ...state,
        isUser: true,
      };
    case TODOS_SUCCESS:
      return {
        ...state,
        isUser: true,
        todos: action.todos,
        errorMessage: '',
      };
    case TODOS_FAILURE:
      return {
        isUser: true,
        errorMessage: action.message,
      }
    default:
      return state;
  }
};

export default todos;

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         (todo.id === action.id)
//           ? {...todo, completed: !todo.completed}
//           : todo
//       )
//     default:
//       return state
//   }
// }

// export default todos