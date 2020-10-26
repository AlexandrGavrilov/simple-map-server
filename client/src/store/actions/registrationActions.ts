export const registrationActionsTypes = {
  SET_LOADING: 'SET_LOADING',
  REGISTRATION_REQUEST: 'REGISTRATION_REQUEST',
  REGISTRATION_REQUEST_SUCCESS: 'REGISTRATION_REQUEST_SUCCESS',
  REGISTRATION_REQUEST_ERROR: 'REGISTRATION_REQUEST_ERROR',
}

import { IRegistrationActionPayload } from '@src/store/types';

export const registrationActions = {
  setLoading: (payload: boolean) =>
    ({ type: registrationActionsTypes.SET_LOADING, payload }),
  registration: (payload: IRegistrationActionPayload) =>
    ({ type: registrationActionsTypes.REGISTRATION_REQUEST, payload }),
  registrationSuccess: () =>
    ({ type: registrationActionsTypes.REGISTRATION_REQUEST_SUCCESS }),
  registrationError: () =>
    ({ type: registrationActionsTypes.REGISTRATION_REQUEST_ERROR }),
}
