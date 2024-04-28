import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  username: null,
  email: null,
  image: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.image = action.payload.image;
    },

    removeUser(state) {
      state.token = null;
      state.username = null;
      state.email = null;
      state.image = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
