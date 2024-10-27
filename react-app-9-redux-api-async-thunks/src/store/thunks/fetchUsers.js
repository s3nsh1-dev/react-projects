import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
"users/fetch" is not hard code u can u=customize anything
this is just a naming convention that helps and this part
of the code that is uses the pending and fullfilled tags
all happens inside the react, we do not see anything, when userfetch
runs in isLoading phase the path tag think used to communicate
is "user/fetch/pending" when all things fetched fine thunk tag is
"users/fetch/fullfilled" and if any error occured it's
"users/fetch/rejected"
*/
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const response = await axios.get("http://localhost:3001/users");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
});
