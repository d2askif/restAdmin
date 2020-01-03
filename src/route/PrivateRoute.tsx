import React from 'react';
import { Route, Redirect } from 'react-router-dom';
interface Props {
  isAuthenticated: boolean;
  Component: React.ElementType;
  redirectTo: string;
  path: string;
  exact?: boolean;
  rest?: { [key: string]: any };
}
export const PrivateRoute = ({
  isAuthenticated,
  Component,
  redirectTo,
  path,
  exact,
  ...rest
}: Props) => {
  return (
    <Route
      path={path}
      exact={exact}
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to={redirectTo} />
        );
      }}
    ></Route>
  );
};
