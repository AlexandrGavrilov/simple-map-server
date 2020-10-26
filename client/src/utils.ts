import { createBrowserHistory } from 'history';
import Cookies from 'js-cookie';

import { pages } from '@src/constants';

let history: any = null;

export const getHistory = () => {
  if (!history) {
    history = createBrowserHistory();
  }
  return history;
};

export const isAuthenticated = () => {
  return !!Cookies.get('auth-token');
};

export const redirectIfAuthenticated = () => {
  if (isAuthenticated()) {
    redirect(pages.ROOT);
    return true;
  }
  return false;
};

export const redirectInNotAuthenticated = () => {
  if (!isAuthenticated()) {
    redirect(pages.AUTH);
    return true;
  }
  return false;
};

export const redirect = (target: string) => {
  try {
    getHistory().push(target);
  } catch (e) {
    console.error(e);
  }
};
