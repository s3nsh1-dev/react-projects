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
      // REMOVE FOR PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
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
        providesTags: (result, error, user) => {
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
