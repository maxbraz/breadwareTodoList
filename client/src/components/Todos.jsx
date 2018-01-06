import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';
import { getTodos } from '../actions/todos.js';
import Todo from './Todo.jsx';
import LogoutBar from './LogoutBar.jsx';
import Footer from './Footer.jsx';
import AddTodo from '../containers/AddTodo.jsx';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: {},
    }
    this.addTodo = this.addTodo.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getTodos());
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      // this.addTodo();
      console.log('enter pressed');
    }
  }

  addTodo(todo) {
    let tasks;
    axios.post('/todo', {
      todo: todo
    })
    .then(function(response) {
      tasks = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })

    this.fetchTodos(tasks);
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
    const { todos } = this.props;

    return (
      <div>
      <LogoutBar />
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Summary</TableHeaderColumn>
            <TableHeaderColumn>Completed</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo, i) => {
            return <Todo key={todo.id} completed={todo.completed} title={todo.title} summary={todo.summary} />
          })}
        </TableBody>
      </Table>
      <AddTodo />
      <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);