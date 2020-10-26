import { authActionTypes as type } from '@src/store/actions/authActions';
import { IAuthInitialState } from '@src/store/reducers/types';

export const authInitialState: IAuthInitialState = {
  hasError: false,
  isLoading: false,
};

export default function (state = authInitialState, action: any) {
  switch (action.type) {
    case type.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case type.LOGIN_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }
    case type.REGISTRATION_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case type.REGISTRATION_REQUEST_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      }
    default:
      return state;
  }
}

export const getIsAuthError = (state: IAuthInitialState) => state.hasError;
