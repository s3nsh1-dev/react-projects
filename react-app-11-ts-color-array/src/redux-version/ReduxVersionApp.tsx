import React from "react";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import DisplayData from "./components/DisplayData";

const ReduxVersionApp = () => {
  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", margin: "10px 0px" }}>
        <AddButton />
        <DeleteButton />
      </div>
      <DisplayData />
    </div>
  );
};

export default ReduxVersionApp;
