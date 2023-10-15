import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AllUsersSlice } from '../features/allUsers';

const rootReducer = combineReducers({
  allUsers: AllUsersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
