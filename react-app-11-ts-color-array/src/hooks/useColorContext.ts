import { useContext } from "react";
import { ColorContext } from "../context/colorContext";

export const useColorContext = () => {
    const context = useContext(ColorContext)
    if(!context){
        throw new Error("useColorContext must be used within a ColorContextProvider")
    }
    return context;
}