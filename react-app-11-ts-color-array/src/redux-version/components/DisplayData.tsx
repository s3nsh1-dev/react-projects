import { useSelector } from "react-redux";
import { RootState } from "../store";

const DisplayData = () => {
  const weGotTheState = useSelector((state: RootState) => {
    return state.colors.colorHistory;
  });
  let renderingReduxStateColors = null;
  if (weGotTheState.length > 0) {
    renderingReduxStateColors = weGotTheState.map((info) => {
      return <div key={info.id}>{info.value}</div>;
    });
  }
  return <div style={{ fontWeight: "bold" }}>{renderingReduxStateColors}</div>;
};

export default DisplayData;
