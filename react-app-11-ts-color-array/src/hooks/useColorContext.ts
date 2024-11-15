import { useContext } from "react";
import { ColorContext } from "../context/colorContext";

export const useColorContext = () => {
    return useContext(ColorContext);
}