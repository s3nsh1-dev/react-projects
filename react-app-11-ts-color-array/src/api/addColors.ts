import { faker } from "@faker-js/faker";
import axios from "axios";

export const addColors = async () => {
    const response = await axios.post("http://localhost:3001/colors",{
                id: faker.string.alphanumeric(10),
                value: faker.color.human()
            })
    return response.data;
}