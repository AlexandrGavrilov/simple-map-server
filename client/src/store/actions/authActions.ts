import {registrationActionsTypes} from '@src/store/actions/registrationActions';

export const authActionTypes = {
  SET_LOADING: 'SET_LOADING',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_ERROR: 'LOGIN_REQUEST_ERROR',
  REGISTRATION_REQUEST: 'REGISTRATION_REQUEST',
  REGISTRATION_REQUEST_SUCCESS: 'REGISTRATION_REQUEST_SUCCESS',
  REGISTRATION_REQUEST_ERROR: 'REGISTRATION_REQUEST_ERROR',
}

import {ILoginSagaActionPayload, IRegistrationActionPayload} from '@src/store/types';

export const authActions = {
  setLoading: (isLoading: boolean) => ({ type: authActionTypes.SET_LOADING, payload: isLoading }),
  login: ({ login, password }: ILoginSagaActionPayload) =>
    ({ type: authActionTypes.LOGIN_REQUEST, payload: { login, password } }),
  loginSuccess: () =>
    ({ type: authActionTypes.LOGIN_REQUEST_SUCCESS}),
  loginError: () =>
    ({ type: authActionTypes.LOGIN_REQUEST_ERROR }),
  registration: (payload: IRegistrationActionPayload) =>
    ({ type: registrationActionsTypes.REGISTRATION_REQUEST, payload }),
  registrationSuccess: () =>
    ({ type: registrationActionsTypes.REGISTRATION_REQUEST_SUCCESS }),
  registrationError: (error: any) =>
    ({ type: registrationActionsTypes.REGISTRATION_REQUEST_ERROR, payload: error }),
}
