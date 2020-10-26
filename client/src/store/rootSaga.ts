import { all } from 'redux-saga/effects';

import { authSagas } from './sagas/authSaga';
import { userSaga } from '@src/store/sagas/userSaga';

function* rootSaga() {
  yield all([
    ...authSagas,
    ...userSaga,
  ]);
}

export default rootSaga;
