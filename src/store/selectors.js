import { createSelector } from 'reselect';

export const selectAllUsers = (state) => state.allUsers.allUsers;
export const selectGameQuantity = (state) => state.allUsers.gameQuantity;

export const selectFilterByStep = createSelector(
  [selectAllUsers, selectGameQuantity],
  (arrayOfUsers, step) => {
    if (step === 0) {
      return arrayOfUsers;
    }
    return arrayOfUsers.filter((user) => {
      return user.resultOfGames[step - 1];
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

export const selectAllWinners = createSelector(
  [selectFilterByStep],
  (currentTournamentUsers) => {
    let currentGameStepFiltered = currentTournamentUsers;
    let currentGameUsers = [];
    let index = 0;
    if (!currentGameStepFiltered[1]) {
      return currentGameStepFiltered[0];
    }
    while (index < currentGameStepFiltered.length) {
      currentGameUsers.push([
        currentGameStepFiltered[index],
        currentGameStepFiltered[index + 1],
      ]);
      index += 2;
    }
    return currentGameUsers;
  }
);
