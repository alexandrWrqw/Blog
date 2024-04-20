import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
  name: 'articles',

  initialState: {
    articles: [],
  },
});

export default articlesSlice.reducer;
