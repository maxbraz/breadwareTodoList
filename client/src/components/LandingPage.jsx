import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Bar from './Bar.jsx'

const LandingPage = () => (
  <div>
    <Bar />
    <div className="center">
      <Link to="/login">
        <RaisedButton label="Get Started" primary />
      </Link>
    </div>
  </div>
);

export default LandingPage;