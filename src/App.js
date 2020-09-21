import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import PrivateRoute from './Components/privateRoute/PrivateRoute';
import PublicRoute from './Components/publicRoute/PublicRoute';
import './App.css';

function App() {
  return (
    <Switch>
      {routes.map((route) => {
        return route.private ? (
          <PrivateRoute key={route.label} {...route} />
        ) : (
          <PublicRoute
            key={route.label}
            {...route}
            restricted={route.restricted}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
