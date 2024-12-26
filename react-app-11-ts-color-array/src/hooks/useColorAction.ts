import { useContext } from "react";
import { ActionContext } from "../context/colorContext";

export const useColorAction = () => {
  const stateMutation = useContext(ActionContext);
  if (!stateMutation) {
    throw new Error(
      "useColorContext must be used within a ColorContextProvider"
    );
  }
  return useContext(ActionContext);
};
