import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ENDPOINT = 'http://192.168.0.173/apexw/hs/catalogs/categories';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (props, { rejectWithValue }) => {
    const response = await axios.get(ENDPOINT, {
      headers: {
        Authorization: `Basic ${props.userToken}`,
      },
    });
    return response.data.result.categories;
  }
);

const initialState = {
  categories: [],
  errors: '',
  loading: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.loading = action.payload;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.errors = '';
      state.loading = false;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
