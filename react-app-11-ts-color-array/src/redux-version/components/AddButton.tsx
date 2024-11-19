import React from "react";
import { useDispatch } from "react-redux";
import { addColor } from "../store";

const AddButton = () => {
  const dispatch = useDispatch();
  const handleAddingColors = () => {
    // dispatch(addColor());
  };
  return (
    <div>
      <button style={{ padding: "5px 10px" }} onClick={handleAddingColors}>
        ++Add More Data++
      </button>
    </div>
  );
};

export default AddButton;
