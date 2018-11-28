import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import RenderBox from './components/RenderBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      secretWord: 'dummytest'
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> Hang-Beholder </h1>
          <p> this is a test of the system </p>

          <RenderBox />

          <InputBox />

        </header>
      </div>
    );
  }
}

export default App;
