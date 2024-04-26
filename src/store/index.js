import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from '../API/articlesApi';
import { userApi } from '../API/userApi';

import articles from './articlesSlice';

export default configureStore({
  reducer: {
    articles,
    [articlesApi.reducerPath]: articlesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware, userApi.middleware),
});
