import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articlesApi = createApi({
  reducerPath: 'articlesApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api' }),

  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: (offset) => ({
        url: '/articles',
        method: 'GET',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        params: {
          limit: 5,
          offset,
        },
      }),
    }),

    getSoloArticle: builder.query({
      query: (slug) => ({
        url: `/articles/${slug}`,
        method: 'GET',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
    }),

    createArticle: builder.mutation({
      query: (body) => ({
        url: '/articles',
        method: 'POST',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
        body,
      }),
    }),

    deleteArticle: builder.mutation({
      query: (slug) => ({
        url: `/articles/${slug}`,
        method: 'DELETE',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
    }),

    setFavoriteArticle: builder.mutation({
      query: (slug) => ({
        url: `/articles/${slug}/favorite`,
        method: 'POST',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
    }),

    deleteFavoriteArticle: builder.mutation({
      query: (slug) => ({
        url: `/articles/${slug}/favorite`,
        method: 'DELETE',
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetSoloArticleQuery,
  useCreateArticleMutation,
  useDeleteArticleMutation,
  useSetFavoriteArticleMutation,
  useDeleteFavoriteArticleMutation,
} = articlesApi;
