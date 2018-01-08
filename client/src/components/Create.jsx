import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  button: {
    margin: 12,
  },
  paper: {
    height: '645px',
    textAlign: 'center',
    display: 'inline-block'
  }
};

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      summary: '',
      completed: false
    }

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {

  }

  render () {
    return (
      <div className="addTodo">
        <RaisedButton label="Create" primary={true} style={style.button} onClick={this.handleLogin} />
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo
// dispatch(addTodo(input.value))
