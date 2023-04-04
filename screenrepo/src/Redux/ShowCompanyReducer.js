// Show company reducer 
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
  loading: false,
  error: null,
};

const showCompanySlice = createSlice({
  name: 'showCompany',
  initialState,
  reducers: {
    setCompanies: (state, action) => {
      state.companies = [...state.companies, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetCompanies: (state) => {
      state.companies = [];
    },
  },
});

export const { setCompanies, setLoading, setError, resetCompanies } = showCompanySlice.actions;

export default showCompanySlice.reducer;
