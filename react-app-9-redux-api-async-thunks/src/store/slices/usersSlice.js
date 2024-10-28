import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    /*
    in payload parameter we have the data, which automatically fetched from
    fetchUsers. and all that because of thunk functionality and its behavior
    with redux as communication is done with reducer, so thunk already sends
    the data to the reducer payload.
    */
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      /*
      when loading does not goes well thunk creates an error object
      action.error is that error object
      */
      state.error = action.error;
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;

/*
=> why not we use string but the command ?
=> because redux knows what he doing and reduces the chances of mistakes
means:
fetchUsers.pending === "user/fetch/pending"
fetchUsers.fulfilled === "user/fetch/fulfilled"
fetchUsers.rejected === "user/fetch/rejected"
*/
// export const {} = usersReducer.actions;
