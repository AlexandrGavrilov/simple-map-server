import { userActionTypes as type } from '@src/store/actions/userActions';
import { IUserInitialState } from '@src/store/reducers/types';


export const userInitialState: IUserInitialState = {
  profile: {
    login: '',
    markers: [],
  }
};

export default function (state = userInitialState, action: any) {
  switch (action.type) {
    case type.SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    case type.RESET_PROFILE:
      return {
        ...state,
        profile: { ...userInitialState.profile }
      }
    default:
      return state;
  }
}

export const getUserProfile = (state: IUserInitialState) => state.profile;
