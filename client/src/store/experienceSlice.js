import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExperiences = createAsyncThunk('experience/fetchExperiences', async () => {
  const port = process.env.REACT_APP_PORT || 5000;
  // check if environment variable REACT_APP_SERVER_SIDE_URL is set or not
  let apiUrl;
  if(process.env.REACT_APP_SERVER_SIDE_URL) {
    apiUrl = process.env.REACT_APP_SERVER_SIDE_URL + '/api/experience';
  } else {
    apiUrl = `${process.env.REACT_APP_API_BASE_URL}:${port}/api/experience`;
  }
  console.log(apiUrl);
  const response = await axios.get(apiUrl);
  return response.data;
});

const experienceSlice = createSlice({
  name: 'experience',
  initialState: {
    experiences: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.experiences = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default experienceSlice.reducer;