import React from 'react';
import './Gameover.css';

const GameOver = (props) => {
  return (
    <div>
      {props.gameWon ?
        <div>
          <p className="gameOverMessage"> You've unsummoned the Beholder! </p>
          <button class="submitButton" onClick={props.reset}>Play Again?</button>
        </div>
        :
      <div>
        <p className="gameOverMessage"> Oh no! The beholder has broken through! You lose! </p>
        <button class="submitButton" onClick={props.reset}>Try Again?</button>
      </div>
      }
    </div>
  )
}

export default GameOver;
