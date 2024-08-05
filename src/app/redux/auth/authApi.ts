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
  id: string;
  password: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  is_accepted: boolean;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FLAT_API,
  }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, { user: User }>({
      query: ({ user }) => ({
        url: "auth/register",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: ({ user }) => ({
        url: "auth/jwt/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
