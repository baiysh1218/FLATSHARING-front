import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  password: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  is_accepted: boolean;
}

interface RegisterResponse {
  password: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  is_accepted: boolean;
}

const tokens: { access_token: string; token_type: string } = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMWM5MWQ5Zi04OWFlLTRjNTgtYjAyNS1jYzdjZTQzMWE5OTEiLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyOTU2MTk3OH0.tR8RIeG-ScslAnRYoSb9pZ02ogXgoCOUJE7sB6gMXmQ",
  token_type: "bearer",
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flatsharingcommunity.com/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${tokens.access_token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    listing: builder.query({
      query: () => "/listings",
    }),
  }),
});

export const { useListingQuery } = productsApi;
