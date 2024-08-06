// In your apiProducts setup
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

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
        let queryString = `/listings?offset=${offset}&limit=10`;
        if (direction) queryString += `&direction=${direction}`;
        if (check_in_date) queryString += `&check_in_date=${check_in_date}`;
        if (check_out_date) queryString += `&check_out_date=${check_out_date}`;
        if (sorting) queryString += `&sorting=${sorting}`;
        return queryString;
      },
    }),
    getOneFlat: builder.query({
      query: ({ id }) => `/listings/${id}`,
    }),
    addFlat: builder.mutation({
      query: (data: unknown) => ({
        url: "/listings",
        method: "POST",
        body: data,
      }),
    }),
    uploadImages: builder.mutation({
      query: ({ data, id }) => ({
        url: `/listings/${id}/pictures`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useListingQuery,
  useGetOneFlatQuery,
  useAddFlatMutation,
  useUploadImagesMutation,
} = productsApi;
