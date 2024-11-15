import React, { FC } from 'react'
interface ShowColorsArrayListProps {
    colors: string[],
  
}
const ShowColorsArray: FC<ShowColorsArrayListProps> = ({colors})=> {
    const renderColorList = colors.map((color, index)=>{return <div key={index}>{color}</div>})
  return (
    <div>
      {renderColorList}
    </div>
  )
}
export default ShowColorsArray