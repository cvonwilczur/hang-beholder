import React from 'react';

const YouLost = (props) => {
  return (
    <div>
      <p> Oh no! The beholder has broken through! You lose! </p>
      <button onClick={props.reset}>Try Again?</button>
    </div>
  )
}

export default YouLost;
