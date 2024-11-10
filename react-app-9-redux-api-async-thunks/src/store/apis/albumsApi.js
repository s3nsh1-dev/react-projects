import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

/*
when we create an api with this process, in back of code
it creates a slice and that slice stores tons of date like
states related to the request we are going gto make with thi API
*/

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const albumsApi = createApi({
  reducerPath: "albums",
  // this method uses pre-configured version of fetch
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001", // base URL of the API
    fetchFn: async (...args) => {
      // REMOVE FOR PRODUCTION: added to remove lag between deletion and re-fetching data
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          // result is the DB data we fetched from the server
          // we we get an error, we use error instead
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        // here user is the value sent with request i can be named
        // anything but for simplicity user is used
        providesTags: (result, error, user) => {
          // creating set of tags based on albums of the requested user
          const tags = result.map((album) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "UsersAlbums", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
/*
this is A QUERY HOOK
albumsApi.useFetchAlbumsQuery();
*/
