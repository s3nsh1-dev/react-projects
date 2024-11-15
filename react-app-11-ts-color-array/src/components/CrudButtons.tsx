import React, { FC } from 'react'

interface CrudProps {
}
const CrudButtons: FC<CrudProps> = () => {
    const handleColorChange = (type: string) => {
        if(type === 'add'){
            console.log("Color Added")
            
        }else if(type === 'remove'){
            console.log("Color Removed")
            
        }

    }
  return (
    <div>
        <button onClick={()=>handleColorChange("add")}>++Add Color++</button>
        <button onClick={()=>handleColorChange("remove")}>--Remove Color--</button>
    </div>
  )
}

export default CrudButtons;
