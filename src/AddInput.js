import React from 'react'
import colorNames from 'colornames';

const AddInput = ({
  setColour, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <label>Add Color Name:</label>
      <input 
        type="text"
        autoFocus
        placeholder='Add Colour Name'
        onChange={(e)=>{
          setColour(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button 
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
          TOGGLE TEXT COLOUR
      </button>
    </form>
  )
}

export default AddInput