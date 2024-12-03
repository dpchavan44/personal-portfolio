import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAwards = createAsyncThunk('awards/fetchAwards', async () => {
    const port =  process.env.REACT_APP_PORT || 5000;
    const apiUrl = process.env.REACT_APP_SERVER_SIDE_URL || `${process.env.REACT_APP_API_BASE_URL}:${port}/api/award`;
    //console.log(apiUrl);
    const response = await axios.get(apiUrl);
    return response.data;
});

const awardSlice = createSlice({
  name: 'awards',
  initialState: {
    awards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAwards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAwards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.awards = action.payload;
      })
      .addCase(fetchAwards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default awardSlice.reducer;