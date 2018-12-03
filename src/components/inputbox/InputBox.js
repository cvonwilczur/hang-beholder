import React from 'react';

const InputBox = (props) => {
  return (
    <div>
        <div className="submitBox">
          <input
          onChange={props.handleChange}
          onKeyPress={props.handleSubmitKey}
           type="text"/>
          <button
            onClick={props.handleSubmitClick}
            >Try a glyph!</button>
        </div>
        <div className="difficultyBox">
            Choose a Difficulty:
              <input type="radio" name="difficulty" value="Easy" onChange={props.handleChangeRadio} checked={props.difficulty === 'Easy'}/> Easy (Default)
              <input type="radio" name="difficulty" value="Medium" onChange={props.handleChangeRadio} checked={props.difficulty === 'Medium'}/> Medium
              <input type="radio" name="difficulty" value="Hard" onChange={props.handleChangeRadio} checked={props.difficulty === 'Hard'}/> Hard
        </div>
    </div>
  )
}

export default InputBox;
