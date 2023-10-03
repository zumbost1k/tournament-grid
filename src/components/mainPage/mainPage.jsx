import React from 'react';
import './mainPage.css';
import Table from '../table/table';
import TournomentGrid from '../tournomentGrid/tournomentGrid';
import ControlPanel from '../controlPanel/controlPanel';

const MainPage = () => {
  return (
    <div className='page'>
      <div className='content page_content'>
        <div>
          <section className='body'>
            <Table />
            <TournomentGrid />
          </section>
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
