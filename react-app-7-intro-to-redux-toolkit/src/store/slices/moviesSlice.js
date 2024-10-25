import { createSlice } from "@reduxjs/toolkit";

// import individual actionCreator function and use it inside the slices
import { reset } from "../actions";

const moviesSlice = createSlice({
  // name of the slice, it will be used in the store to access the state
  name: "movie",
  // initial state of the slice, it will be the state of the slice when the app starts for the first time
  initialState: [],
  // create action creators for adding and removing movies
  // not officially but i call them micro-Reducers sometime
  reducers: {
    addMovie(state, action) {
      // action.payload === movie object, the new movie we want to add to the state
      state.push(action.payload);
    },
    removeMovie(state, action) {
      // action.payload === string, the movie we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  // extraReducers helps to handle the reset action
  extraReducers(builder) {
    // whenever the app is reset, the state is set to initial state
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

// export action creators to be used directly by useDispatch to work on states
export const { addMovie, removeMovie } = moviesSlice.actions;

// this reducer is assigned to the state object keys on redux store
// to give them characteristics of the slices
export const moviesReducer = moviesSlice.reducer;
