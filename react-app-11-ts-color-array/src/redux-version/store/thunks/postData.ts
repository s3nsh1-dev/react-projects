import axios from "axios";
import { faker } from "@faker-js/faker";

export const postData = async () => {
  const response = await axios.post("http://localhost:3001/colors", {
    id: faker.string.alphanumeric(4),
    value: faker.color,
  });
  return response.data;
};