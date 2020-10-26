import React from 'react';
import { Image } from 'antd';

import { withRedirectIfNotAuth } from '@src/HOC/withRedirectIfNotAuth';
import { LayoutWrapper } from '@components/LayoutWrapper';
import { AboutPageWrapper } from '@src/pages/about/styles';

export const PureAboutPage: React.FC = () => {
  return (
    <LayoutWrapper hasHeader pageRoutIndex='2'>
      <AboutPageWrapper>
        <Image
          width='80%'
          src='havrylov_alexandr_cv.png'
        />
      </AboutPageWrapper>
    </LayoutWrapper>
  )
}

export const AboutPage = withRedirectIfNotAuth(PureAboutPage);
