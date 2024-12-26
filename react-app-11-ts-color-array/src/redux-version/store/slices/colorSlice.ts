// PayloadAction specifies the expected payload type
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the state
interface ColorState {
  isLoading: boolean;
  colorHistory: { id: string; value: string }[]; // Replace with the actual shape of your color data
  error: string | null;
}
const initialState: ColorState = {
  isLoading: false,
  colorHistory: [],
  error: null,
};

interface ColorHistoryPropType {
  id: string;
  value: string;
}

export const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<ColorHistoryPropType>) => {
      state.colorHistory.push(action.payload);
    },
    fetchColors: (state, action: PayloadAction<ColorHistoryPropType[]>) => {
      state.colorHistory = action.payload;
    },
    deleteColor: (state) => {
      state.colorHistory.pop();
    },
  },
});

export const { addColor, fetchColors, deleteColor } = colorSlice.actions;
export const colorReducer = colorSlice.reducer;
