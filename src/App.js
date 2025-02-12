import React, { useState } from 'react';
import ColorBox from './components/ColorBox';
import AddInput from './components/AddInput';

function App() {
  const [colour, setColour] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorBox 
        colour={colour}
        hexValue = {hexValue}
        isDarkText= {isDarkText}
      />
      <AddInput 
        setColour={setColour}
        setHexValue= {setHexValue}
        isDarkText= {isDarkText}
        setIsDarkText= {setIsDarkText}
      />
    </div>
  );
}

export default App;
