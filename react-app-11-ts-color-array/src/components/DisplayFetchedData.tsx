// import React, { FC } from "react";
// import { useColorContext } from "../hooks/useColorContext";

// interface DataProp {
//   id: number;
//   value: string;
// }
// interface DataSetProp {
//   data: DataProp[];
// }

// const DisplayFetchedData: FC<DataSetProp> = ({ data }) => {
//   const { stateData } = useColorContext();
//   console.log("data:", data);
//   console.log("stateData:", stateData);
//   const renderFetchedColorData = data.map((color) => {
//     return <div key={color.id}>{color.value}</div>;
//   });
//   return <div>{renderFetchedColorData}</div>;
// };

// export default DisplayFetchedData;
import React from "react";
import { useColorContext } from "../hooks/useColorContext";

interface DataProp {
  id: string; // Ensure this matches your API data
  value: string;
}

const DisplayFetchedData = () => {
  // Explicitly cast stateData as DataProp[]
  const { stateData } = useColorContext() as { stateData: DataProp[] };

  const renderFetchedColorData = stateData.map((color) => {
    return <div key={color.id}>{color.value}</div>;
  });

  return <div>{renderFetchedColorData}</div>;
};

export default DisplayFetchedData;
