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
      easyWords: [],
      medWords: null,
      hardWords: null,
      radioValue: '',
      difficulty: 'Easy'
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words')
      .then(response => response.text())
      .then(contents => {
        const wordsArray = contents.split('\n')
        const easyArray = wordsArray.filter(word => word.length <= 4)
        this.setState({ secretWord: easyArray[this.randomizeNumber(easyArray.length)].split(''),
                        secretWords: wordsArray,
                        easyWords: easyArray})
    })
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value.toLowerCase()});
  }

  handleChangeRadio = (event) => {
    const { secretWords, easyWords, medWords, hardWords } = this.state;
    this.reset();
    this.setState({ difficulty: event.target.value });
    switch(event.target.value){
      case 'Easy':
        this.setState( {
          secretWord: easyWords[this.randomizeNumber(easyWords.length)].split('')})
        break;
      case 'Medium':
        if(!medWords){
          const medArray = secretWords.filter(word => word.length <= 6 && word.length > 4);
          this.setState({ medWords: medArray,
                          secretWord: medArray[this.randomizeNumber(medArray.length)].split('')
                        });
        } else {
          this.setState( {
            secretWord: medWords[this.randomizeNumber(medWords.length)].split('')})
        }
        break;
      case 'Hard':
        if(!hardWords){
          const hardArray = secretWords.filter(word => word.length > 6);
          this.setState({ hardWords: hardArray,
                          secretWord: hardArray[this.randomizeNumber(hardArray.length)].split('')
                        });
        } else {
          this.setState( {
            secretWord: hardWords[this.randomizeNumber(hardWords.length)].split('')})
        }
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
    const { inputValue, letterGuesses, attempts, secretWord } = this.state;
    const oldLetterGuesses = letterGuesses;
    if (!secretWord.includes(inputValue) && inputValue !== secretWord.join('') && inputValue && !oldLetterGuesses.includes(inputValue)){
      this.setState({ attempts: attempts + 1 })
    }
    oldLetterGuesses.push(inputValue);
    this.setState( { letterGuesses: oldLetterGuesses })
    if (secretWord.every(letter => letterGuesses.indexOf(letter) > -1) || inputValue === secretWord.join('')){
      this.setState({ gameWon: true })
    }
  }

  reset = () => {
    const { easyWords } = this.state;
    this.setState( {
      letterGuesses: [],
      attempts: 0,
      gameWon: false,
      inputValue: '',
      difficulty: 'Easy',
      secretWord: easyWords[this.randomizeNumber(easyWords.length)].split('')})
  }

  randomizeNumber = (upperLimit) => {
    let min = Math.ceil(1);
    let max = Math.floor(upperLimit);
    return Math.floor(Math.random() * (max - min)) + min;
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
