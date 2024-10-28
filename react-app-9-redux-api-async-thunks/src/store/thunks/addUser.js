import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

// it seems like faker package is generating id automatically
const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3001/users", {
    name: faker.person.fullName(),
  });

  return response.data;
});

export { addUser };
