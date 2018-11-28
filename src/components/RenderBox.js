import React from 'react';
import LetterBox from './LetterBox';

const RenderBox = ({ secretWord, attempts }) => {
  return (
    <div>
      <div>
        {
          secretWord.map((letter, i) => {
            return <LetterBox
              letterValue = {secretWord[i]}
              />
          })
        }
      </div>
      <p> You have made {attempts} attempts! </p>
    </div>
  )
}

export default RenderBox;
