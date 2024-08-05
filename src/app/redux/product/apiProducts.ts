import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const BaseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result;
  const token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    result = await fetchBaseQuery({
      baseUrl: "https://api.flatsharingcommunity.com/",
      prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${token}`);
        return headers;
      },
    })(args, api, extraOptions);
  } else {
    result = await fetchBaseQuery({
      baseUrl: "https://api.flatsharingcommunity.com/",
    })(args, api, extraOptions);
  }

  return result;
};

const token = localStorage.getItem("token");
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flatsharingcommunity.com/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    listing: builder.query({
      query: () => "/listings?offset=1&limit=10",
    }),
  }),
});

export const { useListingQuery } = productsApi;
