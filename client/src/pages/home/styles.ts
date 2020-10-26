import styled, { CSSObject } from 'styled-components';

// import { colors } from '@src/constants';

interface IHomePageStyles {
  homePageWrapper: CSSObject
}

const homePageStyles: IHomePageStyles = {
  homePageWrapper: {
    width: '100%',
  },
}

export const HomePageWrapper = styled.div`
  ${ homePageStyles.homePageWrapper }
`;
