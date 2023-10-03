import { configureStore } from '@reduxjs/toolkit';
import { AllUsersSlice } from '../features/allUsers';

export const store = configureStore({
  reducer: {
    allUsers: AllUsersSlice.reducer,
  },
});
