import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");
console.log(token);
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
      query: ({ offset }) => `/listings?offset=${offset}&limit=10`,
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
  }),
});

export const {
  useListingQuery,
  useGetOneFlatQuery,
  useAddFlatMutation,
  useGetUsersProductsQuery,
} = productsApi;
