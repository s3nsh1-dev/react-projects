import { useEffect } from "react";
import { useColorAction } from "./useColorAction";
import { fetchColors } from "../api/fetchColors";

interface DataProp {
  id: string; // Ensure this matches your API data
  value: string;
}
export const useFetchColors = () => {
  const { handleColorState } = useColorAction() as {
    handleColorState: (fetchData: DataProp[]) => void;
  };
  useEffect(() => {
    const fetchAndSetColors = async () => {
      try {
        const colors = await fetchColors();
        handleColorState(colors); // Update the context state
      } catch (err) {
        console.error("Error fetching colors:", err);
      }
    };

    fetchAndSetColors();
    // omitting the dependencies negates the meaning of useEffect()
  }, [handleColorState]);
};
/*
  calling fetchAndSetColor outside useEffect will cause infinite loop
  flow:
  start App
  All components loads
  DisplayFetchData calls useFetchColors
  useFetchColors immediately triggers and update the states
  state changes -> again useFetchColors is called immediately
  updates the state with DB data (this time he already had the data
  but we are replacing the values not updating the state technically)
  state changes -> DisplayFetchData triggers -> data show on screen(same data)
  calls useFetchColors again -> state changes -> and we in infinite loop .....
  */
