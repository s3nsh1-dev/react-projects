import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/*
running axios.delete will need delete the user from backend storage 
 but the list in the frontpage od user will not update.. why ??? learning on that 
 */

export const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3001/users/${user.id}`);
  //   console.log(user);
  return user;
});
