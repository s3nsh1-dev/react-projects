import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
/*
import { createApi } from "@reduxjs/toolkit/query";
==> this version of { createApi } does not generate custom hook which support automatically
hooks which where generate when we create a query/mutation function in endpoints
adding /react at the end is necessary for automatic creation of custom hooka
*/

export const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return { type: "Photo", id: photo.id };
          });
          tags.push({ type: "AlbumPhoto", id: album.id });
          return tags;
        },
        query: (album) => ({
          url: "/photos",
          params: {
            albumsIs: album.id,
          },
          method: "GET",
        }),
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "AlbumPhoto", id: album.id }];
        },
        query: (album) => {
          return {
            method: "POST",
            url: "/photos",
            body: {
              albumId: album.id,
              //   url: faker.image.abstract(150, 150, true),
              url: faker.image.url(),
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo) => {
          return {
            method: "DELETE",
            url: `/photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
