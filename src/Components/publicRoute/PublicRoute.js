import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../../context/ContextProvider';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const {
    context: { isAuth },
  } = useContext(Context);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth && routeProps.restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
