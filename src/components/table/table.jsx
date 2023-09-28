import React from 'react';
import './table.css';
import { useSelector } from 'react-redux';
import { selectAllUsers, selectGameQuantity } from '../../store/selectors';

const UserTableBlock = ({ currentUser }) => {
  const currentGameStep = useSelector(selectGameQuantity);
  const quantityOfGamesPlayed = (gameResults, currentGameStep) => {
    if (currentGameStep === 0) {
      return 0;
    }
    let indexOfFalse = gameResults.slice(0, currentGameStep).indexOf(false);
    if (indexOfFalse === -1) {
      return currentGameStep;
    } else {
      return indexOfFalse + 1;
    }
  };
  return (
    <tbody key={currentUser.name} className='table-line'>
      <tr>
        <td className='text table__text'>{currentUser.name}</td>
        <td className='text table__text'>
          {quantityOfGamesPlayed(currentUser.resultOfGames, currentGameStep)}
        </td>
        <td className='text table__text'>
          {currentUser.resultOfGames.map((resultOfGame, index) => {
            return (
              currentGameStep > index &&
              index <
                quantityOfGamesPlayed(
                  currentUser.resultOfGames,
                  currentGameStep
                ) &&
              (resultOfGame ? (
                <span className='text_text_green'>W </span>
              ) : (
                <span className='text_text_red'>L </span>
              ))
            );
          })}
        </td>
      </tr>
    </tbody>
  );
};

const Table = () => {
  const allUsersList = useSelector(selectAllUsers);

  return (
    <table className='table content__table'>
      <thead>
        <tr>
          <th className='subtitle table__subtitle'>Участиники</th>
          <th className='subtitle table__subtitle'>Количество игр</th>
          <th className='subtitle table__subtitle'>Результат</th>
        </tr>
      </thead>
      {allUsersList.map((currentUser) => {
        return <UserTableBlock currentUser={currentUser} />;
      })}
    </table>
  );
};

export default Table;
