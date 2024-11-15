import { useState } from 'react';
import ShowColorsArray from './components/ShowColorsArray';
import { colorsList } from './constants/ListOfColors';

function App() {
  const [colorArray, setColorArray] = useState<string[]>([  "Red",
  "Blue",
  "Green",]);
  const handleAddColor = () => {
    const color: string = colorsList[Math.floor(Math.random() * colorsList.length)];
    setColorArray([...colorArray, color])
  }
  const handleRemoveColor = () =>{
    /*
    violets React by directly removing from state
    setColorArray([...colorArray.pop()]);
    */
    // removes immutably
    setColorArray([...colorArray.slice(0,-1)])
  }
  return (
    <div>
      <button onClick={handleAddColor}>++Add Color++</button>
      <button onClick={handleRemoveColor}>--Remove Color--</button>
      <ShowColorsArray colors = {colorArray}/>
    </div>
  );
}

export default App;
