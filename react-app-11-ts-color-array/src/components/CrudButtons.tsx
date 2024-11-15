import React, { FC } from 'react'
import axios from 'axios'
import {faker} from '@faker-js/faker'

interface CrudProps {
}
const CrudButtons: FC<CrudProps> = () => {
    const handleColorChange = async(type: string) => {
        if(type === 'add'){
            const addColorToDataBase = await axios.post(`http://localhost:3001/colors`,{
                id: faker.string.alphanumeric(10),
                value: faker.color.human()
            } )
            console.log("Color Added", addColorToDataBase.data)
            
        }else if(type === 'remove'){
            const dbData = await axios.get("http://localhost:3001/colors");
            const dataItems = await dbData.data;
            const lastItemId = dataItems[dataItems.length -1].id
            const removeColorFromDataBase = await axios.delete(`http://localhost:3001/colors/${lastItemId}`)
            console.log("Color Removed", removeColorFromDataBase.data)
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
