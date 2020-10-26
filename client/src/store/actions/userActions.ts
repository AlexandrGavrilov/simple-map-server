import { ICoords } from '@components/Map/Map';

export const userActionTypes = {
  SET_PROFILE: 'SET_PROFILE',
  RESET_PROFILE: 'RESET_PROFILE',
  SAVE_MARKERS: 'SAVE_MARKERS',
}

export const userActions = {
  setProfile: (payload: any) =>
    ({ type: userActionTypes.SET_PROFILE, payload: payload }),
  resetProfile: () =>
    ({ type: userActionTypes.RESET_PROFILE }),
  saveMarkers: (markers: ICoords[]) =>
    ({ type: userActionTypes.SAVE_MARKERS, payload: markers }),
}
