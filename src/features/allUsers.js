import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [
    {
      name: 'Bob',
      gameQuantity: 1,
      resultOfGames: [true, false, false, false],
    },
    {
      name: 'Edward',
      gameQuantity: 1,
      resultOfGames: [true, true, false, false],
    },
    {
      name: 'Roma',
      gameQuantity: 1,
      resultOfGames: [true, false, false, false],
    },
    { name: 'Misha', gameQuantity: 1, resultOfGames: [true, true, true, true] },
    {
      name: 'vania',
      gameQuantity: 1,
      resultOfGames: [true, false, false, false],
    },
    {
      name: 'ania',
      gameQuantity: 1,
      resultOfGames: [true, true, false, false],
    },
    {
      name: 'maksim',
      gameQuantity: 1,
      resultOfGames: [true, false, false, false],
    },
    { name: 'stas', gameQuantity: 1, resultOfGames: [true, true, true, false] },
  ],
};

export const AllUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    
  },
});

export default AllUsersSlice.reducer;
