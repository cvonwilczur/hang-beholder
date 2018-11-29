import React from 'react';

const GameOver = (props) => {
  return (
    <div>
      {props.gameWon ?
        <div>
          <p> You've unsummoned the Beholder! </p>
          <button onClick={props.reset}>Play Again?</button>
        </div>
        :
      <div>
        <p> Oh no! The beholder has broken through! You lose! </p>
        <button onClick={props.reset}>Try Again?</button>
      </div>
      }
    </div>
  )
}

export default GameOver;
