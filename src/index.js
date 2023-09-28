import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './components/mainPage/mainPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
         <MainPage />
    </Provider>
 
  </React.StrictMode>
);
