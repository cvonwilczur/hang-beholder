import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import RenderBox from './components/RenderBox';
import GameOver from './components/GameOver';
import portal from './portal.svg';

class App extends Component {
  constructor() {
    super()
    this.state = {
      secretWord: [],
      attempts: 0,
      letterGuesses: [],
      inputValue: '',
      gameWon: false,
      secretWords: []
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words')
      .then(response => response.text())
      .then(contents => {
        const wordsArray = contents.split('\n')
        this.setState({ secretWord: wordsArray[this.randomizeNumber()].split(''),
                        secretWords: wordsArray})
    })
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value})
  }

  handleSubmitKey = (event) => {
    if(event.charCode === 13){
      return this.handleSubmit(event);
    }
  }

  handleSubmitClick = (event) => {
    return this.handleSubmit(event);
  }

  handleSubmit = (event) => {
    let oldLetterGuesses = this.state.letterGuesses;
    oldLetterGuesses.push(this.state.inputValue);
    this.setState( { letterGuesses: oldLetterGuesses })
    if (!this.state.secretWord.includes(this.state.inputValue)){
      this.setState({ attempts: this.state.attempts + 1 })
    }
    if (this.state.secretWord.every(letter => this.state.letterGuesses.indexOf(letter) > -1)){
      this.setState({ gameWon: true })
    }
  }

  reset = () => {
    this.setState( {
      letterGuesses: [],
      attempts: 0,
      gameWon: false,
      inputValue: '',
      secretWord: this.state.secretWords[this.randomizeNumber()].split('')})
  }

  randomizeNumber = () => {
    return Math.floor(Math.random() * (162000) + 1);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> HangMage </h1>
        </header>

        <main>
          { this.state.gameWon || this.state.attempts === 6 ?
            <GameOver
              gameWon={this.state.gameWon}
              reset={this.reset} />
            :
            <div>
              <img className='portal' src={portal} width='20%' />

              <RenderBox
                attempts={this.state.attempts}
                secretWord={this.state.secretWord}
                letterGuesses={this.state.letterGuesses}
               />
              <InputBox
                handleSubmitClick={this.handleSubmitClick}
                handleSubmitKey={this.handleSubmitKey}
                handleChange={this.handleChange}
               />

            </div>
         }

        </main>


      </div>
    );
  }
}

export default App;
