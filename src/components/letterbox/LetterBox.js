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
              letterValue={secretWord[i]}
              letterGuesses={letterGuesses}
              key={i}
              />
          })
        }
      </div>
      <div className="letterBoxLetters">
          Glyphs Guessed:
          {
            letterGuesses.map((letter, i) => {
              return <Letter
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
