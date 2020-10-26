import React from 'react';

import { BodyWrapper, Wrapper } from './styles';

import { Header } from '@components/LayoutWrapper/Header';

interface ILayoutWrapper {
  hasHeader: boolean
  pageRoutIndex?: string
}

export const LayoutWrapper: React.FC<ILayoutWrapper> = ({ hasHeader, children, pageRoutIndex }) => {
  return (
    <Wrapper>
      { hasHeader && <Header pageRoutIndex={ pageRoutIndex } /> }
      <BodyWrapper>
        { children }
      </BodyWrapper>
    </Wrapper>
  )
};
