import React, { Component } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import RenderBox from './components/RenderBox';
import GameOver from './components/GameOver';
import portal from './portal.svg';
import beholderone from './beholder_stage_1.svg';
import beholdertwo from './beholder_stage_2.svg';
import beholderthree from './beholder_stage_3.svg';
import beholderfour from './beholder_stage_4.svg';
import beholderfive from './beholder_stage_5.svg';
import beholdersix from './beholder_stage_6.svg';


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

  renderBeholderSwitch = (param) => {
    switch(param){
      case 1:
        return (
          <div>
            <img className='portal' src={portal}/>
            <img className='beholder' src={beholderone}/>
          </div>
          );
      case 2:
        return (
          <div>
            <img className='portal' src={portal}/>
            <img className='beholdertwo' src={beholdertwo}/>
          </div>
          );
      case 3:
        return (
          <div>
            <img className='portal' src={portal}/>
            <img className='beholderthree' src={beholderthree}/>
          </div>
          );
      case 4:
        return (
          <div>
            <img className='portal' src={portal}/>
            <img className='beholderfour' src={beholderfour}/>
          </div>
          );
      case 5:
        return (
          <div>
            <img className='portal' src={portal}/>
            <img className='beholderfive' src={beholderfive}/>
          </div>
          );
      case 6:
        return (
          <div>
            <img className='portal' src={portal}/>
            <img className='beholdersix' src={beholdersix}/>
          </div>
          );
      default:
        return <img className='portal' src={portal}/>;
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> HangMage </h1>
        </header>

        <main>

            <div>
              {this.renderBeholderSwitch(this.state.attempts)}

              <RenderBox
                attempts={this.state.attempts}
                secretWord={this.state.secretWord}
                letterGuesses={this.state.letterGuesses}
               />
             { this.state.gameWon || this.state.attempts === 6 ?
               <GameOver
                 gameWon={this.state.gameWon}
                 reset={this.reset} />
                 :
              <InputBox
                handleSubmitClick={this.handleSubmitClick}
                handleSubmitKey={this.handleSubmitKey}
                handleChange={this.handleChange}
               />
             }

            </div>


        </main>


      </div>
    );
  }
}

export default App;
