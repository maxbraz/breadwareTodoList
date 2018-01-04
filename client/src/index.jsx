import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos.jsx';
import testData from '../../data.json';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  addTodo(todo) {
    let todos;
    axios.post('/todo', {
      todo: todo
    })
    .then(function(response) {
      todos = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetchTodos(todos);
  }

  fetchTodos(todos) {
    let fetchedTodos;
    let that = this;

    axios.get('/todos', {
      params: {
        todos: todos
      }
    })
    .then(function (response) {
      fetchedTodos = response.data;

      that.setState({todos: fetchedTodos});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Todos todos={this.state.todos}/>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));