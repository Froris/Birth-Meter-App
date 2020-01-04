import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MainPage from './components/mainPage';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <MainPage />
  </Provider>
) 


ReactDOM.render(jsx , document.getElementById('app'));