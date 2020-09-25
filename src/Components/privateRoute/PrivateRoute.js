import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../../context/ContextProvider';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const {
    context: { isAuth },
  } = useContext(Context);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
