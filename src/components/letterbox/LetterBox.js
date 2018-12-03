import React from 'react';
import Letter from '../letter/Letter';
import './Letterbox.css';

const LetterBox = ({ secretWord, letterGuesses }) => {
  return (
      <div className="letterBox">
        <div className="letterBoxLetters">
          {
            secretWord.map((letter, i) => {
              return <Letter
                guessLetter={false}
                letterValue={secretWord[i]}
                letterGuesses={letterGuesses}
                key={i}
                />
            })
          }
        </div>
        <div className="guessBoxLetters">
            Glyphs Guessed:
            {
              letterGuesses.map((letter, i) => {
                return <Letter
                  guessLetter={true}
                  letterValue={letterGuesses[i]}
                  letterGuesses={letterGuesses}
                  key={i}
                />
              })
            }
          </div>
      </div>
  )
}

export default LetterBox;
