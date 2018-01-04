import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Todo from './Todo.jsx';
import LogoutBar from './LogoutBar.jsx'
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';

class Todos extends React.Component {
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
            return <Todo key={i} todo={todo} />
          })}
        </TableBody>
      </Table>
      </div>
    )
  }
}

export default Todos;