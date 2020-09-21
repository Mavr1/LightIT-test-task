import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from './routes';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';
import './App.scss';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
