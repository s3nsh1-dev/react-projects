import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    isLoading: false,
    colorHistory: [],
    error: null,
  },
  reducers: {
    addColor: (state, action) => {
      state.colorHistory = action.payload; // -> for now
      //   state.colorHistory.push(action.payload}); // -> preferred
    },
    fetchColors: (state, action) => {
      state.colorHistory = action.payload;
    },
    deleteColor: (state, action) => {
      state.colorHistory = action.payload; // -> for now
      // preferred way to implement deleteColor
      //   state.colorHistory = state.colorHistory.filter(
      //     (color) => color.id !== action.payload
      //   );
    },
  },
});

export const { addColor, fetchColors, deleteColor } = colorSlice.actions;
export const colorReducer = colorSlice.reducer;
