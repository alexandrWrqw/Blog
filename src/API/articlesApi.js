import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api' }),

  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (_offset = 0) => ({
        url: '/articles',
        params: {
          limit: 5,
          offset: _offset,
        },
      }),
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
