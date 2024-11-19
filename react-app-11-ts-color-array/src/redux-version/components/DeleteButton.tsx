import React from "react";
import { useReducer } from "react";

const DeleteButton = () => {
  const dispatch = useReducer;
  return (
    <div style={{ margin: "0px 10px" }}>
      <button style={{ padding: "5px 10px" }}>--Delete last Entry--</button>
    </div>
  );
};

export default DeleteButton;
