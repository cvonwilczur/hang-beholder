import React from 'react';
import LetterBox from './LetterBox';

const RenderBox = ({ secretWord, attempts, letterGuesses }) => {
  return (
    <div className="renderBox">
      <LetterBox
          secretWord={secretWord}
          letterGuesses={letterGuesses}
      />
      <p> Oh no! The portal is open! Guess the magic word using your glyphs! You have made {attempts} failed attempts! </p>
    </div>
  )
}

export default RenderBox;
