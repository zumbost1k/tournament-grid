import React from 'react';
import './mainPage.css';
import Header from '../header/header';
import Table from '../table/table';
import TournomentGrid from '../tournomentGrid/tournomentGrid';

const MainPage = () => {
  return (
    <div className='page'>
      <div className='content page_content'>
        <Header />
        <div className='body'>
          <Table />
          <TournomentGrid />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
