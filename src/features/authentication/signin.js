// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    name: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.name = action.payload.name;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
