import React from 'react';

const ColorBox = ({ colour, hexValue, isDarkText }) => {
  return (
    <div className='square' style={{ backgroundColor: colour, color: isDarkText? '#000' : '#fff' }}>
      <p>{colour ? colour : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
}

export default ColorBox;
