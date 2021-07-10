import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import authReducer from 'features/auth/authSlice';
import toastReducer from 'features/toast/toastSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      toaster: toastReducer,
    },
    devTools: process.env.NODE_ENV === 'development' ? true : false,
  });

const store = makeStore();
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
