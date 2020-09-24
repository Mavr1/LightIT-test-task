import React, { useContext, useEffect } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import routes from './routes';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import PublicRoute from './components/publicRoute/PublicRoute';
import Header from './components/header/Header';
import { AuthContext } from './context/auth/AuthContextProvider';
import './App.scss';

function App() {
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('auth'));
    if (data.token) {
      setAuth((state) => ({
        ...state,
        isAuth: !!data.token,
        name: data.userName,
      }));
      axios.defaults.headers.common['Authorization'] = `Token ${data.token}`;
    }
  }, []);

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
