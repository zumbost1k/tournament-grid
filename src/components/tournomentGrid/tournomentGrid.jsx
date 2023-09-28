import React from 'react';
import './tournomentGrid.css';
import { useSelector } from 'react-redux';
import { allUsers } from '../../store/selectors';

const TournomentGridStep = ({ usersList, steps, currentStep }) => {
  return (
    <div className='tournoment-grids'>
      <table className='tournoment-grid'>
        {usersList.map((user, index) => {
          return (
            <tbody className='tournoment-block tournoment-grid__tournoment-block'>
              <tr>
                <td className='text tournoment-grid__text'>
                  {user.gameQuantity >= currentStep && user.name}
                </td>
              </tr>
              {index % 2 !== 0 && <br />}
            </tbody>
          );
        })}
      </table>
      {currentStep + 1 <= steps && (
        <TournomentGridStep
          usersList={filterByStep(usersList, currentStep + 1)}
          steps={steps}
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
  const allUsersList = useSelector(allUsers);

  return (
    <div>
      <TournomentGridStep
        usersList={allUsersList}
        steps={allUsersList[0].resultOfGames.length - 1}
        currentStep={0}
      />
    </div>
  );
};

export default TournomentGrid;
