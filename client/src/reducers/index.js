// import { combineReducers, applyMiddleware, createStore } from 'redux'
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

// const middleware = [thunk];

// middleware.push(createLogger({
//   collapsed: (getState, action, logEntry) => !logEntry.error,
// }));

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// });

// const store = createStore(
//   todoApp,
//   applyMiddleware(...middleware),
// );

// export default store