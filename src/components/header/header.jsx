import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='title header__title'>
        <span className='header__title_red'>S</span>im{' '}
        <span className='header__title_red'>R</span>acing{' '}
        <span className='header__title_red'>T</span>ournament
      </h1>
      <img src='./photos/tournLogo.png' alt='logo' width='142' height='141' />
    </header>
  );
};

export default Header;
