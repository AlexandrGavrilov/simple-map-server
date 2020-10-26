import React, { memo } from 'react';
import { redirectIfAuthenticated } from '@src/utils';

export const withRedirectIfAuth = (
  Page: React.FC
) => memo((props: any) => (redirectIfAuthenticated() ? null : <Page {...props} />));

