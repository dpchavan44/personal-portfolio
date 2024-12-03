import {createSlice} from '@reduxjs/toolkit';

const configData = createSlice({
  name: "configData",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleThemeMode: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setThemeMode: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { toggleThemeMode,setThemeMode } = configData.actions;
export default configData.reducer;