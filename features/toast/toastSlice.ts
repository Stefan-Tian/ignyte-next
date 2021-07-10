import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { AppState } from 'app/store';
import type { StatusMessage } from '../types/error';

interface StatusMessageWithUniqueId extends StatusMessage {
  uniqueId: string;
}

interface ToastState {
  errors: StatusMessageWithUniqueId[];
  success: StatusMessageWithUniqueId[];
}

const initialState: ToastState = {
  errors: [],
  success: [],
};

const toasterSlice = createSlice({
  name: 'toaster',
  initialState,
  reducers: {
    updateErrors(state, action: PayloadAction<StatusMessage[]>) {
      const messagesWithUniqueId = action.payload.map((entry) => ({
        ...entry,
        uniqueId: Date.now() + entry.message,
      }));
      state.errors = state.errors.concat(messagesWithUniqueId);
    },
    updateSuccess(state, action: PayloadAction<StatusMessage[]>) {
      const messagesWithUniqueId = action.payload.map((entry) => ({
        ...entry,
        uniqueId: Date.now() + entry.message,
      }));
      state.success = state.success.concat(messagesWithUniqueId);
    },
    removeErrorByIndex(state, action: PayloadAction<number>) {
      state.errors = state.errors.filter((_, idx) => action.payload !== idx);
    },
    removeSuccessByIndex(state, action: PayloadAction<number>) {
      state.success = state.success.filter((_, idx) => action.payload !== idx);
    },
    clearAllErrors(state) {
      state.errors = [];
    },
    clearAllSuccess(state) {
      state.success = [];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: any) => {
      return { ...state, ...action.payload.toaster };
    },
  },
});

export const {
  updateErrors,
  updateSuccess,
  removeErrorByIndex,
  removeSuccessByIndex,
  clearAllErrors,
  clearAllSuccess,
} = toasterSlice.actions;

export const selectErrors = (state: AppState) => state.toaster.errors;
export const selectSuccess = (state: AppState) => state.toaster.success;

export default toasterSlice.reducer;
