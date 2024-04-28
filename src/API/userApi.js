import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api' }),

  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body,
      }),
    }),

    signIn: builder.mutation({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = userApi;
