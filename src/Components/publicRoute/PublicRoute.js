import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContextProvider';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useContext(AuthContext);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
