import axios from "axios";

const deleteColors = async () => {
    const dbData = await axios.get("http://localhost:3001/colors");
    const dataItems = await dbData.data;
    const lastItemId = dataItems[dataItems.length -1].id
    await axios.delete(`http://localhost:3001/colors/${lastItemId}`)
  const fetchResponse = await axios.get("http://localhost:3001/colors")
    return fetchResponse.data;
}

export default deleteColors
