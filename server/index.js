const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Todo = require('../db/index.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/public')));


app.post('/todo', (req, res) => {
  let todo = new Todo({
    'title': req.body.title,
    'summary': req.body.summary,
    'completed': false,
  });

  res.send(JSON.stringify('Successful Post!'));
});

app.get('/todos', (req, res) => {

  Todo.find({}, (err, todos) => {
    if (err) {
      console.log( 'server get failure', err);
    } else {
      console.log('Successful Get!');
    }

    res.end(JSON.stringify(todos));
  });
});

app.put('/update', (req, res) => {
  console.log(req.body.todo.id);
  let query = { id: req.body.todo.id };

  Todo.findOneAndUpdate(query, {completed: req.body.todo.completed}, (err, todo) => {
    if (err) {
      console.log('update error');
    } else {
      console.log('successful update');
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`breadware todo list listening on ${port}`);
});