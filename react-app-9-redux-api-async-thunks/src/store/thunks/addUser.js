import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

// it seems like faker package is generating id and adding to the object automatically before returning
const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3001/users", {
    // name is depreciated person is used more
    name: faker.person.fullName(),
  });

  return response.data;
});

export { addUser };
