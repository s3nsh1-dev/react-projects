import { faker } from "@faker-js/faker";
import axios from "axios";

export const addColors = async () => {
    await axios.post("http://localhost:3001/colors",{
                id: faker.string.alphanumeric(10),
                value: faker.color.human()
            })
    const fetchResponse = await axios.get("http://localhost:3001/colors")
    return fetchResponse.data;
}