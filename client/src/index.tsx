import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from './App';
import configureStore from './store/store';
import { getHistory } from '@src/utils';

const index = () => {
  const store = configureStore();
  const history: any = getHistory();

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ history }>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

document.addEventListener('DOMContentLoaded', index);
