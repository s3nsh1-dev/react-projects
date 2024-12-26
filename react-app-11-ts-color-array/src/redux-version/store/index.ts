import { configureStore } from "@reduxjs/toolkit";
import { colorReducer } from "./slices/colorSlice";
export const store = configureStore({
  reducer: {
    colors: colorReducer,
  },
});

/*
Why this?
*/
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./slices/colorSlice";
