import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Bar from './Bar.jsx'

const LandingPage = () => (
  <div>
    <Bar />
    <Link to="/login" className="center">
      <RaisedButton label="Get Started" primary />
    </Link>
  </div>
);

export default LandingPage;