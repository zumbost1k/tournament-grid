import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
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
          currentUser.resultOfGames[state.gameQuantity] = false;
          return currentUser;
        }
      });
      state.gameQuantity++;
    },
    addUser: (state, action) => {
      const newUser = { name: action.payload, resultOfGames: [] };
      if (newUser.name.length >= 1) {
        state.allUsers = state.allUsers.concat(newUser);
      }
    },
    resetUsers: (state) => {
      state.allUsers = [];
    },
  },
});
export const { addWiners, addUser, resetUsers } = AllUsersSlice.actions;
export default AllUsersSlice.reducer;
