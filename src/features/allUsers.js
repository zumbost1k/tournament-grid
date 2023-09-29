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
      name: 'Vania',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Ania',
      resultOfGames: [true, false, false],
    },
    {
      name: 'Maksim',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Stas',
      resultOfGames: [true, true, false],
    },
  ],
  gameQuantity: 0,
};

export const AllUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {},
});

export default AllUsersSlice.reducer;
