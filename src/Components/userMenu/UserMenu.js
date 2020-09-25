import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../context/ContextProvider';
import styles from './styles.module.scss';

const UserMenu = () => {
  const history = useHistory();
  const context = useContext(Context);
  const {
    context: { name },
  } = context;
  const { setContext } = context;

  const handleLogout = () => {
    setContext((state) => ({ ...state, isAuth: false, name: '' }));
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
