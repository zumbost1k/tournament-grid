import { createSelector } from 'reselect';

export const selectAllUsers = (state) => state.allUsers.allUsers;
export const selectGameQuantity = (state) => state.allUsers.gameQuantity;

export const selectFilterByStep = createSelector(
  [selectAllUsers, selectGameQuantity],
  (arrayOfUsers, step) => {
    return arrayOfUsers.filter((user) => {
      return user.resultOfGames[step];
    });
  }
);

export const selectAllTournamentSteps = createSelector(
  [selectAllUsers],
  (arrayOfUsers) => {
    let arrayOfUsersLength = arrayOfUsers.length;
    let meshCount = 0;
    while (arrayOfUsersLength !== 1) {
      arrayOfUsersLength /= 2;
      meshCount++;
    }
    return meshCount;
  }
);
