import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
  alert('onClick triggered on the title component');
}

const LogoutBar = () => (
  <AppBar
    title={<span className="center">Breadware Todos</span>}
    iconElementRight={<FlatButton label="Logout" onClick={handleClick}/>}
    showMenuIconButton={false}
  />
);

export default LogoutBar;