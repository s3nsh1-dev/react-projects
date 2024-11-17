import { addColors } from "../api/addColors";
import { fetchColors } from "../api/fetchColors";
import { useEffect } from "react";
import { useColorContext } from "./useColorContext";

const useAddColors = () => {
    const { handleColorState } = useColorContext();
    useEffect(()=>{
        const updateStateWithAdd = async () => {
        try{
            addColors(); // Add the new color to the API
                const response = await fetchColors();
                handleColorState(response);
            }catch(e){
            console.log(e);
        }
    }
    updateStateWithAdd(); // Update the state with the new color
},[])
}

export default useAddColors
