import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

// Create a Redux store instance
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// one point of contact for sharing store states and mutating functions
export { store, reset, addSong, removeSong, addMovie, removeMovie };
