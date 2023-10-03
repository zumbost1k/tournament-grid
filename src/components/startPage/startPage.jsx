import React, { useState } from 'react';
import './startPage.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../features/allUsers';
import { selectQuantityOfUsers } from '../../store/selectors';

const StartPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const addNewUSer = () => {
    dispatch(addUser(userName));
    setUserName('');
  };
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
          <button
            onClick={addNewUSer}
            className='button form_button'
            type='submit'
          >
            Добавить пользователя
          </button>
        </form>
        <p className='text start__text'>
          Колличество зарегистрированных игроков:{' '}
          {useSelector(selectQuantityOfUsers)}
        </p>
        <Link to='/tournament' className='button start__button'>
          Начать турнир
        </Link>
      </div>
    </section>
  );
};

export default StartPage;
