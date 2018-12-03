import React from 'react';
import './Letter.css'

const Letter = ({ letterGuesses, letterValue, guessLetter }) => {
  return (
      guessLetter ?
        <span className="guessedletterTiles"> {letterGuesses.includes(letterValue) ? letterValue : '☐'} </span>
      :
        <span className="letterTiles">{letterGuesses.includes(letterValue) ? letterValue : '☐'} </span>

  )
}

export default Letter;
