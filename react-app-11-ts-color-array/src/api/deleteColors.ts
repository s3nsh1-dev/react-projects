import axios from "axios";
import { fetchColors } from "./fetchColors";

const deleteColors = async () => {
  console.log("Deleting Colors");
  const dbData = await axios.get("http://localhost:3001/colors");
  const dataItems = await dbData.data;
  const lastItemId = dataItems[dataItems.length - 1].id;
  await axios.delete(`http://localhost:3001/colors/${lastItemId}`);
  return await fetchColors();
};

export default deleteColors;
