import React from 'react';
import Letter from './Letter';

const LetterBox = ({ secretWord, letterGuesses }) => {
  return (
      <div>
        {
          secretWord.map((letter, i) => {
            return <Letter
              letterValue={secretWord[i]}
              letterGuesses={letterGuesses}
              />
          })
        }
      </div>
  )
}

export default LetterBox;
