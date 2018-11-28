import React from 'react';

const InputBox = (props) => {
  return (
    <div>
        <input
        onChange={props.handleChange}
        onKeyPress={props.handleSubmitKey}
         type="text"/>
        <button
          onClick={props.handleSubmitClick}
          >Try a glyph!</button>
    </div>
  )
}

export default InputBox;
