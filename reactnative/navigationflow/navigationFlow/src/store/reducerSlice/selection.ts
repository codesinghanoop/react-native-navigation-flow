import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { submitSelection } from '../../network/services'

export const fetchSelection = createAsyncThunk(
  'users/fetchSelection',
  async () => {
    const response = await submitSelection();
    return response.data
  }
)

export const selectionSlice = createSlice({
  name: 'selection',
  initialState: {
    screenName: 0,
    loading: false,
    error: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSelection.fulfilled, (state, action) => {
      state.screenName = Math.random();
      state.loading = false;
    })
    builder.addCase(fetchSelection.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(fetchSelection.rejected, (state, action) => {
      state.loading = false;
    })
  },
})