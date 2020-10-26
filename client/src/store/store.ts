/* See https://github.com/zeit/next.js/tree/acf7d0ad3bdde5fd579e80325894f4b8a262130f/examples/with-redux-saga */

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, initialState } from './rootReducer';
import rootSaga from './rootSaga';
import webpack from 'webpack';
import Devtool = webpack.Options.Devtool;

const isDev = process.env.NODE_ENV !== 'production';

const bindMiddleware = (middleware: any, useDevTools: Devtool) => {
  if (useDevTools) {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(state = initialState, useDevTools = isDev) {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(
    rootReducer(),
    state,
    bindMiddleware([sagaMiddleware], useDevTools),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
