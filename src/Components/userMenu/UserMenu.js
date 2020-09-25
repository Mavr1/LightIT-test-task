import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context, initialContext } from '../../context/ContextProvider';
import styles from './styles.module.scss';

const UserMenu = () => {
  const history = useHistory();
  const context = useContext(Context);
  const {
    context: { name },
  } = context;
  const { setContext } = context;

  const handleLogout = () => {
    setContext(initialContext);
    const data = localStorage.getItem('context');
    const updatedData = { ...JSON.parse(data), name: '', isAuth: false };
    localStorage.setItem('context', JSON.stringify(updatedData));
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
