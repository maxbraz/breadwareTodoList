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
      summary: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    const value = e.target.value;

    this.setState({
      title: value,
    });
  }

  handleSummaryChange(e) {
    const value = e.target.value;

    this.setState({
      summary: value,
    });
  }

  handleKeyPress(e) {
    let { title, summary, addTodo } = this.props;

    if (e.key === 'Enter') {
      addTodo({
        title: title,
        summary: summary,
      });
    }
  }

  handleClick() {
    this.props.addTodo({
      title: this.state.title,
      summary: this.state.summary
    });
  }

  render() {
    return (
      <div>
        <TextField
          floatingLabelText="title"
          required
          id="title"
          type="text"
          name="title"
          value={this.state.title}
          floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
          underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          onChange={this.handleTitleChange}
        />
        <TextField
          floatingLabelText="summary"
          required
          id="summary"
          type="text"
          name="summary"
          value={this.state.summary}
          floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
          underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
          onChange={this.handleSummaryChange}
        />
        <RaisedButton label="Add Todo" primary={true} style={style.button} onClick={this.handleClick} />
      </div>
    )
  }
}

// AddTodo = connect()(AddTodo)

export default AddTodo

// dispatch(addTodo(input.value))