import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colors",
  initialState: [],
  reducers: {
    addColor: (state, action) => {},
    fetchColors: (state, action) => {},
    deleteColor: (state, action) => {},
  },
});

export const { addColor, fetchColors, deleteColor } = colorSlice.actions;
export const { colorReducer } = colorSlice.reducer;
