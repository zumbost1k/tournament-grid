import React from 'react';
import './table.css';
import { useSelector } from 'react-redux';
import { allUsers } from '../../store/selectors';

const Table = () => {
  const allUsersList = useSelector(allUsers);
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
        return (
          <tbody key={currentUser.name} className='table-line'>
            <tr>
              <td className='text table__text'>{currentUser.name}</td>
              <td className='text table__text'>{currentUser.gameQuantity}</td>
              <td className='text table__text'>
                {currentUser.resultOfGames.map((resultOfGame) => {
                  return resultOfGame ? (
                    <span className='text_text_green'>W </span>
                  ) : (
                    <span className='text_text_red'>L </span>
                  );
                })}
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Table;
