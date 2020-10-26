import React from 'react';

import { LayoutWrapper } from '@components/LayoutWrapper';
import { Map } from '@components/Map';

import { HomePageWrapper } from '@src/pages/home/styles';

import { withRedirectIfNotAuth } from '@src/HOC/withRedirectIfNotAuth';


export const PureHomePage: React.FC = () => {
  return (
    <LayoutWrapper hasHeader pageRoutIndex='1'>
      <HomePageWrapper>
        <Map/>
      </HomePageWrapper>
    </LayoutWrapper>
  )
}

export const HomePage = withRedirectIfNotAuth(PureHomePage);
