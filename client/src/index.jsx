import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import LandingPage from './components/LandingPage.jsx';
import Todos from './components/Todos.jsx';
import Edit from './components/Edit.jsx';
import Create from './components/Create.jsx';
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
        <div>
          <LandingPage/>
          <Route path='/login' component={LandingPage}/>
          <Route path='/todos' component={Todos}/>
          <Route path='/edit' component={Edit}/>
          <Route path='/create' component={AddTodo}/>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'));