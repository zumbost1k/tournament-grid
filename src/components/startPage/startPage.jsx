import React, { useState } from 'react';
import './startPage.css';
import { Link } from 'react-router-dom';

const StartPage = () => {
  const [userName, setUserName] = useState('');
  return (
    <section className='start'>
      <div className=''>
        <form className='form start__form'>
          <input
            className='input input_from'
            type='text'
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <button className='button form_button' type='submit'>
            Добавить пользователя
          </button>
        </form>

        <Link to='/tournament' className='button start__button'>
          Начать турнир
        </Link>
      </div>
    </section>
  );
};

export default StartPage;
