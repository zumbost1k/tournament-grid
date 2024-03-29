import React, { useState } from 'react';
import './startPage.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, resetUsers } from '../../features/allUsers';
import { selectQuantityOfUsers } from '../../store/selectors';

const StartPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const qantityOfUsers = useSelector(selectQuantityOfUsers);
  const isPowerOfTwo = (number) => {
    if (number <= 1) {
      return false;
    }
    while (number % 2 === 0) {
      number /= 2;
    }
    return number === 1;
  };
  const gameStartLink = (e) => {
    if (!isPowerOfTwo(qantityOfUsers)) {
      e.preventDefault();
    }
  };
  const addNewUSer = () => {
    dispatch(addUser(userName));
    setUserName('');
  };

  const deleteAllUSers=()=>{
    dispatch(resetUsers());
  }
  return (
    <section className='initial'>
      <div className='start initial__start'>
        <form className='form start__form'>
          <input
            className='input input_from'
            id='user_name'
            type='text'
            placeholder='введите имя пользователя...'
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
          <div>
            <button
              onClick={addNewUSer}
              className='button form_button'
              type='submit'
            >
              Добавить пользователя
            </button>
          </div>
        </form>
        <p className='text start__text'>
          Колличество зарегистрированных игроков: {qantityOfUsers}
        </p>
        <Link
          onClick={gameStartLink}
          to='/tournament'
          className='button start__button'
        >
          Начать турнир
        </Link>
        {!isPowerOfTwo(qantityOfUsers) && (
          <p className='text start__text start__text_danger'>
            Для запуска игры необходимо большее колличество игроков
          </p>
        )}
        <button onClick={deleteAllUSers} className='button start__button_danger'>
          Удалить пользователей
        </button>
      </div>
    </section>
  );
};

export default StartPage;
