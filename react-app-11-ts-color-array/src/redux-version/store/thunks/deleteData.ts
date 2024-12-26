import axios from "axios";
interface propType {
  id: string;
  value: string;
}

export const deleteData = async (color: propType) => {
  const response = await axios.delete(
    `http://localhost:3001/colors/${color.id}`
  );
  return response.data;
};
