import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../store";
import { getData } from "../store/thunks/getData";

const DisplayData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchingDatabaseInfo = async () => {
      const colorFetched = await getData();
      console.log("Color fetched", colorFetched);
    };
    fetchingDatabaseInfo();
  }, []);
  return <div style={{ fontWeight: "bold" }}></div>;
};

export default DisplayData;
