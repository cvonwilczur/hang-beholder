import React from 'react';
import LetterBox from './LetterBox';

const RenderBox = ({ secretWord, attempts, letterGuesses }) => {
  return (
    <div>
      <LetterBox
          secretWord={secretWord}
          letterGuesses={letterGuesses}
      />
      <p> You have made {attempts} attempts! </p>
    </div>
  )
}

export default RenderBox;
