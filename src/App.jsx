import { useState } from 'react';

const DEFAULT_HEX_COLOR = '#34495e';
const ERROR_BACKGROUND_COLOR = '#ee4b34';
const WHITE_COLOR = '#fff';

function convertHexToRgb(hexColor) {
  const hexRegex = /^#([0-9a-f]{6})$/i;
  if (!hexRegex.test(hexColor)) return null;
  
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);
  
  return `rgb(${red}, ${green}, ${blue})`;
}

function App() {
  const [hexColor, setHexColor] = useState(DEFAULT_HEX_COLOR);
  const [rgbColor, setRgbColor] = useState(convertHexToRgb(DEFAULT_HEX_COLOR));
  const [isColorValid, setIsColorValid] = useState(true);

  const handleHexColorChange = (event) => {
    const inputValue = event.target.value.trim();
    const convertedRgbColor = convertHexToRgb(inputValue);
    
    setHexColor(inputValue);

    if (convertedRgbColor) {
      setRgbColor(convertedRgbColor);
      setIsColorValid(true);
    } else {
      setRgbColor('Ошибка!');
      setIsColorValid(false);
    }
  };

  return (
    <div
      className="app"
      style={{ backgroundColor: isColorValid ? (hexColor || WHITE_COLOR) : ERROR_BACKGROUND_COLOR }}
    >
      <div className="container">
        <input
          type="text"
          placeholder={DEFAULT_HEX_COLOR}
          maxLength={7}
          value={hexColor}
          onChange={handleHexColorChange}
        />
        <div className={`output ${isColorValid ? 'valid' : 'error'}`}>
          {rgbColor}
        </div>
      </div>
    </div>
  );
}

export default App;
