import React from 'react';
import { MenuItem, Button, Menu } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';

function App() {
  const [anchorE1, setAnchorE1] = React.useState(null)

  const handleClose = () => {
    setAnchorE1(null)
  }

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget)
  }

  return (
    <div
      style={{marginLeft: "40%"}}
    >
      <h2>How to use Menu Component in ReactJS?</h2>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu List
      </Button>
      <Menu
        keepMounted
        anchorE1={anchorE1}
        onClose={handleClose}
        open={Boolean(anchorE1)}
      >
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default App;

/*
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>
*/