import { useContext } from "react";
import { StateContext } from "../context/colorContext";

export const useColorState = () => {
  const stateData = useContext(StateContext);
  if (!stateData) {
    throw new Error(
      "useColorContext must be used within a ColorContextProvider"
    );
  }
  return stateData;
};
