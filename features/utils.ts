import { createAsyncThunk } from '@reduxjs/toolkit';

import type { AxiosResponse } from 'axios';

interface ErrorMessage {
  error?: { message: string }[];
}

interface UnexpectedError {
  error: { message: string }[];
}

type APICall<T, U extends ErrorMessage> = (
  data: T
) => Promise<AxiosResponse<U>>;

export const createAsyncThunkHelper = <T, U extends ErrorMessage>(
  prefix: string,
  handler: APICall<T, U>
) =>
  createAsyncThunk<U, T, { rejectValue: UnexpectedError }>(
    prefix,
    async (data: T, thunkAPI) => {
      try {
        const resp = await handler(data);
        if (resp.data.error) {
          return thunkAPI.rejectWithValue({ error: resp.data.error });
        }

        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue({
          error: [{ message: 'Oops, something went wrong' }],
        });
      }
    }
  );
