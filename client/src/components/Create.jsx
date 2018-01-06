import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
  alert('onClick triggered on the title component');
}

const Create = () => (
  <div>
    <AppBar
      title={<span>Breadware Todos</span>}
      showMenuIconButton={false}
    />
    <h4>Create Component</h4>
  </div>
);

export default Create;