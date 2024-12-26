import { createAction } from "@reduxjs/toolkit";

// Define the action creator for resetting the app state
// this type does not belong to any current state
// to use this you must mention type = "app/reset" to extraReducer inside your slice object
export const reset = createAction("app/reset");
