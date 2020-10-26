import React, {memo} from 'react';
import { redirectInNotAuthenticated } from '@src/utils';

export const withRedirectIfNotAuth = (
  Page: React.FC
) => memo((props: any) => (redirectInNotAuthenticated() ? null : <Page {...props} />));

