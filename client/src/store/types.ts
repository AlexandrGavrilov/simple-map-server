import {
  IUserInitialState,
  IAuthInitialState,
} from '@src/store/reducers/types';
import { authActionTypes } from '@src/store/actions/authActions';
import { registrationActionsTypes } from '@src/store/actions/registrationActions';

import { ICoords } from '@components/Map/Map';

import { userActionTypes } from '@src/store/actions/userActions';

export interface IState {
  auth: IAuthInitialState,
  user: IUserInitialState,
}

// AUTH

export interface ILoginSagaActionPayload {
  login: string, password: string
}

export interface ILoginSagaAction {
  type: typeof authActionTypes.LOGIN_REQUEST,
  payload: ILoginSagaActionPayload
}

// REGISTRATION

export interface IRegistrationActionPayload {
  login: string, password: string
}

export interface IRegistrationAction {
  type: typeof registrationActionsTypes.REGISTRATION_REQUEST,
  payload: IRegistrationActionPayload
}

// MAP
export type ISaveCoordsActionPayload = ICoords[];

export interface ISaveCoordsAction {
  type: typeof userActionTypes.SAVE_MARKERS,
  payload: ISaveCoordsActionPayload
}
