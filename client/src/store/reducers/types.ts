import { ICoords } from '@components/Map/Map';

// AUTH

export interface IAuthInitialState {
  hasError: boolean,
  isLoading: boolean,
}

// USER

export interface IUser {
  login: string,
  markers: ICoords[]
}

export interface IUserInitialState {
  profile: IUser;
}
