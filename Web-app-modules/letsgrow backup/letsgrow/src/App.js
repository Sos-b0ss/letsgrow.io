import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lets Grow io!</h1>
        </header>
        <p className="App-intro">
          Uhm.. This is awkward. Were still under development. Come back soon!
        </p>
      </div>
    );
  }
}

export default App;
