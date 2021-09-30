import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ENDPOINT = 'http://192.168.0.173/apexw/hs/catalogs/users';

export const fetchLoggingUser = createAsyncThunk(
  'users/fetchLoggingUser',
  async (props, { rejectWithValue }) => {
    const response = await axios.get(ENDPOINT, {
      headers: {
        Authorization: `Basic ${props.userToken}`,
      },
    });
    return response.data;
  }
);

export const logoutUser = createAsyncThunk('users/logoutUser', async () => {
  return false;
});

const initialState = {
  user: {},
  userToken: '',
  loggedIn: false,
  errors: '',
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [fetchLoggingUser.pending]: (state, action) => {
      state.loading = action.payload;
    },
    [fetchLoggingUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.errors = '';
    },
    [fetchLoggingUser.rejected]: (state, action) => {
      state.errors = 'Пожалуйста введите правильные данные';
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
