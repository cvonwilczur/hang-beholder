import React from 'react';

const Letter = ({ letterGuesses, letterValue }) => {
  return (
    <div>
      <p> {letterGuesses.includes(letterValue) ? letterValue : '_'} </p>
    </div>
  )
}

export default Letter;
