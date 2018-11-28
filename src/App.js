import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import RenderBox from './components/RenderBox';
import YouLost from './components/YouLost';

class App extends Component {
  constructor() {
    super()
    this.state = {
      secretWord: ['d','u','m','m','y','t','e','s','t'],
      attempts: 0,
      letterGuesses: ['d', 't'],
      inputValue: '',
      gameWon: false,
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    let oldLetterGuesses = this.state.letterGuesses;
    oldLetterGuesses.push(this.state.inputValue);
    this.setState( { letterGuesses: oldLetterGuesses,
                      attempts: this.state.attempts + 1})
  }

  handleSubmitKey = (event) => {
    if(event.charCode === 13){
      return this.handleSubmit(event);
    }
  }

  handleSubmitClick = (event) => {
    return this.handleSubmit(event);
  }

  reset = (event) => {
    this.setState( { letterGuesses: [], attempts: 0})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> Hang-Beholder </h1>
          <p> Look out! The Beholder is emerging! </p>
        </header>

        <main>
          { this.state.gameWon ?
            <p> You won! </p>
            :
            <div>
              <RenderBox
                attempts={this.state.attempts}
                secretWord={this.state.secretWord}
                letterGuesses={this.state.letterGuesses}
               />
              { this.state.attempts === 6 ?
                <YouLost reset={this.reset} />
              :
                <InputBox
                  handleSubmitClick={this.handleSubmitClick}
                  handleSubmitKey={this.handleSubmitKey}
                  handleChange={this.handleChange}
                 />
               }
            </div>
         }

        </main>


      </div>
    );
  }
}

export default App;
