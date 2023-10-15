import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './components/mainPage/mainPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import StartPage from './components/startPage/startPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/tournament' element={<MainPage />} />
          <Route path='*' element={<StartPage />} />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
