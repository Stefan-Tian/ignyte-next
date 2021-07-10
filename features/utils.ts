import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateErrors, updateSuccess } from './toast/toastSlice';
import type { AxiosResponse } from 'axios';

interface ErrorMessage {
  errors?: { message: string }[];
}

type APICall<T, U extends ErrorMessage> = (
  data: T
) => Promise<AxiosResponse<U>>;

interface SuccessMessage {
  message?: string;
}

type SuccessAndError = SuccessMessage & ErrorMessage;

export const createAsyncThunkHelper = <T, U extends SuccessAndError>(
  prefix: string,
  handler: APICall<T, U>
) =>
  createAsyncThunk<U, T, { rejectValue: void }>(
    prefix,
    async (data: T, thunkAPI) => {
      try {
        const resp = await handler(data);
        if (resp.data.message) {
          thunkAPI.dispatch(updateSuccess([{ message: resp.data.message }]));
        }
        return resp.data;
      } catch (error) {
        thunkAPI.dispatch(updateErrors(error.response.data.errors));
        return thunkAPI.rejectWithValue();
      }
    }
  );
