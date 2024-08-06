import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import useAuth from "../../helpers/hooks/UseAuth";

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


const token = localStorage.getItem("token");
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_FLAT_API,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
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
    editUserInfo: builder.mutation({
      query: ({ user }) => ({
        url: "user_infos/me",
        method: "PATCH",
        body: user,
      }),
    }),
    getUser: builder.query({
      query: () => "/user_infos/me",
    }),
    getUserById: builder.query({
      query: ({ id }) => `/user_infos/${id}`,
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useEditUserInfoMutation,
  useGetUserQuery,
  useGetUserByIdQuery,
} = authApi;
