import { call, takeLatest } from '@redux-saga/core/effects';
import { message } from 'antd';

import { ISaveCoordsAction } from '@src/store/types';

import { saveMarkersRequest } from '@src/api/user';

import { userActionTypes } from '@src/store/actions/userActions';


function* saveMarkersSaga(action: ISaveCoordsAction) {
  try {
    const response = yield call(saveMarkersRequest, action.payload);

    console.log(response)
    if (response.status === 200) {
      message.success('markers saved');
    } else {
      message.error(response.body);
    }
  } catch (e) {
    message.error(e.response.data);
    console.error(e);
  }
}

export const userSaga = [
  takeLatest(userActionTypes.SAVE_MARKERS, saveMarkersSaga),
];
