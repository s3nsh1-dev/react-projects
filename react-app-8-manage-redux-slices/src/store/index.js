import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";

// Create a Redux store instance
const store = configureStore({
  reducer: {
    form: formReducer, // this slice is used for form state
    cars: carsReducer,
  },
});

export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };

/*
----------------------NOTES----------------------
exporting can be done from formSLice and carSLice but to reduce complexity
its been imported there as exported as store functions.

i some big project itd been seen that import in redux is the reason for
confusion for react as well as user, so this way its a good practice as
well as not weird behavior from redux.
*/
