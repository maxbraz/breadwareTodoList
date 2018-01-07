import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import store from './store';
import LandingPage from './components/LandingPage.jsx';
import Todos from './components/Todos.jsx';
import Edit from './components/Edit.jsx';
import Create from './components/Create.jsx';
import Login from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import AddTodo from './containers/AddTodo.jsx';
import VisibleTodoList from './containers/VisibleTodoList.js';
import testData from '../../data.json';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/todos' component={Todos} />
          <Route exact path='/edit' component={Edit} />
          <Route exact path='/create' component={AddTodo} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));