 import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchHistory: [],
};

const storeHistorySlice = createSlice({
  name: 'storeHistory',
  initialState,
  reducers: {
    addSearchHistory: (state, action) => {
      state.searchHistory = [...state.searchHistory, action.payload];
    },
  },
});

export const { addSearchHistory } = storeHistorySlice.actions;

export default storeHistorySlice.reducer;
