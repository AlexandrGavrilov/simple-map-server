import { call, put, takeLatest } from '@redux-saga/core/effects';
import Cookies from 'js-cookie';
import { message } from 'antd';

import { authActions, authActionTypes } from '@src/store/actions/authActions';

import {ILoginSagaAction, IRegistrationAction} from '@src/store/types';

import { loginRequest, registrationRequest } from '@src/api/auth';

import { registrationActions } from '@src/store/actions/registrationActions';
import { userActions } from '@src/store/actions/userActions';
import { pages } from '@src/constants';

import { redirect } from '@src/utils';

function* loginSaga(action: ILoginSagaAction) {
  try {
    const { login, password } = action.payload;

    const response = yield call(loginRequest, { login, password });

    if (response.status === 200) {
      const { login, markers } = response.data;
      yield put(authActions.loginSuccess())

      yield put(userActions.setProfile({ login, markers }))

      yield call(Cookies.set, 'auth-token', response.data.token);
      redirect(pages.ROOT);
    } else {
      message.error(response.body);
      yield put(authActions.loginError())
    }
  } catch (e) {
    message.error(e.response.data);
    console.error(e);
  }
}

function* registrationSaga(action: IRegistrationAction) {
  try {
    yield put(registrationActions.setLoading(true));

    const { login, password } = action.payload;

    const response = yield call(registrationRequest, { login, password });

    if (response.status === 200) {
      yield put(registrationActions.registrationSuccess())
      yield put(userActions.setProfile(response.data.login))

      yield call(Cookies.set, 'auth-token', response.data.token);
      redirect(pages.ROOT);
    } else {
      message.error(response.body);
      yield put(registrationActions.registrationError())
    }
  } catch (e) {
    message.error(e.response.data);
    console.error(e);
  }
}

export const authSagas = [
  takeLatest(authActionTypes.LOGIN_REQUEST, loginSaga),
  takeLatest(authActionTypes.REGISTRATION_REQUEST, registrationSaga),
];
