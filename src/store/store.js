import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/usersSlice';

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
