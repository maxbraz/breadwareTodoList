import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Todos from './components/Todos.jsx';
import testData from '../../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: testData
    }
    this.fetchTodos = this.fetchTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    let todos;
    axios.post('/item', {
      todo: todo
    })
    .then(function(response) {
      todos = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetch(todos);
  }

  fetchTodos(todos) {
    let fetchedTodos;

    axios.get('/items', {
      params: {
        todos: todos
      }
    })
    .then(function (response) {
      fetchedTodos = response.data;
      this.setState({todos: fetchedTodos})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (<div>
      <h1>Todos: </h1>
      <Todos todos={this.state.todos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));