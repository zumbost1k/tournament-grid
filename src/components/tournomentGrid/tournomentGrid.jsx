import React from 'react';
import './tournomentGrid.css';
import { useSelector } from 'react-redux';
import {
  selectAllTournamentSteps,
  selectAllUsers,
  selectGameQuantity,
} from '../../store/selectors';

const TournomentGridStep = ({ usersList, currentStep }) => {
  const currentGameStep = useSelector(selectGameQuantity);
  const meshCount = useSelector(selectAllTournamentSteps);
  return (
    <div className='tournoment-grids'>
      <table className='tournoment-grid'>
        {usersList.map((user, index) => {
          return (
            <tbody key={index} className='tournoment-block tournoment-grid__tournoment-block'>
              <tr>
                <td className='text tournoment-grid__text'>
                  {currentGameStep >= currentStep && user.name}
                </td>
              </tr>
              {index % 2 !== 0 && <br />}
            </tbody>
          );
        })}
      </table>
      {currentStep <= meshCount && (
        <TournomentGridStep
          usersList={filterByStep(usersList, currentStep)}
          currentStep={currentStep + 1}
        />
      )}
    </div>
  );
};

const filterByStep = (arrayOfUsers, step) => {
  return arrayOfUsers.filter((user) => {
    return user.resultOfGames[step];
  });
};

const TournomentGrid = () => {
  const allUsersList = useSelector(selectAllUsers);
  return (
    <div>
      <TournomentGridStep usersList={allUsersList} currentStep={0} />
    </div>
  );
};

export default TournomentGrid;
