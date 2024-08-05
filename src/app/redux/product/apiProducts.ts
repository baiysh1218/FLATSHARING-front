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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkNDE0OTcyYy04NWM2LTQ2ZGMtOWEyNS1iYzA5MGRiZjQ5YmIiLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTczMDE0Mzg2OX0.4x2GSiXp5B2FtVi7gRWnCvfR09lUafAT_EHHEjGdpp8",
  token_type: "bearer",
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FLAT_API,
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
