import React from 'react';
import ReactDOM from 'react-dom';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const Todo = ({todo}) => (
  <TableRow>
    <TableRowColumn>{`${todo.title}`}</TableRowColumn>
    <TableRowColumn>{`${todo.summary}`}</TableRowColumn>
    <TableRowColumn>{`${todo.completed}`}</TableRowColumn>
    <TableRowColumn><FlatButton label="Edit" primary /></TableRowColumn>
    <TableRowColumn><FlatButton label="Delete" secondary /></TableRowColumn>
  </TableRow>
)

export default Todo;
