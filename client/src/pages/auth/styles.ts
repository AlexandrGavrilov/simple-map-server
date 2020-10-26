import styled, { CSSObject } from 'styled-components';

import { colors } from '@src/constants';

interface ILoginPageStyles {
  loginFormWrapper: CSSObject
  loginPageWrapper: CSSObject
  actionsWrapper: CSSObject
}

const loginPageStyles: ILoginPageStyles = {
  loginFormWrapper: {
    display: 'flex',
    width: 450,
    height: 300,
    boxShadow: `0px 6px 40px ${colors.MAIN_BLUE}`,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: '200px 0 30px 0'
  },
  loginPageWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  actionsWrapper: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}

export const LoginPageWrapper = styled.div`
  ${ loginPageStyles.loginPageWrapper }
`;

export const LoginFormWrapper = styled.div`
  ${ loginPageStyles.loginFormWrapper }
`;

export const ActionsWrapper = styled.div`
  ${ loginPageStyles.actionsWrapper }
`;
