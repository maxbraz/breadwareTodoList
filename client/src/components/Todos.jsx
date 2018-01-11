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
  }

  componentDidMount() {
    this.fetchTodos();
  }

  addTodo(todo) {
    let todos;
    axios.post('/todo', {
      title: todo.title,
      summary: todo.summary,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

    this.fetchTodos();
  }

  fetchTodos() {
    this.props.dispatch(getTodos());
    this.setState({
      todos: this.props.todos,
    });
  }

  render () {
    const { todos } = this.props;
    const { currentTodo } = this.state;

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
          {this.props.todos.map((todo, i) => {
            return <Todo key={i} completed={todo.completed} title={todo.title} summary={todo.summary} />
          })}
        </TableBody>
      </Table>
      <AddTodo addTodo={this.addTodo} />
      <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);