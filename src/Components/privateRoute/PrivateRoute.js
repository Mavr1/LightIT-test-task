import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContextProvider';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const {
    auth: { isAuth },
  } = useContext(AuthContext);

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
