import { useColorState } from "../hooks/useColorState";
import { useFetchColors } from "../hooks/useFetchColors";
interface DataProp {
  id: string; // Ensure this matches your API data
  value: string;
}

const DisplayFetchedData = () => {
  useFetchColors();
  // Explicitly cast stateData as DataProp[]
  console.log("DisplayFetchedData.tsx");
  const { stateData } = useColorState() as { stateData: DataProp[] };
  const renderFetchedColorData = stateData.map((color) => {
    return <div key={color.id}>{color.value}</div>;
  });

  return <div>{renderFetchedColorData}</div>;
};

export default DisplayFetchedData;
