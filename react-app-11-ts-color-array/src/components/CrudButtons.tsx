import React, { FC } from 'react'
import { addColors } from '../api/addColors'
import deleteColors from '../api/deleteColors'
interface CrudProps {
}
const CrudButtons: FC<CrudProps> = () => {
    const handleColorChange = async(type: string) => {
        if(type === 'add'){
            addColors()
        }else if(type === 'remove'){
            deleteColors()
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
