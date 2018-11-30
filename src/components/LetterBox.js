import React from 'react';
import Letter from './Letter';

const LetterBox = ({ secretWord, letterGuesses }) => {
  return (
      <div className="letterBox">
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
  )
}

export default LetterBox;
