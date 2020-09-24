import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AuthContext,
  initialAuth,
} from '../../context/auth/AuthContextProvider';
import styles from './styles.module.scss';

const UserMenu = () => {
  const history = useHistory();
  const context = useContext(AuthContext);
  const { name } = context.auth;
  const { setAuth } = context;

  const handleLogout = () => {
    setAuth(initialAuth);
    localStorage.removeItem('auth');
    delete axios.defaults.headers.common['Authorization'];
    history.replace('/');
  };

  return (
    <div className={styles.userMenu}>
      <p className={styles.text}>Hello, {name}</p>
      <button className={styles.btnLogout} type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
