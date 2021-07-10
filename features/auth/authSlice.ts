import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import authAPI from './authAPI';
import { createAsyncThunkHelper } from '../utils';
import { HYDRATE } from 'next-redux-wrapper';

import type { AppState } from 'app/store';
import type {
  ResetPasswordData,
  ForgetPasswordData,
  LoginData,
  SignupData,
  VerifyData,
  ResendEmailData,
  AuthResponse,
} from './authAPI';
import { AuthType } from 'components/Form/constants/auth';

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

export const verifyAccount = createAsyncThunkHelper<VerifyData, AuthResponse>(
  'users/verifyAccount',
  authAPI.verifyAccount
);

export const resendVerificationEmail = createAsyncThunkHelper<
  ResendEmailData,
  AuthResponse
>('users/resendVerificationEmail', authAPI.resendVerificationEmail);

export interface AuthState {
  authType: AuthType;
  isAuthenticated: boolean;
  status: 'idle' | 'loading';
}

const initialState: AuthState = {
  authType: AuthType.SIGN_UP,
  isAuthenticated: false,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthType(state, action: PayloadAction<AuthType>) {
      state.authType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return (state = {
          ...state,
          ...action.payload.auth,
        });
      })
      .addMatcher(
        isAnyOf(
          login.pending,
          signup.pending,
          forgetPassword.pending,
          resetPassword.pending,
          verifyAccount.pending,
          resendVerificationEmail.pending
        ),
        (state) => {
          state.status = 'loading';
          return state;
        }
      )
      .addMatcher(
        isAnyOf(
          login.fulfilled,
          signup.fulfilled,
          forgetPassword.fulfilled,
          resetPassword.fulfilled,
          verifyAccount.fulfilled,
          resendVerificationEmail.fulfilled,
          login.rejected,
          signup.rejected,
          forgetPassword.rejected,
          resetPassword.rejected,
          verifyAccount.rejected,
          resendVerificationEmail.rejected
        ),
        (state) => {
          state.status = 'idle';
          return state;
        }
      );
  },
});

export const { updateAuthType } = authSlice.actions;

export const selectAuth = (id: keyof AuthState) => (state: AppState) => {
  return state.auth[id];
};

export default authSlice.reducer;
