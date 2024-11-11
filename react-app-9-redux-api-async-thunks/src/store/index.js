import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    /*
    this would work but to avoid typo we do
    albums: albumsApi.reducer,
    */
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  // action -> middleware -> reducers
  // allows to intercept(catch something moving from point A->B) the flow of actions and add custom behavior
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

/*
setupListeners() optimizes API queries by automatically refetching data
when certain conditions change (maybe when Mutation happens), like network
reconnection or focus changes. It’s optional but recommended for a
responsive API behavior.
*/
setupListeners(store.dispatch);

// exports everything from store if mentioned like below
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "./apis/photosApi";

/*
Example: Flow with Middleware
When you dispatch an action like useFetchAlbumsQuery, it’s intercepted by the albumsApi.middleware:
The middleware checks if the request is in cache. If not, it sends a network request.
It manages the loading and error states automatically while awaiting a response.
Once data is fetched, the middleware caches it, and the data is sent to reducers to update the Redux store.
*/
