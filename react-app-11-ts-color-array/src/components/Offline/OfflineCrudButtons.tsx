import React, { FC } from 'react'

interface CrudProps {
    addColor: () => void;
    removeColor: () => void;
}
const OfflineCrudButtons: FC<CrudProps> = ({addColor, removeColor}) => {
    const handleColorChange = (type: string) => {
        if(type === 'add'){
            console.log("Color Added")
            addColor() // Add the color to the color array
        }else if(type === 'remove'){
            console.log("Color Removed")
            removeColor() // Remove the color from the color array
        }

    }
  return (
    <div>
        <button onClick={()=>handleColorChange("add")}>++Add Color++</button>
        <button onClick={()=>handleColorChange("remove")}>--Remove Color--</button>
    </div>
  )
}

export default OfflineCrudButtons;
