import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// exports everything from store if mentioned like below
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
