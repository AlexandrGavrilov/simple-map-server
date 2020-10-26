import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

import { pages } from './constants';

import { AuthPage } from '@src/pages/auth';
import { HomePage } from '@src/pages/home';
import { AboutPage } from '@src/pages/about';

import { authActions } from '@src/store/actions/authActions';
import 'antd/dist/antd.css';
import './styles.less';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = Cookies.get('auth-token')
    if (token) {
      dispatch(authActions.login({ login: 'tokenlogin', password: 'tokenlogin' }))
    }
  }, [])

  return (
      <Switch>
          <Route exact path={ pages.ROOT } component={ HomePage }/>
          <Route path={ pages.AUTH } component={ AuthPage }/>
          <Route path={ pages.ABOUT } component={ AboutPage }/>
          <Route path="*" >
              <Redirect to={ pages.ROOT }/>
          </Route>
      </Switch>
  );
};

export default hot(App);
