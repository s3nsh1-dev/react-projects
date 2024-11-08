import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

/*
when we create an api with this process, in back of code
it creates a slice and that slice stores tons of date like
states related to the request we are going gto make with thi API
*/
export const albumsApi = createApi({
  reducerPath: "albums",
  // gives use pre-configured version of fetch
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001", // base URL of the API
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
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
      addAlbum: builder.mutation({
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
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
/*
this is A QUERY HOOK
albumsApi.useFetchAlbumsQuery();
*/
