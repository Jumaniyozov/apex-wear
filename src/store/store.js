import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/usersSlice';
import categoriesSlice from  '../features/categories/categoriesSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
  },
});
