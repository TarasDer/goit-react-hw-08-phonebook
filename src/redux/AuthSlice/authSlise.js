import { createSlice } from '@reduxjs/toolkit/dist';
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  currentUserThunk,
} from './operations';

const handleRegisterFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
  state.isLoading = false;
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

const handleLogoutFulfilled = state => {
  state.isLoggedIn = false;
  state.token = null;
  state.user = { name: null, email: null };
  state.isLoading = false;
};

const handleCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const initialeState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialeState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleRegisterFulfilled)
      .addCase(registerThunk.fulfilled, handleRegisterFulfilled)
      .addCase(logoutThunk.fulfilled, handleLogoutFulfilled)
      .addCase(currentUserThunk.fulfilled, handleCurrentUserFulfilled)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending);
  },
});

export const authReduser = authSlice.reducer;
