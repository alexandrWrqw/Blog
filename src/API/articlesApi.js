import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api' }),

  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: (_offset = 0) => ({
        url: '/articles',
        params: {
          limit: 5,
          offset: _offset,
        },
      }),
    }),

    getSoloArticle: builder.query({
      query: (_slug) => ({
        url: `/articles/${_slug}`,
      }),
    }),
  }),
});

export const { useGetAllArticlesQuery, useGetSoloArticleQuery } = articlesApi;
