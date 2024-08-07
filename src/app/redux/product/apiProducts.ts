import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FLAT_API,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    listing: builder.query({
      query: ({
        offset,
        direction,
        check_in_date,
        check_out_date,
        sorting,
      }) => {
        if (offset && direction && check_in_date && check_out_date && sorting) {
          return `/listings?direction=${direction}&check_in_date=${check_in_date}&check_out_date=${check_out_date}&sorting=${sorting}&offset=${offset}&limit=10`;
        } else {
          return "/listings";
        }
      },
    }),
    getOneFlat: builder.query({
      query: ({ id }) => `/listings/${id}`,
    }),
    getUsersProducts: builder.query({
      query: () => "/listings/user/me",
    }),
    addFlat: builder.mutation({
      query: (data: unknown) => ({
        url: "/listings",
        method: "POST",
        body: data,
      }),
    }),
    uploadImages: builder.mutation({
      query: ({ data, id }) => {
        console.log(data);

        return {
          url: `/listings/${id}/pictures`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useListingQuery,
  useGetOneFlatQuery,
  useAddFlatMutation,
  useGetUsersProductsQuery,
  useUploadImagesMutation,
} = productsApi;
