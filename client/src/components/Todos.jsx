import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHeaderColumn,
} from 'material-ui/Table';

const Todos = ({todos}) => (
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
      </TableRow>
    </TableHeader>
    <TableBody>
      {todos.map((todo, i) => {
        return <Todo key={i} todo={todo} />
      })}
    </TableBody>
  </Table>
);

export default Todos;