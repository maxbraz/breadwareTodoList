import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      sumarry: '',
      completed: false,
    }

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {

  }

  render () {

    return (
      <div>
        <TextField
          fullWidth
          floatingLabelText="create a todo item"
          required
          id="title"
          type="text"
          name="todo"
          floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
          underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          onChange={this.handleChange}
        />
        <TextField
          fullWidth
          floatingLabelText="add a summary"
          required
          id="title"
          type="text"
          name="todo"
          floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
          underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          onChange={this.handleChange}
        />
        <RaisedButton label="Login" primary={true} onClick={this.handleLogin} />
      </div>
    )
  }
}
AddTodo = connect()(AddTodo)

export default AddTodo
// dispatch(addTodo(input.value))
