import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: localStorage.getItem('username') || null,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { username: action.payload };
      localStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.user = { username: null };
      localStorage.removeItem('username');
    },
    register: (state, action) => {
      // Handle user registration here, e.g., update state with registration data
      // You can also store additional user information if needed
    },
  },
});

export const { login, logout , register} = UserSlice.actions;
export const selectUser = (state) => state.user;
export default UserSlice;