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

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmployee: false,
      isManager: false,
      username: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleNameError = this.handleNameError.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;

    this.setState({
      username: value,
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleLogin();
    }
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
            <div className="center">
              <TextField
                floatingLabelText="username"
                required
                id="username"
                type="text"
                name="username"
                floatingLabelFocusStyle={{ color: 'rgb(255, 64, 129)' }}
                underlineFocusStyle={{ borderBottomColor: 'rgb(255, 64, 129)' }}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyPress}
              />
            <RaisedButton label="Login" primary={true} style={style.button} onClick={this.handleLogin} />
            </div>
          </div>
      )
    } else {
      return (
        <Redirect to='todos' />
      )
    }
  }
}

export default LandingPage;