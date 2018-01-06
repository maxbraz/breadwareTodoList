import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import todos from '../reducers/todos.js';

const middleware = [thunk];

middleware.push(createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
}));

const store = createStore(
  todos,
  applyMiddleware(...middleware),
);

export default store;