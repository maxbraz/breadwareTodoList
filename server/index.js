const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Todo = require('../db/index.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../client/dist')));

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

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`breadware todo list listening on ${port}`);
});