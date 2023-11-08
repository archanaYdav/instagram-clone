import {configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/authentication/signin.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers if needed
  },
});

export default store;