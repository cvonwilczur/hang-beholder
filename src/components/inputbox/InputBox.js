import React from 'react';
import './Inputbox.css';

const InputBox = (props) => {
  return (
    <div>
        <div className="submitBox">
          <input className="submitInput"
            onChange={props.handleChange}
            onKeyPress={props.handleSubmitKey}
            type="text"/>

          <button className="submitButton"
            onClick={props.handleSubmitClick}
          >Try a glyph!</button>

        </div>

        <div className="difficultyBox">
          Choose a Difficulty:
          <input className="radioButton"
            type="radio"
            name="difficulty"
            value="Easy"
            onChange={props.handleChangeRadio}
            checked={props.difficulty === 'Easy'}
          /> Easy (Default)

          <input className="radioButton"
            type="radio"
            name="difficulty"
            value="Medium"
            onChange={props.handleChangeRadio}
            checked={props.difficulty === 'Medium'}
          /> Medium

          <input className="radioButton"
            type="radio"
            name="difficulty"
            value="Hard"
            onChange={props.handleChangeRadio}
            checked={props.difficulty === 'Hard'}
          /> Hard
          
        </div>
    </div>
  );
}

export default InputBox;
