import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from '../API/articlesApi';

import articles from './articlesSlice';

export default configureStore({
  reducer: {
    articles,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});
