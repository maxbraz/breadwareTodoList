const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/breadwareTodos';

mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongo connected');
});

let todoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  summary: String,
  completed: Boolean,
});

let Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;