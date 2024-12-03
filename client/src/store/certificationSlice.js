import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCertifications = createAsyncThunk('certifications/fetchCertifications', async () => {
  const port = process.env.REACT_APP_PORT || 5000;
  let apiUrl;
  if(process.env.REACT_APP_SERVER_SIDE_URL) {
    apiUrl = process.env.REACT_APP_SERVER_SIDE_URL + '/api/certification';
  } else {
    apiUrl = `${process.env.REACT_APP_API_BASE_URL}:${port}/api/certification`;
  }
  const response = await axios.get(apiUrl);
  return response.data;
});

const certificationSlice = createSlice({
  name: 'certifications',
  initialState: {
    certifications: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCertifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.certifications = action.payload;
      })
      .addCase(fetchCertifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default certificationSlice.reducer;