import React from 'react';
import { useDispatch } from 'react-redux';
import { LayoutWrapper } from '@components/LayoutWrapper';
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/es/form';

import { authActions } from '@src/store/actions/authActions';
import { LoginFormWrapper, LoginPageWrapper, ActionsWrapper } from '@src/pages/auth/styles';
import { withForm } from '@src/HOC/withForm';
import { withRedirectIfAuth } from '@src/HOC/withRedirectIfAuth';

export const PureAuthPage: React.FC<{ form: FormInstance }> = ({ form }) => {
  const dispatch = useDispatch();

  const onLogin = () => {
    const value = form.getFieldsValue();
    dispatch(authActions.login(value));
  }

  const onRegister = () => {
    const value = form.getFieldsValue();
    dispatch(authActions.registration(value));
  }

  return (
    <LayoutWrapper hasHeader={ false }>
      <LoginPageWrapper>
        <LoginFormWrapper>
          <Form
            style={{ width: 240 }}
            layout='vertical'
            name='auth'
            form={ form }
          >
            <Form.Item
              label='login'
              name='login'
              rules={[{ required: true, message: 'Please enter you login. Has to be minimum 6 charts', min: 6 }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            label='password'
            name='password'
            rules={[{ required: true, message: 'Please enter you password. Has to be minimum 6 charts', min: 6 }]}
            >
            <Input.Password />
            </Form.Item>

            <ActionsWrapper>
            <Button onClick={ onLogin } type='primary'>
            Login
            </Button>
            <Button onClick={ onRegister } type='primary'>
            Register
            </Button>
            </ActionsWrapper>
          </Form>
        </LoginFormWrapper>
      </LoginPageWrapper>
    </LayoutWrapper>
  )
}


export const AuthPage = withRedirectIfAuth(withForm(PureAuthPage));
