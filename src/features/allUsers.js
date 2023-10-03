import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [
    {
      name: 'Bob',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Edward',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Roma',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Misha',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Vania',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Ania',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Maksim',
      resultOfGames: [false, false, false],
    },
    {
      name: 'Stas',
      resultOfGames: [false, false, false],
    },
  ],
  gameQuantity: 0,
};

export const AllUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    addWiners: (state, action) => {
      const winersNames = action.payload;
      state.allUsers = state.allUsers.map((currentUser) => {
        if (winersNames.includes(currentUser.name)) {
          currentUser.resultOfGames[state.gameQuantity] = true;
          return currentUser;
        } else {
          return currentUser;
        }
      });
      state.gameQuantity++
    },
  },
});
export const { addWiners } = AllUsersSlice.actions;
export default AllUsersSlice.reducer;
