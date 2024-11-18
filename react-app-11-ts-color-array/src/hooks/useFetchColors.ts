import { useEffect } from "react";
import { useColorContext } from "../hooks/useColorContext";
import { fetchColors } from "../api/fetchColors";

export const useFetchColors = () => {
  const { handleColorState } = useColorContext();

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
  }, [handleColorState]); // Dependency ensures this runs only when `handleColorState` changes
};
