import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const Todo = ({ onClick, completed, summary, title}) => (
  <TableRow>
    <TableRowColumn style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {`${title}`}
    </TableRowColumn>
    <TableRowColumn style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {`${summary}`}
    </TableRowColumn>
    <TableRowColumn>{`${completed}`}</TableRowColumn>
    <TableRowColumn><FlatButton label="Edit" primary onClick={onClick} /></TableRowColumn>
    <TableRowColumn><FlatButton label="Delete" secondary onClick={onClick} /></TableRowColumn>
  </TableRow>
)

export default Todo;
