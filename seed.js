let Todo = require('./db/index.js');
let todos = require('./data.json');

for (let todo of todos) {
  let todoo = new Todo({
    title: todo.title,
    summary: todo.summary,
    completed: todo.completed,
  });
  todoo.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully seeded db');
    }
  });
}