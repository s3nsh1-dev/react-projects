import { faker } from "@faker-js/faker";
import axios from "axios";
import { fetchColors } from "./fetchColors";

export const addColors = async () => {
  console.log("Adding Colors");
  await axios.post("http://localhost:3001/colors", {
    id: faker.string.alphanumeric(10),
    value: faker.color.human(),
  });
  return fetchColors();
};
