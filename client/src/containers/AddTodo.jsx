import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>

    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo

// replace basic form with material ui
      // <TextField
      //   fullWidth
      //   floatingLabelText="create a todo item"
      //   required
      //   id="todo"
      //   type="text"
      //   name="todo"
      //   floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
      //   underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
      //   onChange={this.handleChange}
      // />
      // <RaisedButton label="Login" primary={true} style={style.button} onClick={this.handleLogin} />