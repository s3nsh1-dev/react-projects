import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "./slices/colorSlice";
export const store = configureStore({
  reducer: {
    colors: colorReducer,
  },
});

export * from "./slices/colorSlice";
