import React, {memo, useCallback} from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';

import { HeaderWrapper, MenuWrapper, layoutWrapperStyles } from './styles';
import { pages } from '@src/constants';

import { userActions } from '@src/store/actions/userActions';
import { redirect } from '@src/utils';

const { Header: HeaderAntd } = Layout;

export const Header: React.FC<{ pageRoutIndex?: string }> = memo(({ pageRoutIndex }) => {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    redirect(pages.AUTH);
    dispatch(userActions.resetProfile());
    Cookies.remove('auth-token');
  }, [])

  return (
    <HeaderWrapper>
      <HeaderAntd style={ layoutWrapperStyles.antdHeader }>
        <MenuWrapper>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[pageRoutIndex || '1']}>
            <Menu.Item key="1">
              <Link to={ pages.ROOT }>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={ pages.ABOUT }>About</Link>
            </Menu.Item>
          </Menu>
        </MenuWrapper>
        <Button type='primary' onClick={ logOut }>Log out</Button>
      </HeaderAntd>
    </HeaderWrapper>
  )
})
