import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import { Link } from "react-router-dom";

function ReactTest() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/test" className="App-link" title="test">Go to Test</Link>
      </header>
    </div>
  );
}

export default ReactTest;