import axios from 'axios';
import { config } from './config';

const { baseApiUrl } = config;

import { ILoginSagaActionPayload, IRegistrationActionPayload } from '@src/store/types';
import Cookies from 'js-cookie';

export const loginRequest = ({ login, password }: ILoginSagaActionPayload) => {
  return axios.post(`${baseApiUrl}/api/user/login`, { login, password }, {
    headers: {
      'auth-token': Cookies.get('auth-token'),
      "x-requested-with": "xhr"
    }
  })
}

export const registrationRequest = (data: IRegistrationActionPayload) => {
  return axios.post(`${baseApiUrl}/api/user/register`, data, {
    headers: {
      "x-requested-with": "xhr"
    }
  })
}
