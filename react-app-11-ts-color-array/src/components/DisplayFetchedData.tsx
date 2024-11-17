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
