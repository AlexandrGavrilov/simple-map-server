import { combineReducers } from 'redux';
import _get from 'lodash/get';

import { IState } from '@src/store/types';
import authReducer, * as fromAuth from '@src/store/reducers/authReducer';
import userReducer, * as fromUser from '@src/store/reducers/userReducer';


export const initialState: IState = {
  auth: fromAuth.authInitialState,
  user: fromUser.userInitialState,
};

export const rootReducer = () => combineReducers({
  auth: authReducer,
  user: userReducer,
});

// USER
export const getUserProfile = (state: IState) => fromUser.getUserProfile(state.user);

// AUTH
export const getIsAuthError = (state: IState) => fromAuth.getIsAuthError(state.auth)

