import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlices";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  },
});

export default store;
