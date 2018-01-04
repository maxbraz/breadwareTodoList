import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
  alert('onClick triggered on the title component');
}

const LogoutBar = () => (
  <AppBar
    title={<span>Breadware Todos</span>}
    showMenuIconButton={false}
  />
);

export default LogoutBar;