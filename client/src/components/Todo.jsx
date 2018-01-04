import React from 'react';
import ReactDOM from 'react-dom';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Todo = ({todo}) => (
  <TableRow>
    <TableRowColumn>{`${todo.title}`}</TableRowColumn>
    <TableRowColumn>{`${todo.summary}`}</TableRowColumn>
    <TableRowColumn>{`${todo.completed}`}</TableRowColumn>
  </TableRow>
)

export default Todo;
