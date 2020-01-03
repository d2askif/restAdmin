import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  component: any;
  layout: React.ElementType;
}

function RouteWithLayout(props: Props) {
  const { component: Component, layout: Layout, ...res } = props;
  return (
    <Route
      {...res}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    >
      {props.children}
    </Route>
  );
}

export default RouteWithLayout;
