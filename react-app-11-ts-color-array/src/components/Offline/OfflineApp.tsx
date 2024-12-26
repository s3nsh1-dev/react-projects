import React from 'react'
import OfflineCrudButtons from './OfflineCrudButtons';
import OfflineShowColorsArray from './OfflineShowColorsArray';
import { colorsList } from '../../constants/ListOfColors';
export default function OfflineApp() {
    const [colorArray, setColorArray] = React.useState<string[]>([  "Red",
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
      <OfflineCrudButtons addColor={handleAddColor} removeColor={handleRemoveColor}/>
      <OfflineShowColorsArray colors = {colorArray}/>
    </div>
  )
}
