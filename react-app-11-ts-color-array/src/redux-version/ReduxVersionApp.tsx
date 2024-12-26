import React from "react";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import DisplayData from "./components/DisplayData";
import { useDispatch } from "react-redux";
import { getData } from "./store/thunks/getData";
import { fetchColors } from "./store";

const ReduxVersionApp = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const callColorsApi = async () => {
      const response = await getData();
      dispatch(fetchColors(response));
    };
    callColorsApi(); // Fetch and dispatch colors when the component mounts
  }, [dispatch]);
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
