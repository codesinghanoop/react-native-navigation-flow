import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getExp } from '../../network/services'

export const fetchExperiments = createAsyncThunk(
  'users/fetchExperiments',
  async () => {
    const response = await getExp();
    return response.data
  }
)

export const expSlice = createSlice({
  name: 'experiment',
  initialState: {
    screenName: '',
    loading: false,
    error: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExperiments.fulfilled, (state, action) => {
      state.screenName = action.payload;
      state.loading = false;
    })
    builder.addCase(fetchExperiments.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(fetchExperiments.rejected, (state, action) => {
      state.loading = false;
    })
  },
})