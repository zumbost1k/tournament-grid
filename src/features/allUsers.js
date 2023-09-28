import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [
    {
      name: 'Bob',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Edward',
      resultOfGames: [true, false, false],
    },
    {
      name: 'Roma',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Misha',
      resultOfGames: [true, true, true],
    },
    {
      name: 'vania',
      resultOfGames: [false, false, false],
    },
    {
      name: 'ania',
      resultOfGames: [true, false, false],
    },
    {
      name: 'maksim',
      resultOfGames: [false, false, false],
    },
    {
      name: 'stas',
      resultOfGames: [true, true, false],
    },
  ],
  gameQuantity: 3,
};

export const AllUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},
});

export default AllUsersSlice.reducer;
