import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ children, ...rest }) {
  const loggedIn = sessionStorage.getItem('uid_warehouse');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
