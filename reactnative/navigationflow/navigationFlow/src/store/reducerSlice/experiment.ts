import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { SCREENB } from '../../navigation/route';
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
    error: null,
    previousRoute: SCREENB
  },
  reducers: {
    changeRoute: (state, action: PayloadAction<string>) => {
      state.previousRoute = action.payload
    }
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

export const { changeRoute } = expSlice.actions