import React from 'react';
import './Letter.css'

const Letter = ({ letterGuesses, letterValue }) => {
  return (
      <p className="letter"> {letterGuesses.includes(letterValue) ? letterValue : '☐'} </p>
  )
}

export default Letter;
