import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: true,
  registerError: null,
  loginError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.registerError = null;
      state.loginError = null;
    },
    [authOperations.register.rejected](state, action) {
      // console.log("rregister ejected state  ==>>  ", state);
      console.log("rregister ejected action  ==>>  ", action.error.message);
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = false;
      state.registerError = action.error.message;
      state.loginError = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isFetchingCurrentUser = false;
      state.isLoggedIn = true;
      state.registerError = null;
      state.loginError = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.registerError = null;
      state.isFetchingCurrentUser = false;
      state.loginError = action.error.message;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.registerError = null;
      state.loginError = null;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      console.log("fetchCurrentUser fulfilled payload: ==>> ", action);
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.registerError = null;
      state.loginError = null;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      console.log("fetchCurrentUser rejected state  ==>>  ", state);
      state.isFetchingCurrentUser = false;
      // state.registerError = action.error.message;
    },
  },
});

export default authSlice.reducer;
