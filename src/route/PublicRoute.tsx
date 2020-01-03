import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
  Component: React.ComponentClass;
  path: string;
  exact?: boolean;
  isRestricted?: boolean;
  rest?: { [key: string]: any };
}

export const PublicRouter = ({
  Component,
  isRestricted,
  path,
  exact,
  ...rest
}: Props) => {
  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={props =>
        isRestricted ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};
