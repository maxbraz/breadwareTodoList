import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function handleClick() {
  alert('onClick triggered on the title component');
}

const Edit = () => (
  <div>
    <AppBar
      title={<span>Breadware Todos</span>}
      showMenuIconButton={false}
    />
    <h4> Edit Component </h4>
  </div>
);

export default Edit;