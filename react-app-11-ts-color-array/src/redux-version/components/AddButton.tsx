import React from "react";
import { useReducer } from "react";

const AddButton = () => {
  const dispatch = useReducer;
  return (
    <div>
      <button style={{ padding: "5px 10px" }}>++Add More Data++</button>
    </div>
  );
};

export default AddButton;
