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
  }, []);
};
