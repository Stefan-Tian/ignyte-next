import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import authAPI from './authAPI';
import { createAsyncThunkHelper } from '../utils';

import type { AppState, AppThunk } from 'app/store';
import type {
  ResetPasswordData,
  ForgetPasswordData,
  LoginData,
  SignupData,
  AuthResponse,
} from './authAPI';

export const login = createAsyncThunkHelper<LoginData, AuthResponse>(
  'users/login',
  authAPI.login
);

export const signup = createAsyncThunkHelper<SignupData, AuthResponse>(
  'users/signup',
  authAPI.signup
);

export const forgetPassword = createAsyncThunkHelper<
  ForgetPasswordData,
  AuthResponse
>('users/forgetPassword', authAPI.forgetPassword);

export const resetPassword = createAsyncThunkHelper<
  ResetPasswordData,
  AuthResponse
>('users/resetPassword', authAPI.resetPassword);

interface ErrorMessage {
  message?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'failed';
  message: string;
  error: ErrorMessage[];
}

const initialState: AuthState = {
  isAuthenticated: false,
  status: 'idle',
  message: '',
  error: [],
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          login.pending,
          signup.pending,
          forgetPassword.pending,
          resetPassword.pending
        ),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        isAnyOf(
          login.fulfilled,
          signup.fulfilled,
          forgetPassword.fulfilled,
          resetPassword.fulfilled
        ),
        (state, { payload }) => {
          if (payload?.message) {
            state.message = payload.message;
          }
        }
      )
      .addMatcher(
        isAnyOf(
          login.rejected,
          signup.rejected,
          forgetPassword.rejected,
          resetPassword.rejected
        ),
        (state, { payload }) => {
          if (payload?.error) {
            state.error = payload.error;
          }
        }
      );
  },
});

export default authSlice.reducer;
