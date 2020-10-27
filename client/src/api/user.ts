import axios from 'axios';
import { config } from './config';
import Cookies from 'js-cookie';

import { ICoords } from '@components/Map/Map';

const { baseApiUrl } = config;

export const saveMarkersRequest = (markers: ICoords[]) => {
  return axios.post(`${baseApiUrl}/api/user/markers`, markers, {
    headers: {
      'auth-token': Cookies.get('auth-token'),
      "x-requested-with": "xhr"
    }
  })
}
