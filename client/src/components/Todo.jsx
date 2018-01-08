import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const Todo = ({ addTodo, userType, currentTodo, completed, title, summary, markComplete, todoId }) => {

  const todo = {
    id: todoId,
    title: title,
    completed: !completed,
    summary: summary,
  };

  if (userType === 'Employee') {
    return (
      <TableRow>
        <TableRowColumn style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {`${title}`}
        </TableRowColumn>
        <TableRowColumn style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {`${summary}`}
        </TableRowColumn>
        <TableRowColumn>{`${completed}`}</TableRowColumn>
        <TableRowColumn><FlatButton label="Mark Complete" primary onClick={() => { markComplete(todo)}} /></TableRowColumn>d
      </TableRow>
    )
  } else if (userType === 'Manager') {
    return (
      <TableRow>
        <TableRowColumn style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {`${title}`}
        </TableRowColumn>
        <TableRowColumn style={{textDecoration: completed ? 'line-through' : 'none'}}>
          {`${summary}`}
        </TableRowColumn>
        <TableRowColumn>{`${completed}`}</TableRowColumn>
        <TableRowColumn><FlatButton label="Edit" primary onClick={addTodo} /></TableRowColumn>
        <TableRowColumn><FlatButton label="Delete" secondary onClick={addTodo} /></TableRowColumn>
      </TableRow>
    )
  } else {
    return (
      <Redirect to={{
        pathname: '/login'
      }}/>
    )
  }
};

export default Todo;
