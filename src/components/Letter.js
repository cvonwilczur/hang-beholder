import React from 'react';

const Letter = ({ letterGuesses, letterValue }) => {
  return (
      <p> {letterGuesses.includes(letterValue) ? letterValue : '_'} </p>
  )
}

export default Letter;
