import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import RenderBox from './components/RenderBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      secretWord: ['d','u','m','m','y','t','e','s','t'],
      attempts: 0,
      letterGuesses: ['d', 't'],
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> Hang-Beholder </h1>
          <p> Look out! The Beholder is emerging! </p>
        </header>

        <main>
          <RenderBox
            attempts = {this.state.attempts}
            secretWord = {this.state.secretWord}
            letterGuesses = {this.state.letterGuesses}
           />
          <InputBox />
        </main>

      </div>
    );
  }
}

export default App;
