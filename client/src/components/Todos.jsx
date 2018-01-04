import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.jsx';
import LogoutBar from './LogoutBar.jsx'
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';

const Todos = ({todos}) => (
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
        return <Todo key={i} todo={todo} />
      })}
    </TableBody>
  </Table>
  </div>
);

export default Todos;