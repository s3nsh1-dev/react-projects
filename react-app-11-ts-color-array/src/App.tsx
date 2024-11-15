import { useState } from 'react';

const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Cyan",
  "Magenta",
  "Lime",
  "Teal",
  "Indigo",
  "Violet",
  "Turquoise",
  "Gold",
  "Silver",
  "Beige",
  "Lavender",
  "Peach"
];


function App() {
  const [colorArray, setColorArray] = useState<string[]>([  "Red",
  "Blue",
  "Green",]);
  const handleAddColor = () => {
    const color: string = colors[Math.floor(Math.random() * colors.length)];
    setColorArray([...colorArray, color])
  }
  const handleRemoveColor = () =>{
    /*
    violets React by directly removeing from state
    setColorArray([...colorArray.pop()]);
    */
    // removes immutably
    setColorArray([...colorArray.slice(0,-1)])
  }
  return (
    <div>
      <button onClick={handleAddColor}>++Add Color++</button>
      <button onClick={handleRemoveColor}>--Remove Color--</button>
      {colorArray.map((color, index)=>{return <div key={index}>{color}</div>})}
    </div>
  );
}

export default App;
