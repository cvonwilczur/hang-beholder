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
      secretWords: [],
      radioValue: '',
      difficulty: 'Easy'
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words')
      .then(response => response.text())
      .then(contents => {
        const wordsArray = contents.split('\n')
        this.setState({ secretWord: wordsArray[this.randomizeNumber(this.state.secretWords.length)].split(''),
                        secretWords: wordsArray})
    })
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value});
  }

  handleChangeRadio = (event) => {
    const { secretWords } = this.state;
    this.reset();
    this.setState({ difficulty: event.target.value });
    switch(event.target.value){
      case 'Easy':
        const easyArray = secretWords.filter(word => word.length <= 4)
        this.setState( {
          secretWord: easyArray[this.randomizeNumber(easyArray.length)].split('')})
        break;
      case 'Medium':
        const medArray = secretWords.filter(word => word.length <= 6 && word.length >= 4)
        this.setState( {
          secretWord: medArray[this.randomizeNumber(medArray.length)].split('')})
        break;
      case 'Hard':
        const hardArray = secretWords.filter(word => word.length > 6);
        this.setState( {
          secretWord: hardArray[this.randomizeNumber(hardArray.length)].split('')})
        break;
      default:
        break;
      }
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
    const { inputValue, letterGuesses, attempts } = this.state;
    const oldLetterGuesses = letterGuesses;
    oldLetterGuesses.push(inputValue);
    this.setState( { letterGuesses: oldLetterGuesses })
    if (!this.state.secretWord.includes(inputValue)){
      this.setState({ attempts: attempts + 1 })
    }
    if (this.state.secretWord.every(letter => letterGuesses.indexOf(letter) > -1)){
      this.setState({ gameWon: true })
    }
  }

  reset = () => {
    const { secretWords } = this.state;
    const easyArray = secretWords.filter(word => word.length <= 4)
    this.setState( {
      letterGuesses: [],
      attempts: 0,
      gameWon: false,
      inputValue: '',
      difficulty: 'Easy',
      secretWord: easyArray[this.randomizeNumber(easyArray.length)].split('')})
  }

  randomizeNumber = (upperLimit) => {
    return Math.floor(Math.random() * (upperLimit) + 1);
  }

  renderBeholderSwitch = (param) => {
    switch(param){
      case 1:
        return (
            <img className='beholder' src={beholderone}/>
          );
      case 2:
        return (
            <img className='beholdertwo' src={beholdertwo}/>
          );
      case 3:
        return (
            <img className='beholderthree' src={beholderthree}/>
          );
      case 4:
        return (
            <img className='beholderfour' src={beholderfour}/>
          );
      case 5:
        return (
            <img className='beholderfive' src={beholderfive}/>
          );
      case 6:
        return (
            <img className='beholdersix' src={beholdersix}/>
          );
      default:
        break;
    }
  }

  render() {
    const { attempts, secretWord, letterGuesses, gameWon, difficulty } = this.state;
    return (
      <div className="App">
        <header>
          <h1> HangMage </h1>
        </header>

        <main>
              <img className='portal' src={portal}/>
              {this.renderBeholderSwitch(attempts)}

              <RenderBox
                attempts={attempts}
                secretWord={secretWord}
                letterGuesses={letterGuesses}
               />
             { gameWon || attempts === 6 ?
               <GameOver
                 gameWon={gameWon}
                 reset={this.reset} />
                 :
              <InputBox
                handleSubmitClick={this.handleSubmitClick}
                handleSubmitKey={this.handleSubmitKey}
                handleChange={this.handleChange}
                handleChangeRadio={this.handleChangeRadio}
                difficulty={difficulty}
               />
             }
        </main>


      </div>
    );
  }
}

export default App;
