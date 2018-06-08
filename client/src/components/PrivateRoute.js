import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Authentication from '../API/authentication';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const Auth = new Authentication();

  return (
    <Route
      {...rest}
      render={props => (
        Auth.privateRouteCheck() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
        )
    )}
    />
  );
};

export default PrivateRoute;
