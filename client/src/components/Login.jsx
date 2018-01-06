import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LogoutBar from './LogoutBar.jsx'
import Bar from './Bar.jsx'

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmployee: false,
      isManager: false,
      username: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNameError = this.handleNameError.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      username: value,
    });
  }

  handleNameError() {
    alert('Username must be either Employee or Manager');
  }

  handleLogin() {
    if (this.state.username === 'Manager') {
      this.setState({isManager: true});
    } else if (this.state.username === 'Employee') {
      this.setState({isEmployee: true});
    } else {
      this.handleNameError();
    }
  }

  render () {
    if (!this.state.isEmployee && !this.state.isManager) {
      return (
          <div>
            <Bar />
            <TextField
              fullWidth
              floatingLabelText="username"
              required
              id="username"
              type="text"
              name="username"
              floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
              underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
              onChange={this.handleChange}
            />
            <RaisedButton label="Login" primary={true} style={style.button} onClick={this.handleLogin} />
          </div>
      )
    } else {
      return (
        <Redirect to='todos' />
      )
    }
  }
}

export default Login;