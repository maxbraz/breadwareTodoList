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
  TableHeaderColumn
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog'
import { getTodos } from '../actions/todos.js';
import Todo from './Todo.jsx';
import LogoutBar from './LogoutBar.jsx';
import Footer from './Footer.jsx';
import Create from './Create.jsx';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: {},
      showCreate: false,
      showEdit: false,
      userType: this.props.location.state.userType || 'unauthorized',
    }
    this.addTodo = this.addTodo.bind(this);
    this.fetchTodos = this.fetchTodos.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.handleDialog = this.handleDialog.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getTodos());
    this.fetchTodos();
  }

  handleDialog(type) {
    if (type === 'Create') {
      this.setState({
        showCreate: !this.state.showCreate,
      });
    } else {
      this.setState({
        showEdit: !this.state.showEdit,
      });
    }
  }

  addTodo() {
    axios.post('/todo', {
      todo: this.state.currentTodo
    })
    .then((res) => {
      console.log('successful addtodo');
      this.props.dispatch(getTodos());
      this.setState({ currentTodo: {} });
    })
    .catch((err) => {
      console.log(err);
    })

    this.fetchTodos();
  }

  fetchTodos() {
    let fetchedTodos;

    axios.get('/todos')
    .then((response) => {
      fetchedTodos = response.data;
      this.setState({todos: fetchedTodos});
    })
    .catch((error) => {
      console.log(error);
    });

  }

  markComplete (todo) {
    axios.put('/update', {todo: todo})
    .then((res) => {
      console.log(res);
      this.fetchTodos();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
    const { todos } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleDialog}
      />,
    ];

    if (this.state.userType === 'Manager') {
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
            {this.state.todos.map((todo, i) => {
              return
                <Todo
                  key={i}
                  completed={todo.completed}
                  todoId={todo._id}
                  title={todo.title}
                  summary={todo.summary}
                  currentTodo={this.state.currentTodo}
                  addTodo={this.addTodo}
                  userType={this.state.userType}
                />
            })}
          </TableBody>
        </Table>
        <Create onClick={this.handleDialog} />
        <Footer />
        </div>
      )
    } else if (this.state.userType === 'Employee') {
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
            {this.state.todos.map((todo, i) => {
              return
                <Todo
                  key={i}
                  completed={todo.completed}
                  title={todo.title}
                  summary={todo.summary}
                  userType={this.state.userType}
                  markComplete={this.markComplete}
                  todoId={todo._id}
                />
            })}
          </TableBody>
        </Table>
        <Footer />
        </div>
      )
    } else {
      return (
        <Redirect to={{
          pathname: '/login'
        }}/>
      )
    }
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);