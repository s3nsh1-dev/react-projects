import React, { FC } from 'react'
interface DataProp {
    id: number,
    value: string,
}
interface DataSetProp {
    data: DataProp[],
}

const DisplayFetchedData: FC<DataSetProp> = ({data}) => {
    const renderFetchedColorData = data.map ((color)=>{
            return (<div key={color.id}>{color.value}</div>)
        })
  return (
    <div>
      {renderFetchedColorData}
    </div>
  )
}

export default DisplayFetchedData

