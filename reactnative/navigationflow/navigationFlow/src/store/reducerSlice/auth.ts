import { SCREENB } from './../../navigation/route';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { login } from '../../network/services'

export const fetchSessionId = createAsyncThunk(
  'users/fetchSessionId',
  async () => {
    const response = await login();
    return response.data
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    sessionId: 0,
    loading: false,
    error: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSessionId.fulfilled, (state, action) => {
      state.sessionId = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchSessionId.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(fetchSessionId.rejected, (state, action) => {
      state.loading = false;
    })
  },
})