import styled, {CSSObject} from 'styled-components';

interface ILayoutWrapperStyles {
  body?: CSSObject
  wrapper?: CSSObject
  header?: CSSObject
  menuWrapper?: CSSObject
  antdHeader?: CSSObject
}

export const layoutWrapperStyles: ILayoutWrapperStyles = {
  header: {
    width: '100vw',
  },

  antdHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  body: {
    display: 'flex',
    flex: '1 1',
    width: '100%',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  }
}

export const Wrapper = styled.div`
  ${ layoutWrapperStyles.wrapper }
`;
export const BodyWrapper = styled.div`
  ${ layoutWrapperStyles.body }
`;

export const HeaderWrapper = styled.div`
  ${ layoutWrapperStyles.header }
`;

export const MenuWrapper = styled.div`
  ${ layoutWrapperStyles.menuWrapper }
`;
